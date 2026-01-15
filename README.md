# QuestKeeper (2018) — D&D 5e Character Tracker

QuestKeeper is a classic PHP + MySQL web app for managing Dungeons & Dragons 5e character sheets. It was built for UC Davis WEB515 (2018) with a focus on practical web application fundamentals: authentication, CRUD, AJAX-driven UI updates, and a relational data model.

This repository is presented as a portfolio-style code sample: it’s small, readable, and demonstrates end-to-end delivery from database schema to UI interactions.

## Quick Snapshot (Employer / Recruiter)
- **Product**: Character sheet manager with registration/login and a member area
- **Core skills demonstrated**: PHP server-rendered pages, session auth, MySQL schema + seed data, AJAX/JSON endpoints, client-side derived-stat calculations
- **UI approach**: Form-based, “sheet-like” layout with dynamic computed fields (saves/skills/etc.) and partial page updates
- **Operational touches**: git-ignored environment config and production-safe error logging

## Features
- User registration + login
- Create, view, and update character sheets (ability scores, saves, skills, equipment, roleplay notes)
- AJAX endpoints to load character data without full page refreshes
- Seeded reference data for common 5e lists (classes, backgrounds, races, alignments, levels)

## Design & UX Notes
- **Sheet-first layout**: The UI is organized like a paper character sheet to reduce cognitive load.
- **Immediate feedback**: JavaScript calculates derived values (e.g., modifiers, saves, skills, passive perception) as inputs change.
- **Progressive enhancement**: Pages are server-rendered; AJAX improves responsiveness when loading character data.

## Tech Stack
- PHP
- MySQL / MariaDB
- Bootstrap + jQuery (loaded via CDN)

## Architecture (How It’s Put Together)
- **Server-rendered pages** for primary navigation and forms
- **JSON endpoints** in the member area for AJAX reads
- **Shared includes** under `includes/` for configuration, sessions, and helper logic

### Key Entry Points
- `index.php`: Home page + login
- `register.php`: Registration
- `members/`: Authenticated member area
  - `members/index.php`: Member landing page
  - `members/addCharacter.php`: New character form
  - `members/editCharacter.php`: Edit character form
  - `members/getCharacter.php`: JSON endpoint (`?characterID=...`)
  - `members/submitNewCharacter.php`: Create character (POST)
  - `members/updateCharacter.php`: Update character (POST)
  - `members/logout.php`: Logout

### Notable Includes
- `includes/variables.inc.php`: Loads DB credentials (supports local overrides)
- `includes/constants.inc.php`: Computes the application base path automatically for internal links
- `includes/session.inc.php`: Session gating for member pages
- `includes/bootstrap.inc.php`: Logs fatal errors to `php-error.log` (useful when display_errors is off)

## Local Setup (Developer)

### 1) Create the Database
Import `questkeeper.sql` into an empty database.

Notes:
- The SQL dump includes the full schema and seed rows for reference tables.
- Use `utf8mb4` where possible (the sample config uses `utf8mb4`).

### 2) Configure Database Credentials (Git-Ignored)
Create `includes/db.config.inc.php` by copying the example:

- Copy: `includes/db.config.inc.php.example` → `includes/db.config.inc.php`
- Set: `$host`, `$web_user`, `$pwd`, `$dbname`, `$charset`

Credential loading behavior:
- `includes/variables.inc.php` prefers `includes/db.config.inc.php`
- If not present, it falls back to `includes/db.local.inc.php` (also git-ignored)

### 3) Serve the Project
Use any PHP-capable web server (Apache, nginx+php-fpm, IIS) and point it at the project so `index.php` is reachable.

`includes/constants.inc.php` computes the base path automatically, so you can host:
- at a domain root (e.g. `http://questkeeper.local/`)
- in a subfolder (e.g. `http://localhost/2018Questkeeper/`)

## Using the App
- Register an account on `register.php`
- Log in from `index.php`
- Create or edit characters from the member area

## AJAX / JSON Endpoints
- `members/getCharacter.php?characterID=123` returns JSON for a character row

## Data Model (High Level)
- `users`: registered users
- `characters`: character sheets keyed by `userID`
- Lookup/reference tables: classes, races, backgrounds, alignments, levels, etc.

## Troubleshooting

### App Links Look Wrong
Base-path routing is derived automatically.

- Verify your server is configured with the correct document root.
- If you are using a reverse proxy or non-standard setup, you may need to adjust URL/path handling.

### Database Connection Errors
- Confirm `includes/db.config.inc.php` exists and has correct credentials.
- Ensure the DB user can read/write the imported schema.

### Blank Page / HTTP 500
Check the `php-error.log` file in the project root for fatal error diagnostics.

## Security Notes (Portfolio Context)
This project is intentionally kept close to its original course-era implementation.
It is **not** production-hardened.

If deploying publicly, start with:
- Replace MD5 password hashing with `password_hash()` / `password_verify()`
- Add CSRF protection on POST forms
- Ensure all SQL is consistently parameterized
- Add rate limiting / lockout for login

## Credits
Created by Frank Jamison for UC Davis WEB515 (2018). Provided as-is for learning and demonstration.
