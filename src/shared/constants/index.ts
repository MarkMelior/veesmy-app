export * from './routes';

export const getErrorGroupDirectly = (text: string) => {
  throw new Error(`The \'${text}\' component is a group and cannot be used directly.`);
};
