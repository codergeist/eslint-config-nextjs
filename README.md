# Codergeist ESLint rules (Next.js)

Codergeist ESLint configuration package for Next.js projects.

### Usage

Install required dependencies:

```bash
npm i --save-dev https://github.com/codergeist/eslint-config-nextjs#1.0.0
```

Create ESLint configuration file .eslintrc.js extending from
`@codergeist/eslint-config-nextjs`:

```javascript
// eslintrc.js
module.exports = {
  extends: ['@codergeist/eslint-config-nextjs'],
}

```

Create Prettier configuration file .prettierrc.js:

```javascript
// prettierrc.js
const prettierConfig = require('@codergeist/eslint-config-nextjs/.prettierrc')

module.exports = prettierConfig;
```
