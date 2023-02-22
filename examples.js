const http = require('http');
const port = 5000;
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
app.use(express.json());
const uri="mongodb+srv://global_greenery:AMSLhK6Hsreknhjy@cluster0.dx9squ7.mongodb.net/?retryWrites=true&w=majority"
// mongoose.set('useNewUrlParser', true);
    // mongoose.set('useFindAndModify', false);
    // mongoose.set('useCreateIndex', true)
// const options = {
//     useNewUrlParser: true,
//     useFindAndModify:false,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   };
mongoose
  .connect(uri)
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch((err) => console.log(err))

//   const userSchema = mongoose.Schema({
//     name:'string',email:'email',password:'string'
//   });
const Schema = mongoose.Schema;
  const userSchema = new Schema(
    {
      username: {
        type: String,
        // ref: "User",
      },
      password: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );
  const userModel = mongoose.model('user',userSchema);

  app.post('/postUser',(req,res)=>{
    const u = req.body;
    const user = userModel.create(u,(err)=>{
        if(err) throw err;
        console.log("User is created");
        res.json({
            "messsage":"user is created"
        });
    });
  });



// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end("Hello World");
// }).listen(port,()=>{
//     console.log(`The server is listening on port ${port}`);
// });
// function isLogged() {
//     console.log("IsLogged functiion runs");
// }
// app.use('/user',isLogged)
// .get('/getUser',(req,res)=>{
//     res.send("getUser");
//     res.end();
// })
// .post('/postUser',(req,res)=>{
//     res.send(
//        "postUser"
//     )
// })

// app.all('/secret', (req, res, next) => {
//     console.log('Accessing the secret section ...');
//     res.send("JIIJ")
//     next() // pass control to the next handler
//   });
//   app.route('/book')
//   .get((req, res) => {
//     res.send('Get a random book')
//   })
//   .post((req, res) => {
//     res.send('Add a book')
//   })
//   .put((req, res) => {
//     res.send('Update the book')
//   })
  router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })
  // define the home page route
  router.get('/', (req, res) => {
    res.send('Birds home page');
    console.log('1');
  })
  // define the about route
  router.get('/about', (req, res) => {
    res.send('About birds')
  })
  app.use('/birds',router);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
