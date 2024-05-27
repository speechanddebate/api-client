/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setupTests.ts',
        include: ['**/*.test.ts'],
        coverage: {
            reporter: ['text', 'html'],
            exclude: ['node_modules/', 'setupTests.ts'],
        },
    },
    envPrefix: 'NSDA_',
});
