const express = require('express');

const app = express();

app.use('/', (req, res) => {
    console.log("Hello world!");
})

// Route places


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening on http://localhost:" + PORT);
});