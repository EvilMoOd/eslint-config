# eslint-config-mu

Mu ESLint config
木的项目代码自用规范
vue参考Element-Plus
react参考Ant-design

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

### script


```json
    "lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx,.md,.json --max-warnings 0 --cache",
    "lint:fix": "pnpm run lint --fix",
    "lint:commit": "commitlint --from $(git merge-base origin/dev HEAD) --to HEAD > ./commit-lint.txt",
```

### Vue

### Vue TS

Need `tsconfig.json` presented and `typescript` installed as devDependencies.


```json
{
  "eslintConfig": {
    "extends": ["@evilmu/common/vue"]
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
    "sourceMap": false,
    "importHelpers": true,
    "allowJs": false,
    "noUnusedLocals": true,
    "resolveJsonModule": true,
    "removeComments": false,
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
    "**/*.ts",
    "**/*.tsx",
    "**/*.vue",
    "**/*.js",
    "test/**/*.ts",
    "test/**/*.tsx",
  ],
  "exclude": [
    "node_modules",
    "**/dist",
    "**/__tests__/**/*",
    "**/gulpfile.ts",
    "**/test-helper",
    "packages/test-utils",
    "**/*.md"
  ]
}
```