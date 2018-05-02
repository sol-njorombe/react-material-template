module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint", 
    "env": {
        "browser": true
    },
    "plugins": [
        "no-storage"
    ],
    "rules": {
        "no-alert": 0,
        "no-underscore-dangle": 0,
        "no-storage/no-browser-storage": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": 0,          
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }]
      }
};