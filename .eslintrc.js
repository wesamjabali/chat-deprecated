module.exports = {
    plugins: [
        'vue'
    ],
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended'
    ],
    rules: {
        // Generic Javascript Rules
        'space-before-blocks': [
            'error',
            'always'
        ],
        semi: 'error',
        quotes: [
            'warn',
            'single',
            {
                allowTemplateLiterals: true
            }
        ],
        'quote-props': [
            'error',
            'as-needed'
        ],
        'comma-dangle': [
            'warn',
            'never'
        ],
        'no-console': 'off',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxEOF: 1
            }
        ],
        'arrow-parens': [
            'error',
            'as-needed'
        ],
        'no-var': 'error',
        'key-spacing': [
            'error',
            {
                afterColon: true
            }
        ],
        'function-call-argument-newline': ['error', 'never'],

        'object-curly-spacing': [
            'warn',
            'always',
        ],
        'brace-style': [
            'warn',
            'stroustrup',
            {
                allowSingleLine: true
            }
        ],
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1
            }
        ],
        'object-property-newline': [
            'warn',
            {
                allowAllPropertiesOnSameLine: true
            }
        ],
        'no-floating-decimal': 'error',
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        'array-element-newline': [
            'error',
            {
                minItems: 1
            }
        ],
        'array-bracket-newline': [
            'error',
            {
                minItems: 1
            }
        ],

        // Vue Rules
        'vue/prop-name-casing': 'off',

        "vue/html-self-closing": ["error", {
            "html": {
                "void": "never",
                "normal": "always",
                "component": "always"
            },
            "svg": "always",
            "math": "always"
        }],

        'vue/html-indent': [
            'warn',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true
            }
        ],

        'vue/max-attributes-per-line': [
            'warn',
            {
                multiline: {
                    allowFirstLine: true
                }
            }
        ],

        'vue/html-closing-bracket-newline': [
            'warn',
            {
                singleline: 'never',
                multiline: 'never'
            }
        ],

        'vue/no-v-html': 'off',
        'vue/attributes-order': 'warn',
        'vue/singleline-html-element-content-newline': 'off',
    },
    globals: {
        Utils: 'readonly',
        Config: 'readonly',
        Authenticator: 'readonly',
        Renderer: 'readonly',
        global: 'readonly',
        Formatter: 'readonly',
        '_': 'readonly',
        Mapping: 'readonly',
        process: 'readonly',
        Events: 'readonly',
        MainBrowserWindow: 'readonly',
        use: 'readonly',
        DataTypes: 'readonly',
        Validator: 'readonly',
        require: 'readonly'
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 6,
        sourceType: 'module'
    }
};
