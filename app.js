const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const expressSession = require("express-session");
const flash =require("connect-flash");

// Ensure these files exist
const ownersRouter = require("../Express/routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const indexRouter = require("./routes/index");
// Import and ensure the mongoose connection is established
const db = require("./config/mongoose-connection");
require("dotenv").config();
// Middleware for parsing requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    expressSession({
        resave:false,
        saveUninitialized:false,
        secret:process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Define routes
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/", indexRouter);
// Catch-all route for handling 404 errors
app.use((req, res, next) => {
    res.status(404).send("Page Not Found");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
