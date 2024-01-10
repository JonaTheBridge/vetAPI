import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const { MONGO_URL, MONGO_DB_NAME } = process.env;
const configDb = { dbName: MONGO_DB_NAME };

try {
  await mongoose.connect(MONGO_URL, configDb);
  console.log('Conexión a la DB realizada con éxito');
} catch (e) {
  console.error('Error al conectar con la BD');
}
