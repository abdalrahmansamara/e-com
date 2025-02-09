declare namespace NodeJS {
  interface ProcessEnv {
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_SCHEMA: string;
    DB_TIMEZONE: string;

    STAGING_DB_USERNAME: string;
    STAGING_DB_PASSWORD: string;
    STAGING_DB_DATABASE: string;
    STAGING_DB_HOST: string;
    STAGING_DB_PORT: number;
    STAGING_DB_CONNECTION: string;
    STAGING_DB_TIMEZONE: string;

    PROD_DB_USERNAME: string;
    PROD_DB_PASSWORD: string;
    PROD_DB_DATABASE: string;
    PROD_DB_HOST: string;
    PROD_DB_PORT: number;
    PROD_DB_CONNECTION: string;
    PROD_DB_TIMEZONE: string;
  }
}

declare global {
  var AppConfigs: Record<string, any>;
  var Log: any;
  var HttpStatus: Record<string, any>;
}

export {}; // Ensures it's treated as a module
