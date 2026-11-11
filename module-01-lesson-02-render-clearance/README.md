# Задание 02. Чистота render и выбор курса

Список карточек курсов с кнопкой «Выбрать курс».

Цель — перенести запись выбранного id из render в обработчик клика.
До нажатия localStorage не меняется, после — хранит id выбранного курса
под ключом `selected-course`. Повторный render не вызывает запись.

Запись в useEffect без связи с кликом не подходит: Effect может
выполниться без действия пользователя.

## Исходники

- [CourseCard.tsx](src/app/CourseCard/CourseCard.tsx) — карточка и обработчик выбора.
- [CoursesBoard.tsx](src/app/CoursesBoard/CoursesBoard.tsx) — вывод списка курсов.
- [course.types.ts](src/app/course.types.ts) — тип данных курса.
- [courses.json](src/app/courses.json) — исходные данные.

## Запуск

npm ci
npm run dev
