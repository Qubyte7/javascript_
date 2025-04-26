import { create } from "domain";
import { PrismaClient } from "./generated/prisma";

const prisma =  new PrismaClient();

const main = async()=>{
// creating a author
    // const author = await prisma.author.create({
    //     data:{
    //         name:"Innocent",
    //         email:"innocent@gmail.com",
    //  }});

//retrivieing all authors
    const authors = await prisma.author.findMany({
        include:{
            books:true,
        },
    });

//retriveing all books

    // const books = await prisma.book.findMany();
    
//multiquery
    // const author = await prisma.author.create({
    //     data:{
    //         name:"rcoding",
    //         email:"rcoding@gmail.com",
    //         books: {
    //             create:[
    //                 {
    //                     name: 'Development with prisma !'
    //                 },
    //                 {
    //                     name: 'Kinya Whisper NLP'
    //                 }
    //             ]
    //         }
    //  }});   
   
    console.log(authors);
    

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