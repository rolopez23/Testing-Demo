const express = require('express');
const path = require('path');

const PUBLIC = path.resolve(__dirname, '..', 'public');
const app = express();
const PORT = 3000;

app.use(express.static(PUBLIC))

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
})
