const {Router} = require('express');
const router = Router();

router.get('/mundarija', (req, res) => {
    res.render('mundarija', {
        title: 'Оглавление',
        isMundarija: true
    });
});

module.exports = (router);