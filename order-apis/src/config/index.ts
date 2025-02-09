/// <reference path="../types/global.d.ts" />
require('dotenv').config();
import httpStatus from "http-status";
import fs from "fs";
import path from "path";
import recurly from "recurly";

import logger from "./logger";
import globalConfig from "./global";

const env = globalConfig.nodeEnv;
const tsFile = path.resolve(__dirname, `${env}.ts`);

const configFile = fs.existsSync(tsFile) ? `./${env}.ts` : `./${env}.js`;
const { envConfig } = require(configFile);

const appConfigs = () => ({ ...globalConfig, ...envConfig });

(() => {
  global.AppConfigs = appConfigs();
  global.Log = logger;
  global.HttpStatus = httpStatus;
  global.recurlyClient = new recurly.Client(AppConfigs.services.recurly.apiKey);
})();
