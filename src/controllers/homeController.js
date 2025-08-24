const connection = require('../config/database');
const {getAllUsers} = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results});
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

const getUpdatePage = (req, res) => {
    const userID = req.params.id;
    res.render('edit.ejs')
}

module.exports = {
    getHomepage,
    getSample,
    getABC,
    postCreateUser,
    getCreatePage,
    getUpdatePage
}