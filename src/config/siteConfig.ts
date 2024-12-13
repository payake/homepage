// Site configuration for different versions
export type SiteConfig = {
    username: string;
    repository: string;
    branch: string;
    basePath: string;
  }
  
  // CUSTOMIZE: Add your site configurations here
  export const siteConfigs: Record<string, SiteConfig> = {
    main: {
      username: 'payake',
      repository: 'homepage',
      branch: 'main',
      basePath: '/homepage'
    },
    // Example of a development version
    dev: {
      username: 'payake',
      repository: 'homepage',
      branch: 'dev',
      basePath: '/homepage'
    }
    // Add more versions as needed
  }