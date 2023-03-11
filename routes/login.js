const {Router} = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const router = Router();


router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Войти',
        isLogin: false,
        
    });
});

router.post('/login', async (req, res) =>{
    
    const existUser = await User.findOne({email: req.body.email});
    if(!existUser) {
        console.log('error Email');
            res.render('login', {
            title: 'Войти',
            isLogin: false,
            loginError: 'email mavjud emas yoki xatolik mavjud'
        });
        return 
    }

    const isPassEqual = await bcrypt.compare(req.body.password, existUser.password)
    if(!isPassEqual) {
        console.log('error Password');
            res.render('login', {
            title: 'Войти',
            isLogin: false,
            loginError: 'parolda xatolik mavjud'
        });
        return 
    }
    console.log(existUser);
    res.render('kitob', {
        title: 'Книга',
        isKitob: true,
        secretSession:true
    });
});

module.exports = router