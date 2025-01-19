import { openMessage } from './open-message';

interface IHandleError {
  defaultError?: string
  defaultErrorCode?: string
  error: unknown
  isMessage?: boolean
}

export interface IErrorResponse {
  message: string
  name: string
}

export const handleError = ({
  defaultError = 'Произошла неизвестная ошибка',
  defaultErrorCode = '520',
  error,
  isMessage = true,
}: IHandleError): IErrorResponse => {
  let errorResponse: IErrorResponse = {
    message: defaultError,
    name: defaultErrorCode,
  };

  if (typeof error === 'string') {
    errorResponse = {
      message: error,
      name: 'UnknownError',
    };
  } else if (error instanceof Error) {
    errorResponse = {
      message: error.message,
      name: error.name,
    };
  }

  if (isMessage) {
    openMessage({
      content: `Ошибка ${errorResponse.name}`,
      description: errorResponse.message,
      isCopy: true,
      type: 'error',
    });
  }

  return errorResponse;
};
