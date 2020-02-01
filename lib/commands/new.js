const makeDir = require('make-dir');
const path = require('path');

module.exports = async ({ options, values }) => {
  const newApplicationDirectory = options.directory !== null ? options.directory : values.name;
  path.normalize(`${process.cwd()}/${newApplicationDirectory}`);

  await makeDir(newApplicationDirectory);
}
