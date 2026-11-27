import CoursesBoard from './CoursesBoard/CoursesBoard'

export default function App() {
  return (
    <main>
      <header className="pageHeader">
        <p className="eyebrow">Модуль 02 · Урок 03</p>
        <h1>Выберите свой курс</h1>
        <p className="intro">Найдите тему для следующего шага. Карточки и список показывают один и тот же выбор.</p>
      </header>
      <CoursesBoard />
    </main>
  )
}
