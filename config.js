// config.js
const fs = require('fs');
const featureFlags = JSON.parse(fs.readFileSync('feature-flags.json', 'utf8'));
const environment = process.env.NODE_ENV || 'development';  // Default to development
module.exports = featureFlags[environment];
