# Личный проект «Техномарт»

* Студент: [Олег Акиншин](https://up.htmlacademy.ru/htmlcss/23/user/826345).
* Наставник: [Дмитрий Иовлев](https://up.htmlacademy.ru/htmlcss/23/user/200490).

---

_Не удаляйте и не обращайте внимание на файлы:_<br>
_`.editorconfig`, `.gitattributes`, `.gitignore`, `Contributing.md`, `Readme.md`._

---

### Памятка

#### 1. Зарегистрируйтесь на Гитхабе

Если у вас ещё нет аккаунта на [github.com](https://github.com/join), скорее зарегистрируйтесь.

#### 2. Создайте форк

[Откройте мастер-репозиторий](https://github.com/htmlacademy-htmlcss/826345-technomart) и нажмите кнопку «Fork» в правом верхнем углу. Репозиторий из Академии скопируется в ваш аккаунт.

<img width="769" alt="" src="https://user-images.githubusercontent.com/10909/29037784-cf833fec-7bad-11e7-8eec-dfe32aac11b1.jpg">

Получится вот так:

<img width="769" alt="" src="https://user-images.githubusercontent.com/10909/29037785-d1363f60-7bad-11e7-99da-f02a2f996a01.jpg">

#### 3. Клонируйте репозиторий на свой компьютер

Будьте внимательны: нужно клонировать свой репозиторий (форк), а не репозиторий Академии. Нажмите кнопку «Clone or download», а затем «Open in Desktop», чтобы клонировать репозиторий через программу [GitHub Desktop](https://desktop.github.com):

<img width="769" alt="" src="https://user-images.githubusercontent.com/10909/29037788-d26a3558-7bad-11e7-9d08-2f9f0f6e467a.jpg">

Программа клонирует репозиторий на ваш компьютер и подготовит всё необходимое для старта работы.

#### 4. Начинайте обучение!

---

<a href="https://htmlacademy.ru/intensive/htmlcss"><img align="left" width="50" height="50" alt="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/htmlcss/logo-for-github-2.png"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[HTML и CSS, уровень 1](https://htmlacademy.ru/intensive/htmlcss)» от [HTML Academy](https://htmlacademy.ru).
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Барбершоп «Бородинский»</title>
  </head>
  <body>
    <header class="main-header">
      <nav class="main-navigation">
        <a class="main-header-logo">
          <img src="img/index-logo.svg" width="368" height="153" alt="Логотип барбершопа «Бородинский»">
        </a>
        <ul class="site-navigation">
          <li><a href="info.html">Информация</a></li>
          <li><a href="news.html">Новости</a></li>
          <li><a href="price.html">Прайс-лист</a></li>
          <li><a href="catalog.html">Магазин</a></li>
          <li><a href="contacts.html">Контакты</a></li>
        </ul>
        <ul class="user-navigation">
          <li class="login-link">
            <a class="login-link" href="login.html">
              Вход
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <main class="container">
      <section class="gallery">
        <h2>Фотогалерея</h2>
        <figure class="gallery-content">
          <a href="#">
            <img src="img/studio.jpg" width="286" height="164" alt="Интерьер">
           </a>
        </figure>
        <button class="button gallery-button gallery-button-back" type="button">Назад</button>
        <button class="button gallery-button gallery-button-next" type="button">Вперед</button>
      </section>
      <section class="appointment">
        <h2>Записаться</h2>
        <p class="appointment-info">Укажите желаемую дату и время и мы свяжемся с вами для подтверждения брони</p>
        <form class="appointment-form" action="https://echo.htmlacademy.ru" method="post">
          <p class="appointment-item">
            <label for="appointment-date">Дата</label>
            <input id="appointment-date" type="text" name="date" value="" placeholder="08.10.2017">
          </p>
          <p class="appointment-item">
            <label for="appointment-time">Время</label>
            <input id="appointment-time" type="text" name="time" value="" placeholder="10:00">
          </p>
          <p class="appointment-item">
            <label for="appointment-name">Ваше имя</label>
            <input id="appointment-name" type="text" name="name" value="" placeholder="Борода">
          </p>
          <p class="appointment-item">
            <label for="appointment-phone">Телефон</label>
            <input id="appointment-phone" type="tel" name="phone" value="" placeholder="+7 123 456-78-90">
          </p>
          <button class="button" type="submit">Отправить</button>
        </form> 
      </section>
      <section class="modal modal-login">
        <h2>Личный кабинет</h2>
        <p>Введите свой логин и пароль.</p>
        <form class="login-form" action="https://echo.htmlacademy.ru" method="post">
          <p>
            <label class="visually-hidden" for="user-login">Логин</label>
            <input class="login-icon-user" id="user-login" type="text" name="login" placeholder="Логин">
          </p>
          <p>
            <label class="visually-hidden" for="user-password">Пароль</label>
            <input class="login-icon-password" id="user-password" type="password" name="password" placeholder="Пароль">
          </p>
          <p class="login-password-info">
            <label class="login-checkbox">
              <input type="checkbox" name="remember">
              Запомните меня
            </label>
            <a class="restore" href="#">Я забыл пароль!</a>
          </p>
          <button class="button" type="submit">
            Войти
          </button>
        </form>
        <button class="modal-close" type="button">
          Закрыть
        </button>
      </section>
      <section class="modal modal-map">
        <h2 class="visually-hidden">
          Как до нас добраться
        </h2>
        <p>
          <img src="img/map.jpg" width="780" height="560" alt="Офис компании по адресу ул. Большая Конюшенная 19/8, Санкт-Петербург">
        </p>
        <button class="modal-close" type="button">
          Закрыть
        </button>
      </section>
    </main>
  </body>
</html>
