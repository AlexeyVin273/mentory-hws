# 01. Render и commit на счётчике

Учебный пример для сравнения повторного рендера компонента и изменений DOM при обновлении счётчика и текста дочернего компонента.

## Запуск

```sh
npm ci
npm run dev
```

## Исходники

- [RenderDemo.tsx](src/app/components/RenderDemo.tsx) — родитель со счётчиком и кнопками.
- [ObservedChild.tsx](src/app/components/ObservedChild.tsx) — дочерний компонент с логом и наблюдением за DOM.
