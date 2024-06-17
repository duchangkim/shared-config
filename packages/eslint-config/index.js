/** @type {import('eslint').Linter.Config} */
module.exports = {
  // 필요한 플러그인을 여기에 정의합니다.
  plugins: ["no-relative-import-paths", "import"],
  extends: [
    // ✅ (필수) rushstack 컨피그를 가져옵니다.
    "@rushstack/eslint-config/profile/web-app"
  ],
  rules: {
    // 필요한 커스텀 규칙을 여기에 정의합니다.
    "@typescript-eslint/explicit-function-return-type": "off",

    // import https://eslint.org/docs/latest/rules/sort-imports
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["all", "multiple", "single", "none"],
        allowSeparatedGroups: false,
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin", // Built-in types are first
          ["sibling", "parent"], // Then sibling and parent types. They can be mingled together
          "index", // Then the index file
          "object",
          // Then the rest: internal and external type
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    // 공통으로 넣고 싶은 설정이 있으면 추가합니다.
  },
};
