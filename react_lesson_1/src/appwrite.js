import {Client, Databases,ID, Query} from "appwrite";
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;


// creating a client
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);
const database  = new Databases(client)
// updating search count in our database
export const UpdateSearchcount = async (searchTerm,movie)=>{
    // use the sdk to check if the movie exists in the database
    try{
        const result= await database.listDocuments(DATABASE_ID,COLLECTION_ID,[
            Query.equal('searchTerm',searchTerm),
        ])
        // if it does exists update the count + 1 ( the count is tracking the number of times the movie is searched )
        if(result.documents.length > 0){
            const doc = result.documents[0];
            await database.updateDocument(DATABASE_ID,COLLECTION_ID,doc.$id,{count: doc.count+1,})
        }
        // if the movie doesn't exists in our database we create one using the search term and increase the count number to 1
        else{
            await   database.createDocument(DATABASE_ID,COLLECTION_ID,ID.unique(),{searchTerm,count:1,movie_id:movie.id,poster_url:`https://image.tmdb.org/t/p/w500${movie.poster_path}`})
        }
    }catch(e){
        console.log("error in trending movie",e)
    }
}
// retrieving trending movies from the database

export const getTrendingMovies = async ()=>{
    try {
        const results =  await database.listDocuments(DATABASE_ID,COLLECTION_ID,[
            Query.limit(5),//we are limiting our retrieval to 5 results
            Query.orderDesc("count")// we are retrieving in a descending order and based on the "count"
        ])
        return results.documents;
    }catch (e){
        console.error("Error getting trending movies ", e);
    }
}