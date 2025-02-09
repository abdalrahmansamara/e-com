import HttpStatus from 'http-status-codes';

interface ErrorDetails {
  name?: string;
  message: string;
  code: number;
  status: number;
  explanation?: string;
  error?: any;
}

class CustomError extends Error {
  name: string;
  code: number;
  status: number;
  explanation?: string;
  internalError?: any;
  stackBeforeRethrow?: string;
  errors?: string[];

  constructor({ name, message, code, status, explanation }: ErrorDetails, error?: any) {
    super(message);
    this.name = name || 'CustomError';
    this.code = code;
    this.status = status;
    this.explanation = explanation;
    if (error) {
      this.internalError = error;
      this.stackBeforeRethrow = this.stack;
      this.errors = error.errors?.map((e: { message: string }) => e.message);
    }
    const messageLines = (this.message.match(/\n/g) || []).length + 1;
    this.stack = `${this.stack
      ?.split('\n ')
      .slice(0, messageLines + 1)
      .join('\n ')}\n ${error?.stack || ''}`;
  }
}

const exceptions = {
  invalidRequest: {
    message: 'Invalid Request.',
    name: 'InvalidRequestError',
    code: 1010,
    status: HttpStatus.BAD_REQUEST,
  },
  notFoundRequest: {
    message: 'Not Found Request.',
    name: 'NotFoundRequestError',
    code: 1020,
    status: HttpStatus.NOT_FOUND,
  },
  unauthorizedRequest: {
    message: 'Unauthorized Request.',
    name: 'UnauthorizedRequestError',
    code: 1030,
    status: HttpStatus.UNAUTHORIZED,
  },
  databaseQuery: {
    message: 'Database query error.',
    name: 'DatabaseQueryError',
    code: 1040,
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  },
  internalServer: {
    message: 'Internal Server Error.',
    name: 'InternalServerError',
    code: 1050,
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  },
};

interface AxiosError {
  response?: {
    status: number;
    data: any;
  };
  message: string;
  stack?: string;
  request?: {
    path: string;
  };
}

const formatAxiosError = (axiosError: AxiosError) => ({
  isError: true,
  status: axiosError?.response?.status,
  message: axiosError.message,
  explanation: axiosError?.response?.data,
  stack: axiosError.stack,
  url: axiosError?.request?.path,
});

export {
  CustomError,
  exceptions,
  formatAxiosError,
};
