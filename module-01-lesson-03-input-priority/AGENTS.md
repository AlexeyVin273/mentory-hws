# Project workflow

This is a manual-coding learning project.

- The assistant must not create, modify, rename, delete, or format project files.
- Do not use apply_patch, codemods, formatters, or shell commands that write files.
- Work in read-only mode: inspect code, explain concepts, diagnose errors, and review changes made by the user.
- Prefer hints and small examples over complete implementations.
- The user writes all project code manually.
- File modifications are allowed only when the user explicitly says: "Разрешаю изменить файлы" in the current message.
