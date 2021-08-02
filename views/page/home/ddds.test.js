import Ddds from './ddds';

var ddds = new Ddds(
    [
        [11, 16, 1.90],
        [16, 11, 2.90],
        [11, 17, 1.70],
        [17, 11, 2.70],
        [11, 18, 0.90],
        [18 ,11, 1.90]
        ]
);

test("value without FaleMais", () => {
    const result = ddds.calculateWithOutFaleMais(11, 16, 20);
    const expected = 38.00
    expect(result).toBe(expected.toFixed(2));
})

test("value with FaleMais 120", () => {
    const result = ddds.calculateWithFaleMais(11, 16, 20, 30);
    const expected = 0
    expect(result).toBe(expected.toFixed(2));
})

test("value with FaleMais 60", () => {
    const result = ddds.calculateWithFaleMais(11, 17, 80, 60);
    const expected = 37.40
    expect(result).toBe(expected.toFixed(2));
})

test("value with FaleMais 30", () => {
    const result = ddds.calculateWithFaleMais(18, 11, 200, 120);
    const expected = 167.20
    expect(result).toBe(expected.toFixed(2));
})

test("no has Combination", () => {
    const result = ddds.hasCombinnation(18, 17);
    expect(result).toBe(false);
})

test("has Combination", () => {
    const result = ddds.hasCombinnation(18, 11);
    expect(result).toBe(true);
})

test("ddd equal", () => {
    const result = ddds.validateCombination(11, 11);
    expect(result).toBe(false);
})

test("ddd diferent", () => {
    const result = ddds.validateCombination(11, 16);
    expect(result).toBe(true);
})

test("Negative Minute", () => {
    const result = ddds.validMinutes(-1);
    expect(result).toBe(false);
})
test("0 Minute", () => {
    const result = ddds.validMinutes(0);
    expect(result).toBe(false);
})

test("valid Number", () => {
    const result = ddds.validMinutes(33);
    expect(result).toBe(true);
})

test("Float Minute", () => {
    const result = ddds.validMinutes(37.8);
    expect(result).toBe(true);
})