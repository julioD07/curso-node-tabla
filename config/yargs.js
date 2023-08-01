const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    demandOption: true,
    describe: "Muestra la tabla en consola",
  })
  .check((argv, options) => {
    if (typeof argv.l !== "boolean") {
      throw "Listar tiene que ser un booleano";
    }
    return true;
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    demandOption: true,
    describe: "Hasta que número se va a multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.h)) {
      throw "Hasta tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
