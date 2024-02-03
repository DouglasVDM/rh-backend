const app = require('./app.js');

require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, async() => {
  console.log(`Server is listening on port ${PORT}`);
});