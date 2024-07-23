require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connect = require('./db');



const app = express();
const port = process.env.PORT || 5000;

connect();


app.use('/test-mongo', require('./Routes/test-mongo'));
app.use(cors());
app.use(express.json());
app.use("/validate", require('./Routes/validate'));
app.use("/boosters", require('./Routes/Boosters'));
app.use("/referral", require('./Routes/Referral'));
app.use("/update", require('./Routes/Update'));
app.use("/tasks", require('./Routes/Tasks'));



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
