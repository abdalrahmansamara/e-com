import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      requestId?: string;
      id?: string;
      state: Record<string, any>;
      getSingleArrayFile: (name: string) => any;
      getTransaction: () => any;
      setState: (val: Record<string, any>) => void;
      setFieldState: (key: string, val: any) => void;
      getState: (path: string, defaultValue?: any) => any;
      getHeaders: () => Record<string, string | string[] | undefined>;
      getQuery: () => Record<string, any>;
      _transaction?: any;
      getParams: () => Record<string, string>;
      getBody: () => any;
      setBody: (obj: Record<string, any>) => void;
      rollbackTransactions: () => void;
      pickSingleFieldMulter: (fields: string[]) => any;
      getCookies: () => Record<string, string>;
      getMultiArrayFile: (name: string) => any;
      pickMultiFieldMulter: (fields: string[]) => any;
      files?: Record<
        string,
        {
          fieldname: string;
          originalname: string;
          encoding: string;
          mimetype: string;
          buffer: Buffer;
          size: number;
        }[]
      >;
    }
  }
}

export {};
