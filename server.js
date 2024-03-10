//#region imports
const express = require('express');
const path = require('path');
const fs = require('fs');
const fsp = require('fs').promises;
const dates = require('date-fns');
const cors = require('cors');
const {logger} = require('./middleware/LogEvents');
const {errorHandler} = require('./middleware/ErrorHandler');
const {getPath} = require('./javascripts/utils.js');
const app = express();
//#endregion

const PORT = process.env.PORT || 80;


//#region Middleware

app.use(logger);

app.use(cors());

app.use(express.urlencoded({extended: false}));

app.use(express.json());

//#endregion


//Serve static files
app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/others', express.static(path.join(__dirname, '/public')));

//Routes
app.use('/', require('./routes/root'));
app.use('/employees', require('./routes/api/employees'));
app.use('/others', require('./routes/others'));

//Page not found!
app.all('*', (req, res) => {
    res.status(404);
    if(req.accepts('html'))
        res.sendFile(getPath('404'));
    else
        res.json({"Error!":"404 Not Found!"});
});

//Start listening server!
app.listen(PORT, '0.0.0.0', () =>
                        console.log(`Server is running on port ${PORT}`));



/*
Just a quick note about Retrofit!


interface UserService{
    @POST("/users")
    Call<User> createUser(@Body User user);
}

-> This interface sends the user object's data and extra routing is not required!

app.post('/users', (req, res) => {
    const { name, age } = req.body;
    console.log(`New user: ${name}, age: ${age}`);
})

*/