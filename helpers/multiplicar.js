const fs = require("fs");

//Ejemplo de una promesa
const crearArchivo = (base = 5) => {
  return new Promise((resolve, reject) => {
    console.log("===================");
    console.log(`    Tabla del ${base}`);
    console.log("===================");

    let salida = "";

    for (let i = 0; i < 10; i++) {
      salida += `${base} x ${i + 1} = ${base * (i + 1)}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    resolve(`Archivo creado exitosamente tabla-${base}.txt`);
  });
};

const crearArchivoAsync = async (base = 5, listar = false, hasta) => {
  try {
    console.log("===================");
    console.log(`    Tabla del ${base}`);
    console.log("===================");

    let salida = "";
    let salida2 = ""

    for (let i = 0; i < hasta; i++) {
      salida += `${base} ${"x".green} ${i + 1} ${"=".green} ${base * (i + 1)}\n`;
      salida2 += `${base} x ${i + 1} = ${base * (i + 1)}\n`;
    }

    if (listar) console.log(salida)

    // console.log(salida);

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida2);

    return `Archivo creado exitosamente tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
  crearArchivoAsync,
};
