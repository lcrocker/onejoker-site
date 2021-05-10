module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "no-async-foreach",
  ],
  rules: {
    quotes: ["error", "double"],
    indent: [ "error", 4 ],
    semi: [ "error", "always" ],
    eqeqeq: [ "error", "always" ],
    "max-len": [ "warn", { "code": 250 } ],
    "require-jsdoc": [ "off" ],
    "valid-jsdoc": [ "off" ],
    "object-curly-spacing": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ],
    "no-unused-vars": [ "warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" } ],
    "@typescript-eslint/no-unused-vars": [ "warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" } ],
    // "no-async-foreach/no-async-foreach": 2,
  },
};
