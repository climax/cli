#!/usr/bin/env node

const { is, program } = require('@climax/core');
const info = require('../package.json');

const newCommand = require("../lib/commands/new");

program.info(info);

program.command('new')
  .description('Create a new application.')
  .value('name', 'The name of your CLI application.', is.aMandatory.string.longerThan(0))
  .option('-d, --directory', 'The name of the application directory.', is.anOptional.string.longerThan(0))
  .action(newCommand);

program.init();
