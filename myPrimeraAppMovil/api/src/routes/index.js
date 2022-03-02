const { Router } = require('express');
const router = Router();

//const notificaciones = require("./mailsNotificaciones")

router.get('/hola',(req,res) => { 
    res.send('hola')
    })

//router.use("/notificaciones", notificaciones)

module.exports = router;
