const fs = require('fs-extra');

fs.copy('locales', 'dist/locales', function (err) {
  if (err) {
    console.error('Error copying locales:', err);
  } else {
    console.log('Locales copied successfully.');
  }
});
