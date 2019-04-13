
// const express = require("express");

// const mongoose = require('mongoose');

// //import models



// const bodyParser = require('body-parser');



// // import routes


// const Logger = require('./api/utils/Logger');



// app = express();

// port = process.env.PORT || 3000;

// dbString = process.env.MONGODB_URI;



// cloudinary.config({

// 	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,

// 	api_key: process.env.CLOUDINARY_API_KEY,

// 	api_secret: process.env.CLOUDINARY_API_SECRET

// });



// mongoose.Promise = global.Promise;

// mongoose.connect(dbString);



// app.use(bodyParser.urlencoded({

// 	extended: true

// }));

// app.use(bodyParser.json());



// app.use(passport.initialize());



// app.use(fileUpload({

// 	limits: {

// 		fileSize: 50 * 1024 * 1024

// 	},

// }));



// app.use(function (req, res, next) {

// 	res.setHeader('Access-Control-Allow-Origin', '*');

// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// 	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

// 	res.setHeader('Access-Control-Allow-Credentials', true);

// 	next();

// });



// notesRoutes(app);

// userRoutes(app);

// authRoutes(app);



// passportConfig.initializePassport();



// acl.initialize().then(() => {

// 	app.listen(port);

// 	Logger.log('Server started on port ' + port);

// });