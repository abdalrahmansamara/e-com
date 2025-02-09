const nodeEnv = process.env.NODE_ENV || 'development';

const globalConfig = {
  nodeEnv,
  appName: process.env.NODE_APP || 'Product APIs',
  port: process.env.PORT || 3000,
  postgres: {
    username: process.env.DB_USER || 'username',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'master',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false,
    ...(nodeEnv !== 'development' && {
      dialectOptions: {
        ssl: {
          ca: Buffer.from(
            process.env.RDS_COMBINED_CA_BUNDLE || '',
            'base64',
          ).toString(),
          rejectUnauthorized: process.env.REJECT_SELF_SIGNED_CERTS === 'true',
        },
      }
    })
    ,
    ssl: nodeEnv !== 'development',
  },
}

export default globalConfig;
