module.exports = {
    transform: {
        "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/src/testing/__mocks__/file-mock.js`,
    },
    moduleNameMapper: {
        'src/(.*)': '<rootDir>/src/$1',
        "\\.(css|styl|less|sass|scss)$": `<rootDir>/src/testing/__mocks__/style-mock.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    setupFiles: [`<rootDir>/loadershim.js`, `<rootDir>/jest.setup.js`],
};