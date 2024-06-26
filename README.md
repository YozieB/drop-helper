# Сервис для помощи в восстановлении дропов

### `Описание`
Это набор утилит помогающий быстрее восстанавливать и склеивать дропы.

### `Утилита RegexHelper`:
Подходит для парсинга файла **badfiles.txt** с восстановленного дропа через севрис a
<a href="https://r-tools.org">r-tools.org</a>,
для последующей массовой замены с помощью regex в *WebStorm* и других редакторах. 

**Пока что утилита подходит только для путей изображений.**

`Сценарии использования`
- Нужно заменить все незагрузившееся картинки, дабы избежать ошибок
- Массовая замена при больших обьмах страниц

`Инструкция`
1. Скопировать все из файла badfiles.txt, после процесса восстановки сайта
2. Сгенерировать regex
3. Вставить regex в поле поиска webstorm
4. Заменить найденные результаты на путь для правильной картинки

### `Утилита RedirectHelper`:
Утилита подходит для создания редиректов с одного сайта на другой, и последующей записи в .htaccess

`Инструкция`
1. Вставить ссылки с сайта/дропа для редиректа
2. Вставить ссылку конечноого ресурса

### `TODO`
- Реализовать многие другие паттерны для поиска и замены regex, redirect и другие утилиты

### `Стек`

- React.js
- Chakra UI

### `Ссылка`

[https://yozieb.github.io/drop-helper](https://yozieb.github.io/drop-helper)

### `История версий`
- v.0.1 - Релиз
- v.0.2 - Роутинг, Redirect Helper, Меню, Главная страница, 404 страница, перепрофилирование сервиса
- v.0.3 - Рефакторинг