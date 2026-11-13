import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BlockingSearch, DeferredSearch, TransitionSearch } from './SearchLabs.jsx';
import { PurityLab } from './PurityLab.jsx';
import './styles.css';

const modes = { blocking: BlockingSearch, transition: TransitionSearch, deferred: DeferredSearch };
const explanations = {
  blocking: 'Ввод и список используют один state и обновляются со срочным приоритетом.',
  transition: 'Input обновляется сразу; отдельное состояние списка меняется внутри startTransition.',
  deferred: 'Input использует свежий state; список получает отложенную версию через useDeferredValue.',
};

function App() {
  const [mode, setMode] = useState('blocking');
  const [iterations, setIterations] = useState(80000);
  const [resetKey, setResetKey] = useState(0);
  const Search = modes[mode];
  return (
    <main>
      <header>
        <p className="eyebrow">MENTORY / MIDDLE / УРОК 02</p>
        <h1>React Priority Lab</h1>
        <p>Один каталог, три способа обновления. Сравните отзывчивость ввода.</p>
      </header>
      <section className="panel controls" aria-label="Настройки опыта">
        <label>Режим
          <select value={mode} onChange={(event) => setMode(event.target.value)}>
            <option value="blocking">Обычное обновление</option>
            <option value="transition">useTransition</option>
            <option value="deferred">useDeferredValue</option>
          </select>
        </label>
        <label>Итераций на карточку
          <select value={iterations} onChange={(event) => setIterations(Number(event.target.value))}>
            <option value={0}>0 — без искусственной нагрузки</option>
            <option value={80000}>80 000 — умеренная</option>
            <option value={320000}>320 000 — высокая</option>
            <option value={960000}>960 000 — очень высокая</option>
          </select>
        </label>
        <button onClick={() => setResetKey((value) => value + 1)}>Сбросить поиск</button>
      </section>
      <p>{explanations[mode]}</p>
      <p className="note">Изменение режима или сброс очищают поиск. Нагрузка учебная.
        Первый render и смена нагрузки могут блокировать все режимы.
        Разница зависит от устройства; transition не уменьшает объём вычислений.</p>
      <section className="panel">
        <Search key={`${mode}-${resetKey}`} iterations={iterations} />
      </section>
      <PurityLab />
      <footer>Без API, ключей и отправки данных. StrictMode включён в development.</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
