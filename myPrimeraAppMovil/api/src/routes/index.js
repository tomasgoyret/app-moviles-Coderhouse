const { Router } = require('express');
const router = Router();

const listRoutes = require("./List")

//listas
router.use('/list',listRoutes)


module.exports = router;
