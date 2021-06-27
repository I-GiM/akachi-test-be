const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.Promise = global.Promise;

try {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch(e) {
  throw e;
};

mongoose.connection.on('connected', () => {
  console.log(`connected to database app_test`);
});

mongoose.connection.on('error', e => {
  console.log(e)
});