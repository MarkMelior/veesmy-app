# Vees My

> Самое удобное приложение для записи результатов тренировок (:

⠀

- ✨🎨 Разработан [дизайн в Figma](https://www.figma.com/design/l7WmZZ7WKEr3YnVNdibxGD/Mobile-App?node-id=250-793&t=7fycS0Obh0DIcwXF-1)
- Собственный [UI Kit](/src/shared/ui/)
- Серверный рендеринг и [AppRouter](https://nextjs.org/docs/app)
- Архитектурная методология [Feature-Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)
- 🤍🖤 Темная и светлая тема
- Полная типизация проекта

[![](/docs/preview.png/)](https://www.figma.com/design/l7WmZZ7WKEr3YnVNdibxGD/Mobile-App?node-id=250-793&t=7fycS0Obh0DIcwXF-1)

---

![Next.js 15](https://img.shields.io/badge/Next.js_15-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript 5](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Feature-Sliced Design](https://img.shields.io/badge/FSD-3481FE?style=for-the-badge&logo=flat&logoColor=white)
![Module SCSS](https://img.shields.io/badge/module_scss-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![GIT](https://img.shields.io/badge/CI_/_CD-000000?style=for-the-badge&logo=github&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white)
![stylelint](https://img.shields.io/badge/stylelint-263238?style=for-the-badge&logo=stylelint&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

⠀

> Продемонстрировать свои навыки, это не про «усложнить проект»... 
> *(всевозможные самописные утилиты, хуки, размазывание не переиспользуемого функционала по всей архитектуре, тесты на всё подряд)*.
> ~
> Настоящее мастерство находится в простоте `^-^`

⠀

### 📋✏️ Общие правила проекта

#### Архитектура

- Необходимо оставлять комментарии к сложному функционалу;
- Папки с компонентами, как и сами компоненты, должны быть в `PascalCase`. Утилиты, моки, типы и т.п. в `kebab-case`;
- Наименование `.module.scss` должно начинаться с маленькой буквы, а компонента `.tsx` с большой;
- Если в слайсе, кроме `Name.tsx`, `index.ts` и `name.module.scss` ничего нет, то не нужно создавать сегмент `ui/`;
- Серверные компоненты и типы экспортируем как обычно, через `index.ts`. Клиентские компоненты (`'use client'`) экспортируем через `client.ts`.

#### Git

- `feature` - Добавление нового функционала;
- `fix` - Исправление какой-либо программной ошибки;
- `refactor` - Изменения в коде, не исправляющие ошибок и не добавляющие новый функционал;
- `test` - Добавление новых тестов или исправление существующих;
- `core` - Любые другие изменения.

> Пример названия ветки: `feature/VEES-330-short-description`. 
> Пример сообщения коммита: `VEES-330 | Short description`

##### SCSS

- [[custom-rules/restrict-apply](./config/stylelint/restrict-apply.js)] `@apply` можно использовать только для:  
    - размера текста: `text-sm` | `text-base` и т.п.
    - border: `border...` и т.п.
- [[custom-rules/scss-import-name](./config/eslint/scss-import-name.js)] Импорт стилей из `.module.scss` нужно называть `styles`

---

⠀

### 🎬📃 Скрипты

- `yarn dev` - Запуск в Development режиме;
- `yarn build` - Production сборка;
- `yarn start` - Запуск Production сборки;
- `yarn lint` - Проверка линтером.

---

⠀

### 📂⚡️ Архитектура проекта

Проект написан в соответствии с архитектурной методологией [Feature-Sliced Design](https://feature-sliced.design/docs/get-started/tutorial) и [AppRouter](https://nextjs.org/docs/app) Next.js 15.

- [app](/src/app/) - [AppRouter](https://nextjs.org/docs/app);
- [widgets](/src/widgets/) - Большие, автономные блоки функциональности или пользовательского интерфейса;
- [features](/src/features/) - Повторно используемые реализации целых функций продукта;
- [entities](/src/entities/) - Бизнес сущности;
- [shared](/src/shared/) - Многократно-переиспользуемые компоненты и функции.
