import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ["dist/", "node_modules/", "coverage/", "src/components/ui/"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    plugins: { "react-hooks": reactHooks },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      ...Object.fromEntries(
        Object.entries(reactHooks.configs.recommended.rules)
          .filter(([k]) => !["react-hooks/rules-of-hooks", "react-hooks/exhaustive-deps"].includes(k))
          .map(([k]) => [k, "warn"]),
      ),
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-require-imports": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-empty": "warn",
    },
  },
);
