const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
const flash = require('connect-flash');
const { get } = require('http');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
dotenv.config();

const app = express();

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767asasa",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));
app.use(cookieParser());


//Routes
const homeRouter = require('./routes/home');
const mundarijaRouter = require('./routes/mundarija');
const kitobRouter = require('./routes/kitob');
const loginRouter = require('./routes/login');
const registratsiyaRouter = require('./routes/registratsiya');
const bookget = require('./routes/bookget');
const { error } = require('console');






const hbs = exphbs.create({
    defaultLayout : 'main',
    extname : 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.urlencoded({extended: true}));

app.use('/public', express.static('public'));
app.use(homeRouter);
app.use(mundarijaRouter);
app.use(kitobRouter);
app.use(loginRouter); 
app.use(registratsiyaRouter);
app.use(express.json());
app.use(flash());



const startApp = () => {
try{
  mongoose.set('strictQuery', false);  
  mongoose.connect(process.env.MONGO_URI, 
    {useNewUrlParser: true},
    () =>
    console.log("Connected to MongoDB")
  );
  const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
      console.log(`open server ${PORT}`);
});
}catch (error) {
  console.log(error)
}
}
//   } catch (error) {
//     console.log(error);
//   }
// }

startApp();