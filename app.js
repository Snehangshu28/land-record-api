const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const searchRoute = require('./routes/search');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', searchRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
