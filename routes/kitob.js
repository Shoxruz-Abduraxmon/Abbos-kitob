const {Router} = require('express');
const router = Router();
 const fs = require('fs');
 const path = require('path');

//converts all the pages of the given pdf using the default options 
router.post('/bookget', (req, res) => {
res.send({
      data: req.body.value,
      data2: req.body.value2
      
   });
});
router.post('/bookmobile', (req, res) => {
res.send({
      data: req.body.value
      
   });
});

router.get('/kitob', (req, res) => {
	

	const directoryPath = 'public/book';
var into = [];

var bookdata;
	fs.readdir(directoryPath, function(err, files) {
   
        
    	files.forEach(function (file) {
into.push(file);

  //      		var data = fs.readFileSync('mynewfile1.json');
		// 	var myObject= JSON.parse(data);
		// 	// console.log(myObject);
		// 	newData = {name: file};
		// 	myObject.push(newData);
		// 	var last = JSON.stringify(myObject);
		// 	console.log(last);
		// 	fs.writeFile('mynewfile1.json', last, function (err) {
  // 				console.log(err);
		// 	});
		// 	// // var its = JSON.stringify(newData);
		// 	// fs.writeFileSync('mynewfile1.json', its);

		});
	 
    res.render('login', {
        title: 'Книга',
        isKitob: true,
        bookdata: into
    });
    });

    // PDF text
    // console.log(pdfdata);

    

});


module.exports = router;