const { createFilamentPlugin } = require("@filament/next-plugin");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {};

const withFilament = createFilamentPlugin({
  vanillaExtractOptions: {}, // Optional Vanilla Extract configuration overrides
});

module.exports = withFilament(nextConfig);
