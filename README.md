Простой сервис заметок для личного пользования. Быстрые заметки без подробных объяснений, по большей части как записная книжка разных ссылок с интересным. Уроки, сайты, статьи и т.д. и т.п.

Сделано с помощью:
- для разметки Tailwind CSS + SASS. внутрь .scss через @apply писались нужные стили с вложенностью, файл билдился в input.css и затем в готовый outpus.css
- фронт на чистом JS, без библиотек. Для мобилок реализован простеьнкий PullToRequest для обновления в режиме PWA.
- Сделан полукостыльный PWA без кеширования
- бекенд на PHP с БД на MySQL. В планах связать с Supabase
- через Capacitor сбилдено приложение для Android (на поиграться, потестировать будет ли впринципе работать на ванильном JS)