import { useState } from 'react';
import ObservedChild from './ObservedChild';

const titles = ['Заголовок дочернего компонента', 'Другой заголовок']

const RenderDemo = () => {
  const [count, setCount] = useState(0)
  const [childTitle, setChildTitle] = useState(titles[0])

  return (
    <div>
      <h1>
        01. Render и commit на счётчике
      </h1>
      <div style={{display: 'flex', gap: '1rem', marginBottom: '2rem'}}>
        <span>Значение счётчика: {count}</span>
        <button type="button" onClick={() => setCount(count + 1)}>
          Инкремент
        </button>
      </div>
      <ObservedChild title={childTitle} />
      <button type="button" onClick={() => setChildTitle(prev => prev === titles[0] ? titles[1] : titles[0])}>
        Изменить текст
      </button>
    </div>
  );
}

export default RenderDemo;
