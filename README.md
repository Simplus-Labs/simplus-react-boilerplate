<a href="https://precedent.dev">
  <h1 align="center">Simplus React Boilerplate</h1>
</a>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#customize-to-your-needs"><strong>Customize to your needs</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a>
  </p>
<br/>

## Introduction

This BolerPlay is ideal for creating React tools for Simplus-Labs.

Install the repository

```bash
git clone https://github.com/Simplus-Labs/simplus-react-boilerplate
```

Next, update the Git source to the corresponding repository of your application using the following command:

```bash
git remote set-url origin tool-url
```

## Customize to your needs

Once you have the Boilerplate on your machine, you need to modify the meta-information of the tool and set the color theme.

Go to the `index.html` file.

- Change the content of the meta tag `og:title` to the name of the tool that it's building
- Change the content of the meta tag `og:description` to the description of the tool that it's building
- On the `<body>` tag with the theme that the tool requires.

```html
<body class="yellow-gradient">
  <div id="root"></div>
</body>
```

### List of themes

- slate-gradient
- stone-gradient
- gray-gradient
- neutral-gradient
- red-gradient
- rose-gradient
- green-gradient
- blue-gradient
- yellow-gradient
- violet-gradient

## Tech Stack

React, tailwind, shadcnUI, TypeScript
