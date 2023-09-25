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
  "singleQuote": true,
  "proseWrap": "never",
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  // 下面是默认设置
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "vueIndentScriptAndStyle": false,
  "quoteProps": "as-needed",
  "bracketSpacing": true,
  "trailingComma": "es5",
  "jsxSingleQuote": false,
  "arrowParens": "always",
  "insertPragma": false,
  "requirePragma": false
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
    "baseUrl": ".",
    "rootDir": ".",
    "target": "ES2018",
    "module": "ESNext",
    "moduleResolution": "node",
    "jsx": "preserve",
    "newLine": "LF",
    "lib": ["ES2018", "DOM", "DOM.Iterable"],
    "strict": true,
    "allowJs": false,
    "noUnusedLocals": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "skipLibCheck": true,
    "sourceMap": false,
    "removeComments": false,
    "useDefineForClassFields": false,
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": [],
  "exclude": []
}
```
