0x02. i18n - Internationalization in Flask 🌍
This project demonstrates the use of i18n (Internationalization) in a Flask web application. It shows how to create multilingual web apps by integrating Flask with Babel for translation and locale handling.

📁 Project Structure
Each file or set of files illustrates a specific i18n concept or feature. The project builds incrementally from a basic Flask app to a fully localized one.

🔧 Files and Their Descriptions
0-app.py, templates/0-index.html
Goal: Basic Flask app setup.

Description: A simple "Hello world"-like web app with no i18n functionality yet.

1-app.py, templates/1-index.html
Goal: Get user locale from accept_languages.

Description: Uses Flask’s request object to guess the user’s locale from browser settings.

2-app.py, templates/2-index.html
Goal: Define supported languages.

Description: Introduces a list of supported languages and a basic function to get the best match from the client.

3-app.py, babel.cfg, templates/3-index.html, translations/en/LC_MESSAGES/messages.po, translations/fr/LC_MESSAGES/messages.po, translations/en/LC_MESSAGES/messages.mo, translations/fr/LC_MESSAGES/messages.mo
Goal: Translation using Babel.

Description:

Configures Babel.

Extracts and compiles translation strings.

Adds French and English support.

.po and .mo files are included for message translations.

babel.cfg defines which files to scan for translation strings.

4-app.py, templates/4-index.html
Goal: Force locale using query parameter.

Description: Lets users manually select a language using a URL parameter (?locale=fr).

5-app.py, templates/5-index.html
Goal: Implement user login mockup.

Description: Adds a fake user system that pretends users have a preferred locale saved.

6-app.py, templates/6-index.html
Goal: Use user-preferred locale.

Description: Updates locale selection logic to prioritize logged-in user’s preference.

7-app.py, templates/7-index.html
Goal: Add timezone support.

Description: Displays current time in user’s preferred timezone.

app.py, templates/index.html, translations/en/LC_MESSAGES/messages.po, translations/fr/LC_MESSAGES/messages.po
Goal: Final polished app.

Description: Combines all previous features (locale from user, browser, URL param; timezone support; i18n using Babel).

🛠️ Requirements
Python 3

Flask

Flask-Babel

pybabel CLI tool

Installation
bash
Copy
Edit
pip install Flask Flask-Babel

👨‍💻 Author
Name: Thokozane Tshabalala
Cellphone: 0793859541
Email: thokozanetek@gmail.com
Student at ALX Africa
Lover of code, music, movies, and football ⚽
Aiming to be a Full-Stack Dev 🚀
