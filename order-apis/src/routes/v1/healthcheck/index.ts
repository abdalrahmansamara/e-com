import { Request, Response } from 'express';
import packageJson from '../../../../package.json';

const { name, version } = packageJson;

const healthCheck = async (req: Request, res: Response): Promise<void> => {
  res.send({
    path: req.originalUrl,
    name,
    version,
    status: 'OK',
    environment: AppConfigs.nodeEnv,
  });
};

export { healthCheck };
