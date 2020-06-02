Büsslä Web Äpp
===

This is a [Next.js](https://nextjs.org/) project.

# Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/*.js`. The page auto-updates as you edit the file.

# Libraries in use
* `react`: A declarative, efficient, and flexible JavaScript library for building user interfaces.
* `redux`: Predictable state container for JavaScript apps.
* `redux-saga`: An alternative side effect model for Redux apps.

# Important scripts
## For development
`npm run`..
* `dev`: Run a self-refreshing development server.
* `flow:start`, `flow:status` & `flow:stop`: Type check your code.
  * Learn more about [Flow](https://flow.org/).
* `prettier:fix`: Format your code to stick to the projects code style.
* `test:watch`: Run self-refreshing tests.

## For building
`npm run`..
* `build` & `export`: Build and export the frontend as static pages.
* `flow`: Run a once-only type check.
* `prettier:check`: Check the code style.
* `coverage`: Run all tests and create a coverage report.

# Redux CLI
For development purposes (`if (process.env.NODE_ENV !== 'production')`) we created a so called `redux`-cli.
This helper functions allow us to interact with the `redux` store via command line interface, or rather browser console
and invalidates the need for a running backend on your personal machine.

It is really just a bunch of JavaScript functions. So, in order to get started type `reduxCli.help()` into the console
of your browser (when navigated to [http://localhost:3000](http://localhost:3000)). This will list all available
commands.

# Hat Tips
* To [@einaregilsson](https://github.com/einaregilsson) for the SVG cards in `public/cards`.

# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions
are welcome!
