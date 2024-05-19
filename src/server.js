const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const port = process.env.PORT || 3000;
const app = require('./app');

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
