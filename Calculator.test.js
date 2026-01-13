import { describe, it, expect, beforeEach } from 'vitest';
import { Calculator } from './Calculator.js';

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        it('должен складывать два положительных числа', () => {
            expect(calculator.add(2, 3)).toBe(5);
            expect(calculator.add(10, 15)).toBe(25);
            expect(calculator.add(0, 5)).toBe(5);
        });

        it('должен складывать отрицательные числа', () => {
            expect(calculator.add(-2, -3)).toBe(-5);
            expect(calculator.add(-10, 5)).toBe(-5);
            expect(calculator.add(10, -5)).toBe(5);
        });

        it('должен складывать десятичные числа', () => {
            expect(calculator.add(2.5, 3.7)).toBeCloseTo(6.2);
            expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
            expect(calculator.add(-2.5, 3.7)).toBeCloseTo(1.2);
        });

        it('должен выбрасывать ошибку при нечисловых аргументах', () => {
            expect(() => calculator.add('2', 3)).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.add(2, '3')).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.add(null, 3)).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.add(2, undefined)).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.add([], 3)).toThrow('Оба аргумента должны быть числами');
        });
    });

    describe('subtract', () => {
        it('должен вычитать два положительных числа', () => {
            expect(calculator.subtract(5, 3)).toBe(2);
            expect(calculator.subtract(10, 15)).toBe(-5);
            expect(calculator.subtract(0, 5)).toBe(-5);
        });

        it('должен вычитать отрицательные числа', () => {
            expect(calculator.subtract(-2, -3)).toBe(1);
            expect(calculator.subtract(-10, 5)).toBe(-15);
            expect(calculator.subtract(10, -5)).toBe(15);
        });

        it('должен вычитать десятичные числа', () => {
            expect(calculator.subtract(5.5, 3.2)).toBeCloseTo(2.3);
            expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2);
            expect(calculator.subtract(-2.5, 3.7)).toBeCloseTo(-6.2);
        });

        it('должен выбрасывать ошибку при нечисловых аргументах', () => {
            expect(() => calculator.subtract('5', 3)).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.subtract(5, '3')).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.subtract(null, 3)).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.subtract(5, undefined)).toThrow('Оба аргумента должны быть числами');
        });
    });

    describe('multiply', () => {
        it('должен умножать два положительных числа', () => {
            expect(calculator.multiply(2, 3)).toBe(6);
            expect(calculator.multiply(10, 15)).toBe(150);
            expect(calculator.multiply(0, 5)).toBe(0);
        });

        it('должен умножать отрицательные числа', () => {
            expect(calculator.multiply(-2, -3)).toBe(6);
            expect(calculator.multiply(-10, 5)).toBe(-50);
            expect(calculator.multiply(10, -5)).toBe(-50);
        });

        it('должен умножать десятичные числа', () => {
            expect(calculator.multiply(2.5, 3.2)).toBeCloseTo(8.0);
            expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
            expect(calculator.multiply(-2.5, 3.7)).toBeCloseTo(-9.25);
        });

        it('должен возвращать ноль при умножении на ноль', () => {
            expect(calculator.multiply(5, 0)).toBe(0);
            expect(calculator.multiply(0, 5)).toBe(0);
            expect(calculator.multiply(0, 0)).toBe(0);
        });

        it('должен выбрасывать ошибку при нечисловых аргументах', () => {
            expect(() => calculator.multiply('2', 3)).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.multiply(2, '3')).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.multiply(null, 3)).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.multiply(2, undefined)).toThrow('Оба аргумента должны быть числами');
        });
    });

    describe('divide', () => {
        it('должен делить два положительных числа', () => {
            expect(calculator.divide(6, 3)).toBe(2);
            expect(calculator.divide(10, 2)).toBe(5);
            expect(calculator.divide(15, 3)).toBe(5);
        });

        it('должен делить отрицательные числа', () => {
            expect(calculator.divide(-6, -3)).toBe(2);
            expect(calculator.divide(-10, 2)).toBe(-5);
            expect(calculator.divide(10, -2)).toBe(-5);
        });

        it('должен делить десятичные числа', () => {
            expect(calculator.divide(5.5, 2.5)).toBeCloseTo(2.2);
            expect(calculator.divide(0.6, 0.2)).toBeCloseTo(3);
            expect(calculator.divide(-5.5, 2.5)).toBeCloseTo(-2.2);
        });

        it('должен возвращать ноль при делении нуля на число', () => {
            expect(calculator.divide(0, 5)).toBe(0);
            expect(calculator.divide(0, -5)).toBe(-0);
        });

        it('должен выбрасывать ошибку при делении на ноль', () => {
            expect(() => calculator.divide(5, 0)).toThrow('Деление на ноль невозможно');
            expect(() => calculator.divide(-5, 0)).toThrow('Деление на ноль невозможно');
            expect(() => calculator.divide(0, 0)).toThrow('Деление на ноль невозможно');
        });

        it('должен выбрасывать ошибку при нечисловых аргументах', () => {
            expect(() => calculator.divide('6', 3)).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.divide(6, '3')).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.divide(null, 3)).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.divide(6, undefined)).toThrow('Оба аргумента должны быть числами');
        });
    });

    describe('calculate', () => {
        it('должен вычислять простые выражения со сложением', () => {
            expect(calculator.calculate('2 + 3')).toBe(5);
            expect(calculator.calculate('10 + 15')).toBe(25);
            expect(calculator.calculate('0 + 5')).toBe(5);
        });

        it('должен вычислять выражения с вычитанием', () => {
            expect(calculator.calculate('5 - 3')).toBe(2);
            expect(calculator.calculate('10 - 15')).toBe(-5);
            expect(calculator.calculate('0 - 5')).toBe(-5);
        });

        it('должен вычислять выражения с умножением', () => {
            expect(calculator.calculate('2 * 3')).toBe(6);
            expect(calculator.calculate('10 * 15')).toBe(150);
            expect(calculator.calculate('0 * 5')).toBe(0);
        });

        it('должен вычислять выражения с умножением (символ ×)', () => {
            expect(calculator.calculate('2 × 3')).toBe(6);
            expect(calculator.calculate('10 × 15')).toBe(150);
        });

        it('должен вычислять выражения с делением', () => {
            expect(calculator.calculate('6 / 3')).toBe(2);
            expect(calculator.calculate('10 / 2')).toBe(5);
            expect(calculator.calculate('15 / 3')).toBe(5);
        });

        it('должен вычислять сложные выражения', () => {
            expect(calculator.calculate('2 + 3 * 4')).toBe(14);
            expect(calculator.calculate('(2 + 3) * 4')).toBe(20);
            expect(calculator.calculate('10 - 2 * 3')).toBe(4);
            expect(calculator.calculate('(10 - 2) * 3')).toBe(24);
        });

        it('должен вычислять выражения с десятичными числами', () => {
            expect(calculator.calculate('2.5 + 3.7')).toBeCloseTo(6.2);
            expect(calculator.calculate('5.5 / 2.5')).toBeCloseTo(2.2);
            expect(calculator.calculate('2.5 * 3.2')).toBeCloseTo(8.0);
        });

        it('должен вычислять выражения с отрицательными числами', () => {
            expect(calculator.calculate('-2 + 3')).toBe(1);
            expect(calculator.calculate('2 + -3')).toBe(-1);
            expect(calculator.calculate('-2 * -3')).toBe(6);
            expect(calculator.calculate('-10 / 2')).toBe(-5);
        });

        it('должен выбрасывать ошибку при делении на ноль', () => {
            expect(() => calculator.calculate('5 / 0')).toThrow('Деление на ноль невозможно');
            expect(() => calculator.calculate('10 / 0')).toThrow('Деление на ноль невозможно');
            expect(() => calculator.calculate('0 / 0')).toThrow('Деление на ноль невозможно');
        });

        it('должен обрабатывать деление на 0.0 как нормальное деление', () => {
            expect(calculator.calculate('5 / 0.5')).toBe(10);
            expect(calculator.calculate('10 / 0.1')).toBe(100);
        });

        it('должен выбрасывать ошибку при нестроковом аргументе', () => {
            expect(() => calculator.calculate(123)).toThrow('Выражение должно быть строкой');
            expect(() => calculator.calculate(null)).toThrow('Выражение должно быть строкой');
            expect(() => calculator.calculate(undefined)).toThrow('Выражение должно быть строкой');
            expect(() => calculator.calculate([])).toThrow('Выражение должно быть строкой');
        });

        it('должен выбрасывать ошибку при некорректном выражении', () => {
            expect(() => calculator.calculate('2 +')).toThrow('Некорректное математическое выражение');
            expect(() => calculator.calculate('+ 2')).toThrow('Некорректное математическое выражение');
            expect(() => calculator.calculate('abc')).toThrow('Некорректное математическое выражение');
            expect(() => calculator.calculate('2 @ 3')).toThrow('Некорректное математическое выражение');
        });
    });

    describe('power', () => {
        it('должен возводить положительное число в положительную степень', () => {
            expect(calculator.power(2, 3)).toBe(8);
            expect(calculator.power(5, 2)).toBe(25);
            expect(calculator.power(10, 0)).toBe(1);
        });

        it('должен возводить число в отрицательную степень', () => {
            expect(calculator.power(2, -2)).toBeCloseTo(0.25);
            expect(calculator.power(5, -1)).toBeCloseTo(0.2);
        });

        it('должен возводить отрицательное число в степень', () => {
            expect(calculator.power(-2, 3)).toBe(-8);
            expect(calculator.power(-2, 2)).toBe(4);
        });

        it('должен обрабатывать дробные степени', () => {
            expect(calculator.power(4, 0.5)).toBeCloseTo(2);
            expect(calculator.power(9, 0.5)).toBeCloseTo(3);
        });

        it('должен выбрасывать ошибку при нечисловых аргументах', () => {
            expect(() => calculator.power('2', 3)).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.power(2, '3')).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.power(null, 3)).toThrow('Оба аргумента должны быть числами');
            expect(() => calculator.power(2, undefined)).toThrow('Оба аргумента должны быть числами');
        });
    });

    describe('sqrt', () => {
        it('должен вычислять квадратный корень из положительных чисел', () => {
            expect(calculator.sqrt(4)).toBe(2);
            expect(calculator.sqrt(9)).toBe(3);
            expect(calculator.sqrt(16)).toBe(4);
            expect(calculator.sqrt(0)).toBe(0);
        });

        it('должен вычислять квадратный корень из десятичных чисел', () => {
            expect(calculator.sqrt(2.25)).toBeCloseTo(1.5);
            expect(calculator.sqrt(0.25)).toBeCloseTo(0.5);
        });

        it('должен выбрасывать ошибку при отрицательном числе', () => {
            expect(() => calculator.sqrt(-4)).toThrow('Нельзя извлечь квадратный корень из отрицательного числа');
            expect(() => calculator.sqrt(-1)).toThrow('Нельзя извлечь квадратный корень из отрицательного числа');
            expect(() => calculator.sqrt(-100)).toThrow('Нельзя извлечь квадратный корень из отрицательного числа');
        });

        it('должен выбрасывать ошибку при нечисловом аргументе', () => {
            expect(() => calculator.sqrt('4')).toThrow('Аргумент должен быть числом');
            expect(() => calculator.sqrt(null)).toThrow('Аргумент должен быть числом');
            expect(() => calculator.sqrt(undefined)).toThrow('Аргумент должен быть числом');
            expect(() => calculator.sqrt([])).toThrow('Аргумент должен быть числом');
        });
    });
});

