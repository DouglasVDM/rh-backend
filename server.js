const app = require('./app.js');
console.log("app",app);

require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, async() => {
  console.log(`Server is listening on port ${PORT}`);
});