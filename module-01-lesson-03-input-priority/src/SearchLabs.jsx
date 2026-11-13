import { useDeferredValue, useState, useTransition } from 'react';
import { Results } from './Results.jsx';


function SearchView({ text, shownQuery, onChange, pending, iterations }) {
  return (
    <>
      <label className="search-label">
        Поиск курса
        <input type="search" value={text} onChange={onChange} placeholder="Например, React" />
      </label>
      <p>Срочный текст input: <strong>«{text}»</strong></p>
      <p role="status" aria-live="polite">
        {pending ? 'Обновляем список; ниже может быть предыдущий результат.' : 'Список соответствует вводу.'}
      </p>
      <div className={pending ? 'stale' : ''} aria-busy={pending}>
        <Results query={shownQuery} iterations={iterations} />
      </div>
    </>
  );
}

export function BlockingSearch({ iterations }) {
  const [text, setText] = useState('');
  return <SearchView text={text} shownQuery={text} iterations={iterations}
    pending={false} onChange={(event) => setText(event.target.value)} />;
}

export function TransitionSearch({ iterations }) {
  const [text, setText] = useState('');
  const [listQuery, setListQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  function handleChange(event) {
    const next = event.target.value;
    setText(next); // Срочное обновление управляемого input.
    startTransition(() => {
      setListQuery(next); // Отмечаем обновление состояния, а не запускаем поток.
    });
  }

  return <SearchView text={text} shownQuery={listQuery} iterations={iterations}
    pending={isPending} onChange={handleChange} />;
}

export function DeferredSearch({ iterations }) {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  const isStale = text !== deferredText;
  return <SearchView text={text} shownQuery={deferredText} iterations={iterations}
    pending={isStale} onChange={(event) => setText(event.target.value)} />;
}