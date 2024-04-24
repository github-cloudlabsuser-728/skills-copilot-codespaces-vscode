// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.js
const { add } = require('./test.js');

describe('add', () => {
    let result;

    beforeEach(() => {
        result = new Result(); // Assuming Result is the class containing the add method
    });

    test('adds 1 + 2 to equal 3', () => {
        expect(result.add(1, 2)).toBe(3);
    });

    test('adds 5 + 7 to equal 12', () => {
        expect(result.add(5, 7)).toBe(12);
    });

    test('adds -1 + -1 to equal -2', () => {
        expect(result.add(-1, -1)).toBe(-2);
    });

    test('adds 0 + 0 to equal 0', () => {
        expect(result.add(0, 0)).toBe(0);
    });
});