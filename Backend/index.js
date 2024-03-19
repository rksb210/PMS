require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandlerMiddleware = require("./middleware/errorHandler");

require("./models/index");
// const registration = require('./models/registrationModel')
// registration.sync({force:true})

app.use(cors());
app.use(express.json());

app.use(require("./routes/pricing"));
app.use(require("./routes/registration"));
app.use(require("./routes/login"));
app.use(require("./routes/billing"));
app.use(require("./routes/superadmin"));
app.use(require("./routes/licenseDetails"));
app.use(require("./routes/clientDetails"));
app.use(require("./routes/clientDashboard"));

app.use(errorHandlerMiddleware);

const start = async () => {
	try {
		app.listen(3000, () => {
			console.log("Server has started on port 3000");
		});
	} catch (error) {
		console.log(error);
	}
};
start();
