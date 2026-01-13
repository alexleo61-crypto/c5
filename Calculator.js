/**
 * Класс Calculator для выполнения математических операций
 */
export class Calculator {
    /**
     * Сложение двух чисел
     * @param {number} a - Первое число
     * @param {number} b - Второе число
     * @returns {number} Результат сложения
     */
    add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Оба аргумента должны быть числами');
        }
        return a + b;
    }

    /**
     * Вычитание двух чисел
     * @param {number} a - Первое число
     * @param {number} b - Второе число
     * @returns {number} Результат вычитания
     */
    subtract(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Оба аргумента должны быть числами');
        }
        return a - b;
    }

    /**
     * Умножение двух чисел
     * @param {number} a - Первое число
     * @param {number} b - Второе число
     * @returns {number} Результат умножения
     */
    multiply(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Оба аргумента должны быть числами');
        }
        return a * b;
    }

    /**
     * Деление двух чисел
     * @param {number} a - Делимое
     * @param {number} b - Делитель
     * @returns {number} Результат деления
     * @throws {Error} Если делитель равен нулю
     */
    divide(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Оба аргумента должны быть числами');
        }
        if (b === 0) {
            throw new Error('Деление на ноль невозможно');
        }
        return a / b;
    }

    /**
     * Вычисление выражения из строки
     * @param {string} expression - Математическое выражение
     * @returns {number} Результат вычисления
     * @throws {Error} Если выражение некорректно или содержит деление на ноль
     */
    calculate(expression) {
        if (typeof expression !== 'string') {
            throw new Error('Выражение должно быть строкой');
        }
        
        // Заменяем × на * для вычисления
        let expr = expression.replace(/×/g, '*');
        
        // Проверяем на деление на ноль с помощью регулярного выражения
        // Ищем паттерн: / 0 или /0 (но не /0.5, /0.1 и т.д.)
        const divisionByZeroPattern = /\/(\s*0\s*)(?![.\d])/;
        if (divisionByZeroPattern.test(expr)) {
            throw new Error('Деление на ноль невозможно');
        }
        
        try {
            const result = Function('"use strict"; return (' + expr + ')')();
            
            // Проверяем на Infinity (результат деления на ноль)
            if (!isFinite(result)) {
                // Дополнительная проверка: если результат Infinity, проверяем исходное выражение
                if (divisionByZeroPattern.test(expr)) {
                    throw new Error('Деление на ноль невозможно');
                }
                throw new Error('Результат вычисления не является числом');
            }
            
            if (isNaN(result)) {
                throw new Error('Результат вычисления не является числом');
            }
            
            return result;
        } catch (error) {
            if (error.message.includes('Деление на ноль')) {
                throw error;
            }
            throw new Error('Некорректное математическое выражение');
        }
    }

    /**
     * Возведение в степень
     * @param {number} base - Основание
     * @param {number} exponent - Показатель степени
     * @returns {number} Результат возведения в степень
     */
    power(base, exponent) {
        if (typeof base !== 'number' || typeof exponent !== 'number') {
            throw new Error('Оба аргумента должны быть числами');
        }
        return Math.pow(base, exponent);
    }

    /**
     * Вычисление квадратного корня
     * @param {number} number - Число
     * @returns {number} Квадратный корень
     * @throws {Error} Если число отрицательное
     */
    sqrt(number) {
        if (typeof number !== 'number') {
            throw new Error('Аргумент должен быть числом');
        }
        if (number < 0) {
            throw new Error('Нельзя извлечь квадратный корень из отрицательного числа');
        }
        return Math.sqrt(number);
    }
}

