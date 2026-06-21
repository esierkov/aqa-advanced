import chalk from "chalk";

console.log(
  chalk.green(
    "They don't know " +
      chalk.blue.underline.bold("that we know ") +
      chalk.bgRedBright.bold("they know we know!"),
  ),
);
