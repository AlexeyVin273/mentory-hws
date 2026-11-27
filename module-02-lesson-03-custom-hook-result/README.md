# Модуль 02 · 01. Props и состояние карточки

Самостоятельная версия на основе module-01-lesson-02-render-clearance.
Вымышленные данные сохранены в courses.json, карточка реализована в TSX.

## Запуск

Из папки этого урока (Node.js 24):

```sh
npm ci
npm run dev
```

## Контракт

- Course описывает id, title, category, seats и version.
- CourseCardProps описывает курс, признак выбора и callback (id: string) => void.
- CoursesBoard хранит selectedId: string | null; начальное значение — null.
- Карточка сообщает о выборе через callback, родитель обновляет состояние.
- JSON проверяется присваиванием Course[], без утверждений типа.

## Проверки

```sh
npm run typecheck
npm run lint
npm run build
```

Команда typecheck вызывает tsc --noEmit -p tsconfig.app.json, включая весь src.
Корректный и ошибочный JSX-вызовы находятся в CourseCard.typecheck.tsx.
Файл не импортируется приложением, но проверяется компилятором.

У ошибочного вызова isSelected — строка вместо boolean. Если убрать
@ts-expect-error, TypeScript сообщит о несовместимом типе. Если исправить
значение на boolean и оставить директиву, TypeScript сообщит, что она не нужна.

В интерфейсе сначала ни один курс не выбран. После нажатия кнопка показывает
«Выбран». При выборе другого курса предыдущая кнопка возвращает исходный текст.