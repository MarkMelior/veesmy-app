const daysOfWeek = [
  'воскресенье',
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота',
];

const monthsOfYear = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const getCurrentDateInfo = () => {
  const now = new Date();

  const dayOfWeek = daysOfWeek[now.getDay()];
  const monthNumber = String(now.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(now.getDate()).padStart(2, '0');
  const year = now.getFullYear();

  return {
    dayOfMonth,
    dayOfWeek,
    monthNumber,
    year,
  };
};

export const getDateInfo = (date: Date | string | number) => {
  const parsedDate = typeof date === 'string' || typeof date === 'number'
    ? new Date(date)
    : date;

  if (isNaN(parsedDate.getTime())) {
    throw new Error('Invalid date');
  }

  return {
    day: parsedDate.getDate(),
    dayOfWeek: daysOfWeek[parsedDate.getDay()],
    hours: String(parsedDate.getHours()).padStart(2, '0'),
    minutes: String(parsedDate.getMinutes()).padStart(2, '0'),
    month: String(parsedDate.getMonth() + 1).padStart(2, '0'),
    monthName: monthsOfYear[parsedDate.getMonth()],
    year: parsedDate.getFullYear(),
  };
};

// Вспомогательная функция для склонения
const getDeclension = (number: number, forms: [string, string, string]): string => {
  const mod10 = number % 10;
  const mod100 = number % 100;

  if (mod100 >= 11 && mod100 <= 19) {
    return forms[2];
  }

  if (mod10 === 1) {
    return forms[0];
  }

  if (mod10 >= 2 && mod10 <= 4) {
    return forms[1];
  }

  return forms[2];
};

export const getDateRangeDuration = (startDate: Date | string, endDate: Date | string) => {
  const parsedStartDate = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const parsedEndDate = typeof endDate === 'string' ? new Date(endDate) : endDate;

  if (isNaN(parsedStartDate.getTime()) || isNaN(parsedEndDate.getTime())) {
    throw new Error('Invalid date');
  }

  const durationMs = parsedEndDate.getTime() - parsedStartDate.getTime();

  if (durationMs < 0) {
    throw new Error('End date must be greater than or equal to start date');
  }

  const hours = Math.floor(durationMs / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(durationMs / (1000 * 60)) % 60;

  const hoursText = hours ? `${hours} ${getDeclension(hours, ['час', 'часа', 'часов'])} ` : '';
  const minutesText = `${minutes} ${getDeclension(minutes, ['минута', 'минуты', 'минут'])}`;

  return `${hoursText}${minutesText}`.trim();
};

export const getDateDifference = (
  startDate: Date | string | number,
  endDate: Date | string | number,
) => {
  const start = typeof startDate === 'string' || typeof startDate === 'number'
    ? new Date(startDate)
    : startDate;

  const end = typeof endDate === 'string' || typeof endDate === 'number'
    ? new Date(endDate)
    : endDate;

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw new Error('Invalid date');
  }

  const totalMilliseconds = end.getTime() - start.getTime();

  // Вычисляем компоненты разницы
  const totalDays = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  const days = totalDays % 30;

  return { days, months, years };
};
