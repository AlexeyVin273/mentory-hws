import { memo } from 'react';
import { calculateChecksum, courses, filterCourses } from './data.js';

function CourseCard({ item, query, iterations }) {
  const checksum = calculateChecksum(item.id, query, iterations);
  return (
    <li className="card">
      <h3>{item.title}</h3>
      <p>{item.level}</p>
      <small>Учебная контрольная сумма: {checksum}</small>
    </li>
  );
}

// Стабильная граница: при срочном вводе старый query позволяет пропустить список.
// Не передаём сюда сам текст input, isPending или новый объект настроек.
export const Results = memo(function Results({ query, iterations }) {
  const visible = filterCourses(courses, query);
  return (
    <section aria-label="Результаты поиска">
      <h2>Запрос списка: «{query || 'все курсы'}» · найдено {visible.length}</h2>
      {visible.length === 0 && <p>Ничего не найдено. Попробуйте React или CSS.</p>}
      <ul className="results">
        {visible.map((item) => (
          <CourseCard key={item.id} item={item} query={query} iterations={iterations} />
        ))}
      </ul>
    </section>
  );
});
