export const filterUndefined = <T extends object>(obj: T): T => Object.fromEntries(
  Object.entries(obj).filter(([_, value]) => value !== undefined),
) as T;
