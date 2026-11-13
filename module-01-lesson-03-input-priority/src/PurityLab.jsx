import { useState } from 'react';

// Проверяем функцию вручную по кнопке, а не запускаем побочный эффект в render React.
function makeImpureFormatter() {
  let calls = 0;
  return (name) => `${name}: вызов ${++calls}`;
}

function pureFormatter(name) {
  return `Здравствуйте, ${name}!`;
}

export function PurityLab() {
  const [report, setReport] = useState(null);
  function compare() {
    const impure = makeImpureFormatter();
    setReport({
      impure: [impure('Анна'), impure('Анна')],
      pure: [pureFormatter('Анна'), pureFormatter('Анна')],
    });
  }
  return (
    <section className="panel">
      <h2>Повторный вызов с одинаковыми аргументами</h2>
      <p>Представьте: React вычислил вариант UI, отбросил его и вызвал функцию снова.
        Должен ли повторный вызов менять внешний счётчик?</p>
      <button onClick={compare}>Вызвать обе функции дважды</button>
      {report && <div className="comparison">
        <div><h3>Функция со скрытым состоянием</h3><pre>{report.impure.join('\n')}</pre></div>
        <div><h3>Чистая функция</h3><pre>{report.pure.join('\n')}</pre></div>
      </div>}
      <p>Это модель чистоты функций. Она не измеряет количество render или commit React.</p>
    </section>
  );
}
