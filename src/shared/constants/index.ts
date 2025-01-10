export enum AppRoutes {
  MAIN = '/',
  VEES = '/vees',
  SETTINGS = '/settings',
  // last
  NOT_FOUND = '/not-found',
}

export const getErrorGroupDirectly = (text: string) => {
  throw new Error(`The \'${text}\' component is a group and cannot be used directly.`);
};
