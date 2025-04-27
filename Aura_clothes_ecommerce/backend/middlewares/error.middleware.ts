import { NextFunction, Request, Response } from "express";

interface CustomError extends Error {
  statusCode?: number;
  code?: string;
  errors?: any[];
  field?: string;
}

const errorMiddleware = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  try {
    const error = { ...err };
    error.message = err.message;
    error.statusCode = err.statusCode || 500;

    // Handle missing required fields
    if (error.name === 'ValidationError') {
      error.statusCode = 400;
      return res.status(error.statusCode).json({
        success: false,
        message: 'Missing required fields',
        errors: error.errors
      });
    }

    // Handle invalid field types
    if (error.name === 'TypeError') {
      error.statusCode = 400;
      return res.status(error.statusCode).json({
        success: false,
        message: 'Invalid field type',
        field: error.field
      });
    }

    // Handle Prisma errors
    if (error.code?.startsWith('P2')) {
      error.statusCode = 400;
      return res.status(error.statusCode).json({
        success: false,
        message: 'Database validation failed',
        error: error.message
      });
    }

    // Default error
    return res.status(error.statusCode).json({
      success: false,
      message: error.message || 'Internal Server Error'
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

export default errorMiddleware;