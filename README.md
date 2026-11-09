# Mentory Homeworks

Учебные задания по React и TypeScript.

- `template/` — стартовый проект; инструкция по запуску и копированию внутри.
- `lesson-01-render-and-commit/` — пример имени будущей папки урока.

Каждый урок создаётся копированием `template` без `node_modules` и `dist`.
`AGENTS.md` переносится вместе с шаблоном: учебный код пишется вручную.
Все npm-команды выполняются внутри конкретного проекта, например `template`.

## Подключение GitHub

Создай пустой публичный репозиторий `mentory-hws`, без автоматически
добавленных README, .gitignore и лицензии. Из корня этой папки выполни:

```sh
git remote add origin https://github.com/YOUR_USERNAME/mentory-hws.git
git push -u origin main
```

Замени `YOUR_USERNAME` своим логином. Если используешь GitHub CLI и он
сообщает о недействительном токене, сначала выполни `gh auth login -h github.com`.
