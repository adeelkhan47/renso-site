module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: "off",
    indent: "off",
    quotes: "off",
    "space-before-function-paren": "off",
    "standard/no-callback-literal": "off",
    "prefer-promise-reject-errors": "off"
  }
};
