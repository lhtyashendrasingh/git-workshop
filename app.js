console.log(`Current environment: ${process.env.NODE_ENV}`);




const features = require('./config');  // Import the config

// Conditionally enable features
if (features.Albums) {
  console.log('Albums feature is enabled!');
} else {
  console.log('Albums feature is disabled!');
}

if (features.Avatar) {
  console.log('Avatar feature is enabled!');
} else {
  console.log('Avatar feature is disabled!');
}
