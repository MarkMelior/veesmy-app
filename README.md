# Vees My

> Самое удобное приложение для записи результатов тренировок (:

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
![Zustand](https://img.shields.io/badge/Zustand-FFB441?style=for-the-badge&logo=ziggo&logoColor=black)
![TypeScript 5](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Module SCSS](https://img.shields.io/badge/module_scss-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Feature-Sliced Design](https://img.shields.io/badge/FSD-3481FE?style=for-the-badge&logo=flat&logoColor=white)
![GIT](https://img.shields.io/badge/CI_/_CD-000000?style=for-the-badge&logo=github&logoColor=white)
![ESLint 9](https://img.shields.io/badge/ESLint_9-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white)
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
- Серверные компоненты и типы экспортируем как обычно, через `index.ts`. Клиентские компоненты (`'use client'`) экспортируем через `client.ts`;
- Наименование типов. Данные получаемые с сервера: `Response`. Данные отправляемые на сервер: `Dto`.

#### Git

- `feature` - Добавление нового функционала;
- `fix` - Исправление какой-либо программной ошибки;
- `refactor` - Изменения в коде, не исправляющие ошибок и не добавляющие новый функционал;
- `test` - Добавление новых тестов или исправление существующих;
- `core` - Любые другие изменения.

> Пример названия ветки: `feature/VEES-330-short-description`. 
> Пример сообщения коммита: `VEES-330 | Short description`

##### SCSS

- [[custom-rules/restrict-apply](./config/stylelint/restrict-apply.js)] `@apply` запрещено использовать;
- [[custom-rules/scss-import-name](./config/eslint/scss-import-name.js)] Импорт стилей из `.module.scss` нужно называть `styles`.

##### Tailwind

- Добавлять пользовательские цвета нужно в `/shared/theme.scss` формата RGB! Далее нужно добавить этот цвет в `/tailwind.config.ts`.
    - Использовать переменную цвета нужно строго через `theme('colors.base.{50-950}')`. Через `var(--color-base-{50-950})` использовать запрещено!

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

`!` Сейчас большая часть компонентов - клиентские. Это связано с тем, что серверные компоненты не имеют доступа к хранилищу браузера. На этапе MVP мы всё храним в IndexedDB. В будущем, с появлением базы данных, мы перейдём на полноценный серверный рендеринг.

Проект написан в соответствии с архитектурной методологией [Feature-Sliced Design](https://feature-sliced.design/docs/get-started/tutorial) и [AppRouter](https://nextjs.org/docs/app) Next.js 15.

- [app](/src/app/) - [AppRouter](https://nextjs.org/docs/app);
- [widgets](/src/widgets/) - Большие, автономные блоки функциональности или пользовательского интерфейса;
- [features](/src/features/) - Повторно используемые реализации целых функций продукта;
- [entities](/src/entities/) - Бизнес сущности;
- [shared](/src/shared/) - Многократно-переиспользуемые компоненты и функции.
