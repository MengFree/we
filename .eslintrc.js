module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "warn",
            4
        ],
        // "linebreak-style": [
        //     "error",
        //     "windows"
        // ],
        // "quotes": [
        //     "error",
        //     "double"
        // ],
        // "semi": [
        //     "error",
        //     "never"
        // ],
        "no-console": "off"
    }
};