const { MongoClient } = require("mongodb");
const Shopping = require("../models/shoppings.model");
const shoppingData = require("./shoppingData");
const { config } = require("../../config/config");

// Función para insertar los datos en la colección shoppings
const seedShoppings = async () => {
  const client = new MongoClient(
    `mongodb://${config.dbHost}:${config.dbPort}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: {
        username: config.dbUser,
        password: config.dbPassword,
      },
    }
  );
  try {
    await client.connect();
    const db = client.db(config.dbName);
    const collection = db.collection("shoppings");
    await collection.deleteMany();
    await collection.insertMany(shoppingData);

    console.log(
      "Seeder ejecutado con éxito. Datos insertados en la colección shoppings."
    );
  } catch (error) {
    console.error("Error al ejecutar el seeder:", error);
  } finally {
    // Cerrar la conexión a la base de datos
    client.close();
  }
};

// Ejecutar el seeder
seedShoppings();
