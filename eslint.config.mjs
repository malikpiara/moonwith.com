import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: [
      '.next/**',
      '.open-next/**',
      '.content-collections/**',
      '.wrangler/**',
      'node_modules/**',
    ],
  },
  ...nextCoreWebVitals,
];

export default config;
