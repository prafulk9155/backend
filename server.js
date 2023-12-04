import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.send("Server is ready");
// })

const port = process.env.PORT || 3000;

const jokes = 
     [
      {
        "id": 1,
        "title": "Skeleton Fight",
        "content": "Why don't skeletons fight each other? They don't have the guts. 😂"
      },
      {
        "id": 2,
        "title": "Embracing Mistakes",
        "content": "I told my wife she should embrace her mistakes. She gave me a hug. 🤣"
      },
      {
        "id": 3,
        "title": "Parallel Lines",
        "content": "Parallel lines have so much in common. It's a shame they'll never meet. 😆"
      },
      {
        "id": 4,
        "title": "Anti-Gravity Book",
        "content": "I'm reading a book on anti-gravity. It's impossible to put down. 📚"
      },
      {
        "id": 5,
        "title": "Playing Piano",
        "content": "I used to play piano by ear, but now I use my hands. 🎹"
      }
    ]
  

app.get('/api/jokes',(req,res)=>{
    res.json(jokes);
})

app.listen(port,()=>{
    console.log(`server started on ${port}`);
});
