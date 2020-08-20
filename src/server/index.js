require('@babel/register')({
  "presets": [
    [
      "@babel/preset-env", {
        "targets": {
          "node": "current"
        }
      }
    ]
  ],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
});

module.exports = require('./server.js');
