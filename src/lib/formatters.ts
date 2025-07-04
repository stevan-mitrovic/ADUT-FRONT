/**
 * Helper functions for formatting and shaping values
 * @fileoverview Collection of utility functions for value formatting and validation
 */

/**
 * Formats a numeric value as a Euro price string
 * @param value - The value to format as a price
 * @param showDecimals - Whether to show decimals (auto shows only if needed, true always shows, false never shows)
 * @returns Formatted Euro price string or empty string if invalid
 * @example
 * formatEuroPrice(1649.50) // "1649.50€"
 * formatEuroPrice(1649) // "1649€"
 * formatEuroPrice(1649, true) // "1649.00€"
 * formatEuroPrice(1649.50, false) // "1650€"
 * formatEuroPrice("invalid") // ""
 */
export const formatEuroPrice = (
  value: unknown,
  showDecimals: boolean | "auto" = "auto"
): string => {
  // Check if value is a valid number
  const numValue = Number(value);

  if (
    isNaN(numValue) ||
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return "";
  }

  let minimumFractionDigits = 0;
  let maximumFractionDigits = 2;

  if (showDecimals === true) {
    // Always show 2 decimal places
    minimumFractionDigits = 2;
    maximumFractionDigits = 2;
  } else if (showDecimals === false) {
    // Never show decimal places
    minimumFractionDigits = 0;
    maximumFractionDigits = 0;
  } else {
    // Auto: show decimals only if they exist and are not .00
    const hasDecimals = numValue % 1 !== 0;
    minimumFractionDigits = hasDecimals ? 2 : 0;
    maximumFractionDigits = 2;
  }

  // Format number without currency symbol first
  const formattedNumber = new Intl.NumberFormat("en-US", {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(numValue);

  // Add Euro symbol without space
  return `${formattedNumber}€`;
};

/**
 * Formats a numeric value as a currency string with custom currency code
 * @param value - The value to format as a price
 * @param currency - The currency code (default: EUR)
 * @param locale - The locale for formatting (default: en-US)
 * @param showDecimals - Whether to show decimals (auto shows only if needed, true always shows, false never shows)
 * @param noSpace - Whether to remove space between number and currency symbol (default: false)
 * @returns Formatted currency string or empty string if invalid
 * @example
 * formatCurrency(29.99, 'USD') // "$29.99"
 * formatCurrency(29.99, 'EUR', 'en-US', 'auto', true) // "29.99€"
 * formatCurrency(1649, 'EUR', 'en-US', true, true) // "1,649.00€"
 * formatCurrency(1649.50, 'EUR', 'en-US', false, true) // "1,650€"
 */
export const formatCurrency = (
  value: unknown,
  currency: string = "EUR",
  locale: string = "en-US",
  showDecimals: boolean | "auto" = "auto",
  noSpace: boolean = false
): string => {
  const numValue = Number(value);

  if (
    isNaN(numValue) ||
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return "";
  }

  let minimumFractionDigits = 0;
  let maximumFractionDigits = 2;

  if (showDecimals === true) {
    minimumFractionDigits = 2;
    maximumFractionDigits = 2;
  } else if (showDecimals === false) {
    minimumFractionDigits = 0;
    maximumFractionDigits = 0;
  } else {
    // Auto: show decimals only if they exist and are not .00
    const hasDecimals = numValue % 1 !== 0;
    minimumFractionDigits = hasDecimals ? 2 : 0;
    maximumFractionDigits = 2;
  }

  if (noSpace && currency === "EUR") {
    // Format number without currency symbol first, then add € without space
    const formattedNumber = new Intl.NumberFormat(locale, {
      minimumFractionDigits,
      maximumFractionDigits,
    }).format(numValue);

    return `${formattedNumber}€`;
  }

  // Use standard currency formatting
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(numValue);
};

/**
 * Formats a number with thousands separators
 * @param value - The value to format
 * @param locale - The locale for formatting (default: en-US)
 * @returns Formatted number string or empty string if invalid
 * @example
 * formatNumber(1234567.89) // "1,234,567.89"
 * formatNumber("1234567.89") // "1,234,567.89"
 * formatNumber("invalid") // ""
 */
export const formatNumber = (
  value: unknown,
  locale: string = "en-US"
): string => {
  const numValue = Number(value);

  if (
    isNaN(numValue) ||
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return "";
  }

  return new Intl.NumberFormat(locale).format(numValue);
};

/**
 * Formats a percentage value
 * @param value - The value to format as percentage (0.15 = 15%)
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted percentage string or empty string if invalid
 * @example
 * formatPercentage(0.15) // "15.00%"
 * formatPercentage(0.1567, 1) // "15.7%"
 * formatPercentage("invalid") // ""
 */
export const formatPercentage = (
  value: unknown,
  decimals: number = 2
): string => {
  const numValue = Number(value);

  if (
    isNaN(numValue) ||
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return "";
  }

  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(numValue);
};

/**
 * Capitalizes the first letter of a string
 * @param value - The value to capitalize
 * @returns Capitalized string or empty string if invalid
 * @example
 * capitalize("hello world") // "Hello world"
 * capitalize("HELLO") // "Hello"
 * capitalize(123) // ""
 */
export const capitalize = (value: unknown): string => {
  if (typeof value !== "string" || value === "") {
    return "";
  }

  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

/**
 * Truncates a string to a specified length with ellipsis
 * @param value - The value to truncate
 * @param maxLength - Maximum length before truncation (default: 50)
 * @param suffix - Suffix to append when truncated (default: '...')
 * @returns Truncated string or empty string if invalid
 * @example
 * truncateText("This is a very long text", 10) // "This is a..."
 * truncateText("Short", 10) // "Short"
 * truncateText(123, 10) // ""
 */
export const truncateText = (
  value: unknown,
  maxLength: number = 50,
  suffix: string = "..."
): string => {
  if (typeof value !== "string" || value === "") {
    return "";
  }

  if (value.length <= maxLength) {
    return value;
  }

  return value.substring(0, maxLength - suffix.length) + suffix;
};

/**
 * Formats a date value to a readable string
 * @param value - The date value to format (Date object, timestamp, or date string)
 * @param locale - The locale for formatting (default: en-US)
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string or empty string if invalid
 * @example
 * formatDate(new Date()) // "12/25/2023"
 * formatDate("2023-12-25") // "12/25/2023"
 * formatDate(1703462400000) // "12/25/2023"
 * formatDate("invalid") // ""
 */
export const formatDate = (
  value: unknown,
  locale: string = "en-US",
  options: Intl.DateTimeFormatOptions = {}
): string => {
  if (!value) return "";

  //@ts-ignore
  const date = new Date(value);

  if (isNaN(date.getTime())) {
    return "";
  }

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    ...options,
  };

  return new Intl.DateTimeFormat(locale, defaultOptions).format(date);
};

/**
 * Validates if a value is a valid number
 * @param value - The value to validate
 * @returns True if valid number, false otherwise
 * @example
 * isValidNumber(123) // true
 * isValidNumber("123") // true
 * isValidNumber("abc") // false
 * isValidNumber(null) // false
 */
export const isValidNumber = (value: unknown): boolean => {
  if (value === null || value === undefined || value === "") return false;
  return !isNaN(Number(value));
};

/**
 * Sanitizes a string by removing HTML tags and trimming whitespace
 * @param value - The value to sanitize
 * @returns Sanitized string or empty string if invalid
 * @example
 * sanitizeString("<p>Hello World</p>  ") // "Hello World"
 * sanitizeString("  Normal text  ") // "Normal text"
 * sanitizeString(123) // ""
 */
export const sanitizeString = (value: unknown): string => {
  if (typeof value !== "string") {
    return "";
  }

  // Remove HTML tags and trim whitespace
  return value.replace(/<[^>]*>/g, "").trim();
};
