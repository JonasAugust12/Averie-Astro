import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

const eslintConfig = defineConfig(
    globalIgnores(['dist/**', '.astro/**', 'node_modules/**', '.vscode/**']),
    ...eslintPluginAstro.configs['flat/recommended'],
    ...tseslint.configs.recommended.map((config) => ({
        ...config,
        files: ['**/*.{ts,tsx,mjs,cjs,js}'],
    })),
    prettier,
    {
        files: ['**/*.{ts,tsx,mjs,cjs,js}'],
        rules: {
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },
);

export default eslintConfig;
