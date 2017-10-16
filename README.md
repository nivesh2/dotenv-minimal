# dotenv-minimal

<img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" alt="dotenv" align="right" />

It is simple enough to just load the .env files into process.env .
Features:
- Zero-dependency,
- Simple and clean,
- less than 50 lines,
- Easy enough to add your own customizations in to it.

## Install

```bash
npm install dotenv-minimal --save
```

## Usage
Require it in your entry file:
```javascript
require('dotenv-minimal')
```

Create a `.env` file in the root directory of your project. Add
environment specific variables on new lines in the form of `KEY=VALUE`.
For example:

```bash
# Single Value
NODE_ENV=development
PORT=8000

# Multi Value Environment Variables seperated by comma
CLIENT_ID=APP,WEB,API

# Supports multiple = in the same line
BASIC_AUTH=Authorisation QWswcwevRQQQEWFEWEFE==
```

That's it.

`process.env` now has the keys and values you defined in your `.env` file.

### Development Setup steps:
* clone the repo
* npm install --save-dev eslint-config-airbnb-base eslint eslint-plugin-import
* npm install