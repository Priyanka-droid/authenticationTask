const mongoose = require("mongoose");

<<<<<<< HEAD
const DB = `mongodb+srv://${process.env.USERNAME}:${process.env.PASS}@cluster0.rqzx6.mongodb.net/registration?retryWrites=true&w=majority`;
=======
const DB =
  `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.rqzx6.mongodb.net/registration?retryWrites=true&w=majority`;
>>>>>>> 543209708f75c6c88d7467ae7f53021a92173ca5
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Mongodb running`);
  })
  .catch(() => {
    console.log(`Mongodb connection failed`);
  });
// mongoose
// .connect("mongodb://localhost:27017/registration", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// })
// .then(() => {
//   console.log(`Mongodb running`);
// })
// .catch(() => {
//   console.log(`Mongodb connection failed`);
// });
