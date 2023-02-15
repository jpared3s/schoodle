// load .env data into process.env
require("dotenv").config();
// const bcrypt = require('bcrypt');

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const morgan = require("morgan");

const bcrypt = require("bcrypt");
<<<<<<< HEAD
var methodOverride = require("method-override");
=======
const cookieSession = require('cookie-session');

>>>>>>> 1a459f9eb37a1006db7152839ed39a3e160d1505

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['key1'],
  maxAge: 24 * 60 * 60 * 1000
}));

app.set("view engine", "ejs");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static("public"));
<<<<<<< HEAD
app.use(methodOverride("_method"));
=======


app.use(cookieSession({
  name: 'session',
  keys: ['maplesyrup', 'beaver', 'lacrosse'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

>>>>>>> 1a459f9eb37a1006db7152839ed39a3e160d1505
const { Pool } = require("pg"); //importing the database connection



// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require("./routes/users-api");
const widgetApiRoutes = require("./routes/widgets-api");

const usersRoutes = require("./routes/users");
const registerRoutes = require("./routes/register");



const profileRoutes = require("./routes/profileUpdate");
const loginRoutes = require("./routes/login");
const homeRoutes = require("./routes/home");

const newRoutes = require("./routes/addResource");


const likesRoutes = require("./routes/likes");
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", userApiRoutes);
app.use("/api/widgets", widgetApiRoutes);
app.use("/users", usersRoutes);
app.use("/register", registerRoutes);
app.use("/likes", likesRoutes);
app.use("/profile", profileRoutes);

app.use("/login", loginRoutes);
app.use("/home", homeRoutes);
 // http://localhost:8080/login  1. get/    2/ get./test    http://localhost:8080/login/test

app.use("/addResource", newRoutes);
app.use("/submitRegister", registration)

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).


// plug into Login later
// req.session.user_id = req.body.email;


app.get("/", (req, res) => {
  // const resources = require("./data/resources.json");
  // const comments = require("./data/comments.json");

  res.render(
    "index"
    // resources,
    // comments,
  );
});

<<<<<<< HEAD
=======
app.get("/:id/likes", (req, res) => {
  res.render("likesPage");
});
app.get("/register", (req, res) => {
  res.render("registration");
});


// app.post("/register", (req, res) => {
//   console.log(req.body);
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;

//   pool
//     .query(
//       `
//   INSERT INTO users (name,email,password)
//   VALUES($1,$2,$3)
//   RETURNING*;
//   `,
//       [name, email, password]
//     )
//     .then((result) => {
//       console.log(result.rows[0]);
//     })
//     .catch((err) => {
//       console.log(err.message);
//       return null;
//     });
//   res.redirect("/");
// });

// app.get('/login', (req, res) => {
//   //established user variable with cookie
//   // if (user) {
//   //   res.redirect('/')
//   //   return;
//   // }
//   res.render('login');
// });

// app.post('/login', (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   pool.query(`
//     SELECT *
//     FROM users
//     WHERE email = $1 AND password = $2;
//     `, [email, password])
//   //   WHERE email = $1;
//   // `, [email])
//     .then(result => {

//       if (result.rows.length > 0 && bcrypt.compareSync(req.body.password, result.rows[0].password)) {
//        req.session.user = req.body.email;
//        req.session.user_id = result.rows[0].id;
//        console.log(req.session.user_id);
//         res.redirect('/profile');
//       } else {
//         res.send('Error: invalid email or password');
//       }
//     })
//     .catch(err => console.error('query error', err.stack));
// });

>>>>>>> 1a459f9eb37a1006db7152839ed39a3e160d1505
app.get("/login", (req, res) => {
  //established user variable with cookie
  // if (user) {
  //   res.redirect('/')
  //   return;
  // }
  res.render("login");
});



//set id to cookie

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
