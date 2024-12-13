import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Get the current branch name from environment variable or default to 'main'
const currentBranch = process.env.GITHUB_REF_NAME || 'main';
console.log('Current branch:', currentBranch);

// Import site configurations
import { siteConfigs } from './src/config/siteConfig';

// Get configuration for current branch
const config = siteConfigs[currentBranch] || siteConfigs.main;
console.log('Using config:', config);

export default defineConfig({
  integrations: [tailwind()],
  site: `https://${config.username}.github.io`,
  base: config.basePath,
  build: {
    // Ensure the build directory is created
    outDir: './dist'
  }
});