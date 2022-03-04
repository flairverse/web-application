/** @type {import('next').NextConfig} */
const { nextI18NextRewrites } = require("next-i18next/rewrites");
// const removeImports = require("next-remove-imports")();

const localeSubpaths = {};

const nextConfig = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  // env: {},
  pageExtensions: ["page.tsx", "page.ts"],

  devIndicators: {
    buildActivityPosition: "top-left",
  },
};

module.exports = nextConfig;
