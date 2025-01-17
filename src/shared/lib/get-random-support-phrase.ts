export const getRandomSupportPhrase = (): string => {
  const phrases = [
    'Так держать!',
    'Отличная работа!',
    'Ты красавчик внатуре!',
    'Ты на правильном пути!',
    'Продолжай в том же духе!',
    'С каждым шагом ближе к цели!',
  ];

  const randomIndex = Math.floor(Math.random() * phrases.length);

  return phrases[randomIndex];
};
