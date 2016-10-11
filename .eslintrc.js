module.exports = {
    "env": {   
        "commonjs": true,
        "es6": true,
        "browser": true  
    },
    "extends": "eslint:recommended",
    "globals": {
        "$": true,
    },  
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};