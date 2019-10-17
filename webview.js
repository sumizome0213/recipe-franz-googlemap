const path = require('path');

module.exports = Franz => {
  Franz.injectCSS(path.join(__dirname, 'service.css'));
};