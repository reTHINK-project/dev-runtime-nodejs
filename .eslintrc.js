module.exports = {
    "plugins": [
        "jasmine"
    ],
    "extends": ["eslint:recommended", "plugin:jasmine/recommended"],
    "env": {
        "browser": true,
        "es6": true,
        "jasmine": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};