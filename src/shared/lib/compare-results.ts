// Логика для сравнения результатов
export const compareResults = (
  current: { weight: number, count: number },
  previous: { weight: number, count: number },
  comparisonType: 'better' | 'worse',
): boolean => {
  if (comparisonType === 'better') {
    return (
      current.weight > previous.weight
      || (current.weight === previous.weight && current.count > previous.count)
    );
  }
  if (comparisonType === 'worse') {
    return (
      current.weight < previous.weight
      || (current.weight === previous.weight && current.count < previous.count)
    );
  }

  return false;
};
