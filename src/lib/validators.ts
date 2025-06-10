/**
 * Validation helper functions
 */

/**
 * Checks if a value is an integer (positive, negative, or zero)
 * @param {*} value - The value to check
 * @returns {boolean} - True if value is an integer, false otherwise
 */
export function isInteger(value: any) {
  return Number.isInteger(value);
}

/**
 * Checks if a value is a positive number (0 and larger)
 * @param {*} value - The value to check
 * @returns {boolean} - True if value is a number >= 0, false otherwise
 */
export function isPositiveNumber(value: any) {
  return typeof value === "number" && !isNaN(value) && value >= 0;
}

/**
 * Checks if a value is a number greater than 0
 * @param {*} value - The value to check
 * @returns {boolean} - True if value is a number > 0, false otherwise
 */
export function isPositiveNonZero(value: any) {
  return typeof value === "number" && !isNaN(value) && value > 0;
}

/**
 * Checks if a value is a string with length greater than 0
 * @param {*} value - The value to check
 * @returns {boolean} - True if value is a non-empty string, false otherwise
 */
export function isNonEmptyString(value: any) {
  return typeof value === "string" && value.length > 0;
}
