#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

const command = () => {
  console.log('Hello, World!');
};

program
  .version('0.0.1')
  .option('-f, --format <type>','output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action(command)
  .parse(process.argv);












// program
//   .description('Compares two configuration files and shows a difference.')
//   .version('0.0.1')
// 


//   program.command('split')
//   .description('Split a string into substrings and display as an array')
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit));
//   });

// program.parse();