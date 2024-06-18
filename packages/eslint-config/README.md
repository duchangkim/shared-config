# @duchi/eslint-config

## Installation

```bash
npm i -D @duchi/eslint-config
```

## Configuration

프로젝트 루트의 `.eslintrc.cjs`파일을 경우에 따라 다음과 같이 수정합니다.

### TypeScript Only

```js
/**
 * patch 파일을 불러옵니다.
 * 이렇게 하면 ESLint 플러그인들을 프로젝트에서 일일이 설치할 필요가 없어집니다.
 */
require("@duchi/eslint-config/patch");

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    // 공통 ESLint 컨피그 불러오기
    "@duchi/eslint-config/index",
  ],
  parserOptions: {
    /**
     * rushstack은 @typescript-eslint 플러그인을 내장하고 있으므로
     * 아래와 같이 tsconfig 경로를 명시해줘야합니다.
     */
    project: true,
    tsconfigRootDir: __dirname,
  },
};
```

### TypeScript with React

```js
/**
 * patch 파일을 불러옵니다.
 * 이렇게 하면 ESLint 플러그인들을 프로젝트에서 일일이 설치할 필요가 없어집니다.
 */
require("@duchi/eslint-config/patch");

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    // 공통 ESLint 컨피그 불러오기
    "@duchi/eslint-config/index",
    // React용 ESLint 컨피그 불러오기
    "@duchi/eslint-config/mixins/react",
  ],
  settings: {
    react: {
      /**
       * 현재 React 버전을 명시합니다.
       * 명시하지 않을 경우(기본값 'detect') React 라이브러리 전체를 불러오므로
       * 린트 과정에서 속도가 느려질 수 있습니다.
       * 예: '16.9', '17.0', '18.0' 등
       */
      version: "18.2",
    },
  },
  /**
   * rushstack은 @typescript-eslint 플러그인을 내장하고 있으므로
   * 아래와 같이 tsconfig 경로를 명시해줘야합니다.
   */
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
```

# Based on @rushstack/eslint-config

이 ESLint 설정은 널리 사용되는 `@rushstack/eslint-config`를 기반으로 만들어졌습니다.
`@rushstack/eslint-config`를 활용하면 JavaScript와 TypeScript에 대한 구성이 모두 포함된 잘 유지 관리되고 포괄적인 ESLint 설정을 활용할 수 있습니다. `@rushstack/eslint-config`에 대한 자세한 내용은 [Rushstack ESLint 구성 설명서](https://www.npmjs.com/package/@rushstack/eslint-config)를 참조하세요.

추가적으로 구성된 설정은 다음과 같습니다.

1. @typescript-eslint/explicit-function-return-type: off
2. sort-imports
3. import/order

# Reference

[우리 팀을 위한 ESLint, Prettier 공유 컨피그 만들어보기](https://techblog.woowahan.com/15903/#toc-3)
