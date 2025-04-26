import { PrismaClient } from "./generated/prisma";

const prisma =  new PrismaClient();

const main = async()=>{

    const user = await prisma.user.create({
        data:{
            name:"Innocent",
            email:"innocent@gmail.com",
        }
    });
    console.log(user);
    

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })