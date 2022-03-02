require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
//const { dbUser, dbPassword, dbHost, dbPORT, dbName } = require("./utils");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/todoapp`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});


//conexión heroku
// let sequelize =
//   process.env.NODE_ENV === "production"
//     ? new Sequelize({
//       database: DB_NAME,
//       dialect: "postgres",
//       host: DB_HOST,
//       port: 5432,
//       username: DB_USER,
//       password: DB_PASSWORD,
//       pool: {
//         max: 3,
//         min: 1,
//         idle: 10000,
//       },
//       dialectOptions: {
//         ssl: {
//           require: true,
//           // Ref.: https://github.com/brianc/node-postgres/issues/2009
//           rejectUnauthorized: false,
//         },
//         keepAlive: true,
//       },
//       ssl: true,
//     })
//     : new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/multiserv`, {
//       logging: false,
//       native: false,
//     });

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const {
  Listas,
} = sequelize.models;


//Relaciones

// // Usuarios 
// Usuarios.hasOne(Direcciones);
// Usuarios.hasMany(Servicios);



// Version con firebase
// const firebase = require("firebase-admin");

// const {
//   API_KEY,
//   AUTH_DOMAIN,
//   PROJECT_ID,
//   STORAGE_BUCKET,
//   KEYPATH,
//   MESSAGING_SENDER_ID,
//   APP_ID
// } = process.env;


// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID,
//   appId:APP_ID
// };


// var serviceAccount = require(KEYPATH);

// firebase.initializeApp({
//   firebaseConfig,
//   credential: firebase.credential.cert(serviceAccount)
// }); 

// // const db = firebase.firestore();

// const auth= firebase.auth();

/* 
module.exports = {
  db,
  auth
} */

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,
  //auth // para importart la conexión { conn } = require('./db.js');
};
