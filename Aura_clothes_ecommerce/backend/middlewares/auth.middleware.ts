import jwt, { JwtPayload } from 'jsonwebtoken'
import { JWT_SECRET } from '../config/env'
import { NextFunction, Request, Response } from 'express'
import prisma from '../config/prisma_client'


// Extend Express Request type to include user property
// declare global {
//   namespace Express {
//     interface Request {
//       client?: {
//         id: string
//         email: string
//         password: string
//         balance: number
//       }
//     }
//   }
// }



export interface CustomRequest extends Request{
    user?: any
}

const authorize = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    let token: string | undefined
    
    // 1. Get token from Authorization header
    if (req.headers.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - No token provided' })
    }

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload

    // 3. Get user from database using Prisma
    const client = await prisma.client.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        balance: true,
        // Exclude password from the response
        
        // Add other fields you need in your routes
      }
    })

    if (!client) {
      return res.status(401).json({ message: 'Unauthorized - User not found' })
    }

    // 4. Attach user to request object
    req.user = client
    next()
    
  } catch (error: any) {
    // Handle specific JWT errors
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Session expired - Please log in again' })
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' })
    }
    
    // Generic error response
    res.status(401).json({ 
      message: 'Authentication failed',
      error: error.message 
    })
  }
}

export default authorize