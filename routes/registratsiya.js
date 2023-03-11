const { Router } = require('express');
const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const router = Router();

router.get('/registratsiya', (req, res) => {
    res.render('registratsiya', {
        title: 'Войти',
        isRegistratsiya: false
        
    });
});

router.post('/registratsiya', async (req, res) => {
   var validator = require("email-validator");
 
    if (validator.validate(req.body.email) == false) {
        res.render('registratsiya', {
            title: 'Войти',
            isRegistratsiya: false,
            registratsiyaError: 'bu Email xato'
        });
        return
    }
    

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const userData = {
        email: req.body. email,
        username: req.body.username,
        password: hashedPassword,
    }
    

    const candidate = await User.findOne({email: req.body. email});
    if(candidate) {
        res.render('registratsiya', {
            title: 'Войти',
            isRegistratsiya: false,
            registratsiyaError: 'bu Email mavjud'
        });
        return
    }
    const user = await User.create(userData);
    
    console.log(user);
   res.redirect('/'); 
                
});

module.exports = router;