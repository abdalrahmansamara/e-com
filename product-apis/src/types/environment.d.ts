declare namespace NodeJS {
  interface ProcessEnv {
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_HOST: string;
    DB_PORT: string; // Always a string (must be parsed to number in code)
    DB_SCHEMA: string;
    DB_TIMEZONE: string;

    STAGING_DB_USERNAME: string;
    STAGING_DB_PASSWORD: string;
    STAGING_DB_DATABASE: string;
    STAGING_DB_HOST: string;
    STAGING_DB_PORT: string;
    STAGING_DB_CONNECTION: string;
    STAGING_DB_TIMEZONE: string;

    PROD_DB_USERNAME: string;
    PROD_DB_PASSWORD: string;
    PROD_DB_DATABASE: string;
    PROD_DB_HOST: string;
    PROD_DB_PORT: string;
    PROD_DB_CONNECTION: string;
    PROD_DB_TIMEZONE: string;
  }
}

export {};
