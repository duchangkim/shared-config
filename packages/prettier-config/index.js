module.exports = {
  /**
   * 하나의 라인에 표시될 최대 문자 수
   */
  printWidth: 100,

  /**
   * 들여쓰기 수준당 공백 개수
   */
  tabWidth: 2,

  /**
   * 공백 대신 탭으로 들여쓰기 (false일 경우 공백 사용)
   */
  useTabs: false,

  /**
   * 모든 문장의 끝에 세미콜론을 추가
   */
  semi: true,

  /**
   * 큰따옴표 대신 작은따옴표를 사용
   */
  singleQuote: true,

  /**
   * 객체 리터럴 속성 이름에 필요한 경우에만 따옴표 추가
   *
   * {
   *  'foo-foo': 'bar',
   *  'fooBar': 'bar',
   * }
   * ->
   * {
   *  'foo-foo': 'bar',
   *  fooBar: 'bar',
   * }
   */
  quoteProps: 'as-needed',

  /**
   * JSX에 큰따옴표 사용
   */
  jsxSingleQuote: false,

  /**
   * 여러 줄의 쉼표로 구분된 구문 구조에서는 가능한 한 후행 쉼표를 사용
   */
  trailingComma: 'all',

  /**
   * true인 경우 {foo:bar}는 { foo: bar }로 변환됨
   */
  bracketSpacing: true,

  /**
   * 여러 줄로 된 HTML 요소의 마지막 줄에 '>' 단독으로 배치
   */
  bracketSameLine: false,

  /**
   * 단독 화살표 함수 매개변수 주위에 괄호 추가
   */
  arrowParens: 'always',
};
