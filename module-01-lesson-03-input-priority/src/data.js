const topics = ['React', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Accessibility'];

// Данные создаются один раз при загрузке модуля, без сети и случайных значений.
export const courses = Array.from({ length: 240 }, (_, index) => ({
  id: index + 1,
  title: `${topics[index % topics.length]} · практикум ${index + 1}`,
  level: ['Введение', 'Практика', 'Разбор'][index % 3],
}));

export function filterCourses(items, query) {
  const normalized = query.trim().toLocaleLowerCase('ru');
  return items.filter((item) => item.title.toLocaleLowerCase('ru').includes(normalized));
}

// Учебная CPU-нагрузка, а не пример производственного алгоритма.
// Ограниченный детерминированный цикл: одинаковые аргументы дают одинаковый результат.
// Он замедляет каждую карточку отдельно, оставляя React границы компонентов.
export function calculateChecksum(id, query, iterations) {
  let result = id + query.length;
  for (let index = 0; index < iterations; index += 1) {
    result = (Math.imul(result, 31) + index) | 0;
  }
  return result >>> 0;
}
