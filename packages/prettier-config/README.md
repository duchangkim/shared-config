# @duchi/prettier-config

## Installation

단독으로 사용할 경우:

```bash
npm i -D @duchi/prettier-config
```

prettier와 함께 사용할 경우:

```bash
npm i -D prettier @duchi/prettier-config
```

## Usage

이 Prettier 구성을 사용하려면 `package.json` 파일에 다음을 추가하세요.

```json5
{
  // ... 기존 package.json 내용
  prettier: "@duchi/prettier-config",
}
```

또는 프로젝트 루트에 `.prettierrc`파일을 만들고 다음을 추가하세요.

```json
"@duchi/prettier-config"
```

## Extending the Configuration

필요에 따라 이 구성을 확장해야 하는 경우 프로젝트 루트에 `prettier.config.js` 또는 `.prettierrc.js` 파일을 생성하고 `@duchi/prettier-config` 설정을 가져오면 됩니다.

```js
module.exports = {
  ...require("@duchi/prettier-config"),
  printWidth: 100,
  semi: false,
};
```

### Prettier Configuration File

Prettier는 다양한 방법으로 설정을 지원합니다. 설정 파일은 다음 순서대로 우선순위를 가집니다:

1. `package.json` 파일의 `"prettier"` 키
2. `.prettierrc` 파일 (JSON 또는 YAML 형식)
3. `.prettierrc.json`, `.prettierrc.yml`, `.prettierrc.yaml`, `.prettierrc.json5` 파일
4. `.prettierrc.js`, `prettier.config.js` 파일 (CommonJS 또는 ES Module 형식)
5. `.prettierrc.toml` 파일

출처: [Configuration File](https://prettier.io/docs/en/configuration.html)
