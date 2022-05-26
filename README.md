# eslint-config-mu

Mu ESLint config

## Install


```bash
pnpm i eslint @mu/eslint-config -D
```

### Notice

- 项目需要 `pnpm add eslint prettier -D` (due to peerDepencies)

- 配置 prettierc

  .prettierc

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "vueIndentScriptAndStyle": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "bracketSpacing": true,
  "trailingComma": "es5", 
  "jsxBracketSameLine": true,
  "jsxSingleQuote": false,
  "arrowParens": "always",
  "insertPragma": false,
  "requirePragma": false,
  "proseWrap": "never",
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto"
}
```

## Use

In `package.json`.

### React

```json
{
  "eslintConfig": {
    "extends": ["@evilmu/common/react"]
  }
}
```

### JS

```json
{
  "eslintConfig": {
    "extends": ["@evilmu/common"]
  }
}
```

### Vue

```json
{
  "eslintConfig": {
    "extends": ["@evilmu/common/vue"]
  }
}
```

### TS

Need `tsconfig.json` presented and `typescript` installed as devDependencies.

```json
{
  "eslintConfig": {
    "extends": ["@evilmu/common/ts"]
  }
}
```

### Vue TS

Need `tsconfig.json` presented and `typescript` installed as devDependencies.

```json
{
  "eslintConfig": {
    "extends": ["@evilmu/common/vue-ts"]
  }
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "lib": ["esnext", "dom", "dom.iterable", "scripthost"]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "src/**/*.js",
    "tests/**/*.ts",
    "tests/**/*.tsx",
    "fec.config.js"
  ],
  "exclude": ["node_modules"]
}
```

## Release

use np

```
npm i -g np
np --yolo --no-yarn
```
