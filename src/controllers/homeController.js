const connection = require('../config/database');
let users = [];

const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const getSample = (req, res) => {
    res.send('This is sample page');
}

const getABC = (req, res) => {
    res.send('check abc');
}

const postCreateUser = (req, res) => {
    // res.send("Create user success");
    // console.log("check req.body: ", req.body);


    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    connection.query(
        `INSERT INTO 
    Users (email, name, city) 
    VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            res.send('Create user success');
        }
    );
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomepage,
    getSample,
    getABC,
    postCreateUser,
    getCreatePage
}