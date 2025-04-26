import { create } from "domain";
import { PrismaClient } from "./generated/prisma";


const prisma =  new PrismaClient();

const main = async()=>{
// creating a author
    // const author = await prisma.author.create({
    //     data:{
    //         name:"byose",
    //         email:"byose@gmail.com",
    //         profile:{
    //             create:{
    //                 github: "byoseGT",
    //                 instagram: "byose__7002"
    //             }
    //         }
    //  }});

//retrivieing all authors
    const authors = await prisma.author.findMany({
        include:{
            books:true,
        },
    });
//retrieving only one author
     const author = await prisma.author.findUnique({
        where:{
            id:1
        }
     })


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
    
// creating new categories
// const category = await prisma.category.createMany({
//     data:[
//         { categoryname:"entertainment"},{categoryname:"Politics"},{categoryname:"science"},{categoryname:"psychology"}
//     ]
// })

//creating records for category on book model

    let category=await prisma.category.findFirst({
        where:{
        categoryname:"science"
        }
    })
    if(!category){
        const newCategory=await prisma.category.create({
            data:{
            categoryname: "Fantasy"
            }   
        })
        category=newCategory;
    }
    
    //creating a new book with its new category
    const newbook = await prisma.book.create({
        data:{
            name:"Mantis",
            authorId: author?.id,
           

        }
    })
// create joint record
const categoryAndBooks=await prisma.categoryOnBooks.create({
    data:{
        categoryName:category?.categoryname,
        bookCategoryId:category?.id,
        bookId:newbook.id,
        bookName:newbook.name   

    }
})


// console.log(category);




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