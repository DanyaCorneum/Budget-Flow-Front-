// __mocks__/fileMock.js
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Добавляем недостающие API в глобальную область видимости
global.TextEncoder = TextEncoder;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
global.TextDecoder = TextDecoder;
module.exports = 'tests-file-stub';