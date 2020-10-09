const fs = require('fs');

var dataEs = require('./es.json');
var dataEn = require('./en.json');
const translate = require('google-translate-open-api');

async function translatetoEn() {
  console.log("**************Traduciendo a ingles***********")
  let total = Object.keys(dataEn).length;
  errors = [];
  let i = 0;

  for (let key in dataEn) {
    try {
      let result = await translate.default(key, {
        to: 'en',
      })
      await waits(100);
      const data = result.data[0];
      dataEn[key] = data;
      i++;
      console.log(i, '/', total, ' : ', Math.floor((i / total) * 100), '%');
    } catch (err) {
      if (err) {
        errors.push({
          item: key,
          code: err.response.status
        })
        await waits(500);
        i++;
        console.log("********Error traduciendo: ", key, ' status: ', err.response.status);
      } else {
        console.log("********Error desconocido: ", );
      }
    }
  }

  fs.writeFileSync('./en_copy.json', JSON.stringify(dataEn, null, 2));
  console.log("Terminado todo el proceso de traducción");
  console.log("Resumen: ");
  console.log("Errores: ", errors.length);
  for (let i = 0; i < errors.length; i++) {
    console.log("Error al traducir ", errors[i].item, ' code:', errors[i].code);
  }
}

async function translatetoEs() {
  console.log("**************Traduciendo a español***********")
  let total = Object.keys(dataEs).length;
  let i = 0;

  for (let key in dataEs) {
    try {
      let result = await translate.default(key, {
        to: 'es',
      })
      await waits(100);
      const data = result.data[0];
      dataEs[key] = data;
      i++;
      console.log("Cambio: ", key + ' , ', data, ' ', i, '/', total, ' : ', Math.floor((i / total) * 100), '%');
    } catch (err) {
      if (err) {
        errors.push({
          item: key,
          code: err.response.status
        })
        await waits(500);
        i++;
        console.log("********Error traduciendo: ", key, ' status: ', err.response.status);
      } else {
        console.log("********Error desconocido: ", );
      }
    }
  }
  fs.writeFileSync('./es_copy.json', JSON.stringify(dataEs, null, 2));
  console.log("Terminado todo el proceso de traducción");
  console.log("Resumen: ");
  console.log("Errores: ", errors.length);
  for (let i = 0; i < errors.length; i++) {
    console.log("Error al traducir ", errors[i].item, ' code:', errors[i].code);
  }
}

function waits(delay = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(true);
    }, delay);
  })
}

translatetoEn();
//translatetoEs();
