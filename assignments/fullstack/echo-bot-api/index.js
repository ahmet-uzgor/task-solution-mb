const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// App configs for request data parsing & cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/echoMessage", (req, res) => {

    const { message } = req.body;

    if(!message) {
        return res.sendStatus(400).json({ errorMessage: 'There is no given message' });
    }

    res.status(200).json(message);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});