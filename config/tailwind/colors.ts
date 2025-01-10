export const withOpacity = (variable: string): string =>
  // @ts-ignore
  (test) => {
    if (test.opacityValue === undefined) {
      return `rgb(var(--color-${variable}))`;
    }

    return `rgba(var(--color-${variable}), ${test.opacityValue})`;
  };
