const { Router } = require("express");
const router = Router();
const listController = require("../controller/list.js");


router.get("/",listController.add)

module.exports = router;