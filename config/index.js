require('dotenv').load();

const config = {
  port: parseInt(process.env.port, 10),
  host: process.env.host || '0.0.0.0',
};

module.exports = config;
