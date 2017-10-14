# dotenv-minimal

<img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" alt="dotenv" align="right" />

It is simple enough to just load the .env files into process.env .
Features:
- Zero-dependency,
- Simple and clean,
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
NODE_ENV=development
PORT=8000
```

That's it.

`process.env` now has the keys and values you defined in your `.env` file.