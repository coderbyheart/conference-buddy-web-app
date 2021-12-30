// enables our custom setup and teardown for rendering vue components
// see: https://gitlab.com/ryter/ryter/-/blob/master/documentation/frontend/testing/03_tools-and-setup/in-depth/custom-cleanup.adoc#user-content-our-setup-and-teardown-explained
process.env.RTL_SKIP_AUTO_CLEANUP = "true"

module.exports = {
  rootDir: ".",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
    __PATH_PREFIX__: ``,
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/$1",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootdir>/node_modules/"],
  setupFiles: [`<rootDir>/tests/setup/loadershim.js`],
  setupFilesAfterEnv: [
    "<rootDir>/tests/setup/setup-files.ts",
    "<rootDir>/tests/setup/setup-after-env.ts",
  ],
  testMatch: ["<rootDir>/**/*.test.ts?(x)"],
  moduleDirectories: ["node_modules", "src"],
  testURL: `http://localhost`,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
}
