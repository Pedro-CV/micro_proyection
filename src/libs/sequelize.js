const mongoose = require("mongoose");
const { config } = require("../config/config");
const setupModels = require("./../db/models/index");

// Conexión a la base de datos de MongoDB
mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auth: {
    username: config.dbUser,
    password: config.dbPassword
  }
});

// Obtenemos la instancia de conexión a la base de datos
const db = mongoose.connection;

// Manejo de eventos de conexión
db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", () => {
  console.log("Conexión exitosa a MongoDB");
});

// Carga y configuración de modelos
setupModels(mongoose);

module.exports = db;