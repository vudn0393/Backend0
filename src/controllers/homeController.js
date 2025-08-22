const getHomepage = (req, res) => {
    res.send('Welcome to the homepage!');
}

const getSample = (req, res) => {
    res.send('This is sample page');
}

const getABC = (req, res) => {
    res.send('check abc');
}

module.exports = {
    getHomepage,
    getSample,
    getABC,
}