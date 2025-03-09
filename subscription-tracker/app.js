import express from 'express';

 const app = express();
 app.get('/', (req, res) => {
     res.send('welcome to the wizards page');
 });

app.listen(3000,()=>{
    console.log("app listening on 3000")
})
export default app;