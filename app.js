const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = config.PORT || 8080;
const MONGO_URI = config.MongoURI;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', require('./routes/table.routes'));

(async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`App has ben started at port ${PORT}`));
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})()

