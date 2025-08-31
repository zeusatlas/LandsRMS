const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.reporter = {
  update(event) {
    if (event.type === 'warning' &&
        event.message.includes('expected version')) {
      return; // ignore React/RN warnings
    }
    // otherwise, show normally
    console.log(event);
  },
};

module.exports = config;
