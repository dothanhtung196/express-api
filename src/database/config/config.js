require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DEVELOPMENT_USERNAME,
    "password": process.env.DEVELOPMENT_PASSWORD,
    "database": process.env.DEVELOPMENT_DATABASE,
    "host": process.env.DEVELOPMENT_HOST,
    "dialect": process.env.DEVELOPMENT_DIALECT,
  },
  "test": {
    "username": process.env.TEST_USERNAME,
    "password": process.env.TEST_PASSWORD,
    "database": process.env.TEST_DATABASE,
    "host": process.env.TEST_HOST,
    "dialect": process.env.TEST_DIALECT,
  },
  "production": {
    "username": process.env.PRODUCT_USERNAME,
    "password": process.env.PRODUCT_PASSWORD,
    "database": process.env.PRODUCT_DATABASE,
    "host": process.env.PRODUCT_HOST,
    "dialect": process.env.PRODUCT_DIALECT,
  }
}
