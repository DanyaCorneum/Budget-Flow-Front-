// jest.config.cjs
module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.(t|j)sx?$": "babel-jest"
    },
    moduleNameMapper: {
        // Эта строка говорит: "Если файл заканчивается на scss/css, используй прокси"
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",

        // Если у вас в проекте настроены алиасы (например, @shared/...), их тоже нужно добавить сюда
        // "^@shared/(.*)$": "<rootDir>/src/shared/$1",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/__mocks__/fileMock.cts"
    },
    setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
};