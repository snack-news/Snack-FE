const path = require("path");
const airbnbImports = require("eslint-config-airbnb-base/rules/imports");

module.exports = {
  extends: [path.resolve(__dirname, "../../.eslintrc.js")],
  rules: {
    // TODO eslint-plugin-import 이슈가 해결되면 eslint-plugin-import 버전 변경후 off -> error 로 변경 필요
    // 아래 사항이 release에 merge 되면 사용 가능
    // https://github.com/benmosher/eslint-plugin-import/pull/1176
    "import/no-extraneous-dependencies": [
      "off",
      {
        ...airbnbImports.rules["import/no-extraneous-dependencies"][1],
        packageDir: [
          // TODO eslintrc 파일을 패키지별로 두지 않고 해결하는 방법이 있다면 그 방향으로 변경이 필요. 찾지 못하였음.
          // mono repo 에서 eslint/import 를 사용하기 위해 package.json 위치 설정
          // https://github.com/benmosher/eslint-plugin-import/issues/458
          // https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/src/rules/no-extraneous-dependencies.js#L24
          path.resolve(__dirname, "./"),
          path.resolve(__dirname, "../../")
        ]
      }
    ]
  }
};
