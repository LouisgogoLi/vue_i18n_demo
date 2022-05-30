module.exports = {
  collectCoverage: true,
  preset: "@vue/cli-plugin-unit-jest",
  setupFiles: ["./tests/unit/jest.init.js"],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "report/jest-html-reporters",
      },
    ],
  ],
};
