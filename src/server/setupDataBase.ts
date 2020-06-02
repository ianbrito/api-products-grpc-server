import mongoose from "mongoose";

function setupDataBase() {
  console.debug("[DataBase]: Iniciando");
  
  const { DB_URL } = process.env;

  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("[DataBase]: Pronto");
}

export default setupDataBase;
