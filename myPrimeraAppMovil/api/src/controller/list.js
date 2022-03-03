const { Lista } = require('../db')

const listController = {}

listController.add = (req,res) => {
    const {name} = req.body
    res.send ('si anda')
}

module.exports = listController