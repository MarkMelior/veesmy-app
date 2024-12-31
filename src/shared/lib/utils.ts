export const getCurrentDateInfo = () => {
  const daysOfWeek = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];

  const now = new Date();

  const dayOfWeek = daysOfWeek[now.getDay()]; // Название дня недели
  const monthNumber = String(now.getMonth() + 1).padStart(2, '0'); // Номер месяца
  const dayOfMonth = String(now.getDate()).padStart(2, '0'); // Номер дня в месяце
  const year = now.getFullYear(); // Текущий год

  return {
    dayOfMonth,
    dayOfWeek,
    monthNumber,
    year,
  };
};
