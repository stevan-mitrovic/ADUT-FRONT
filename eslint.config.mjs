import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable the ban-ts-comment rule
      "@typescript-eslint/ban-ts-comment": "off",

      // Disable unused variables rule
      "@typescript-eslint/no-unused-vars": "off",

      // Disable explicit any rule
      "@typescript-eslint/no-explicit-any": "off",

      // Disable React hooks exhaustive deps rule
      "react-hooks/exhaustive-deps": "off",

      // Disable React rules
      "react/display-name": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-key": "off",

      // Disable Next.js rules
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",


      // Or allow with description (alternative approach)
      // "@typescript-eslint/ban-ts-comment": [
      //   "error",
      //   {
      //     "ts-nocheck": "allow-with-description",
      //     "ts-ignore": "allow-with-description",
      //     "minimumDescriptionLength": 10
      //   }
      // ]
    }
  }
];

export default eslintConfig;
