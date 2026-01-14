# QuestKeeper Character Tracker

QuestKeeper is a web-based Dungeons & Dragons 5e character manager originally created for the UC Davis WEB515 course (2018) focused on building web applications with AJAX.

It provides registration/login plus a member area for creating, viewing, and updating character sheets backed by a MySQL database.

## What It Does
- Member registration and authentication
- Create and update D&D 5e characters (core sheet fields like ability scores, saves, skills, equipment, and roleplay notes)
- Server-rendered pages with AJAX endpoints for loading character data without full page refreshes
- MySQL schema seeded with common 5e reference data (classes, backgrounds, races, alignments, levels)

## Tech Stack
- PHP (server-rendered pages + JSON endpoints)
- MySQL / MariaDB
- Bootstrap + jQuery (loaded via CDN)

## Key Files And Entry Points
- `index.php`: Home page + login form
- `register.php`: Registration page
- `members/`: Authenticated “member area” pages and endpoints
	- `members/index.php`: Member landing page
	- `members/addCharacter.php`: Create a new character
	- `members/editCharacter.php`: Edit an existing character
	- `members/getCharacter.php`: JSON endpoint to fetch a character by `characterID`
	- `members/updateCharacter.php`: Persists posted character changes
	- `members/submitNewCharacter.php`: Persists a new character
	- `members/logout.php`: Ends the session
- `includes/`: Shared PHP includes
	- `includes/variables.inc.php`: Database connection settings
	- `includes/constants.inc.php`: Application base URL (`$ROOT`) used for internal links
	- `includes/session.inc.php`: Session gating for member pages
- `questkeeper.sql`: Database schema + seed data

## Setup

### 1) Create The Database
Import `questkeeper.sql` into an empty database.

Notes:
- The SQL dump includes the full schema and seed rows for reference tables.
- Use an `utf8mb4` character set to match the schema expectations.

### 2) Configure Database Credentials
Copy `includes/db.config.inc.php.example` to `includes/db.config.inc.php` and set:
- `$host` (database server)
- `$web_user` and `$pwd` (database credentials)
- `$dbname` (database name)

`includes/db.config.inc.php` is git-ignored so credentials stay out of git.

### 3) Configure The Application Base URL
Edit `includes/constants.inc.php` and set `$ROOT` to the externally visible base URL where the app is served (include the scheme and trailing slash).

This value is used to build internal links and form targets throughout the member pages.

### 4) Serve The Project
Deploy the project to any PHP-capable web server so that `index.php` is reachable from your browser.

## Using The App

### Register And Log In
1. Open the home page (`index.php`).
2. Click **Register** to create an account.
3. Log in using the login form on the home page.

### Create A Character
1. After login, you’ll land in the member area.
2. Choose **Add Character**.
3. Fill out the sheet and submit to save.

### Edit A Character
1. In the member area, choose **Edit Character**.
2. Select a character and update fields.
3. Save to persist changes.

## AJAX / JSON Endpoints (For Developers)
The UI uses JSON endpoints to load character data dynamically.

- `members/getCharacter.php?characterID=123` returns a JSON object with the full row from the `characters` table.

## Data Model Overview
At a high level:
- `users` stores registered users.
- `characters` stores a character sheet keyed to a `userID`.
- Several lookup tables provide 5e reference lists (classes, races, backgrounds, alignments, levels, etc.).

## Troubleshooting

### Links Or Form Posts Go To The Wrong Place
Most navigation is built using `$ROOT`.

- Verify `$ROOT` in `includes/constants.inc.php` matches where you are serving the app from.
- Ensure it includes a trailing slash.

### Database Connection Errors
- Double-check `includes/variables.inc.php` values (host, database name, username, password).
- Confirm the database user has permissions to read/write the schema created from `questkeeper.sql`.

### Login Doesn’t Work
- Ensure the database imported cleanly and the `users` table exists.
- Confirm you’re logging in with the same credentials you registered.

## Security Notes
This project was built as a course/portfolio application and is not hardened for production use.

If you plan to deploy it publicly, you should at minimum:
- Upgrade password storage to `password_hash()` / `password_verify()` (the current implementation uses MD5)
- Remove hard-coded credentials from the repository
- Review SQL usage and add parameterized queries consistently

## Credits
Created by Frank Jamison for UC Davis WEB515 (2018).

---
This project is provided as-is for learning and demonstration purposes.
