# eslint-config-mu

Mu ESLint config

## Install


```bash
pnpm i eslint @evilmu/eslint-config-common -D
```

### Notice



- 配置 prettierrc

  .prettierrc

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

### Vue TS

Need `tsconfig.json` presented and `typescript` installed as devDependencies.

```json
{
  "eslintConfig": {
    "extends": ["@evilmu/common/vue-ts"]
  }
}
```
### React

```json
{
  "eslintConfig": {
    "extends": ["@evilmu/common/react"]
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