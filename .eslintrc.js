module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "javascript.format.placeOpenBraceOnNewLineForControlBlocks": false,
    "javascript.format.placeOpenBraceOnNewLineForFunctions": false,
    "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
    "typescript.format.placeOpenBraceOnNewLineForControlBlocks": false,
    "typescript.format.placeOpenBraceOnNewLineForFunctions": false,
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatter.js": "vscode-typescript"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
