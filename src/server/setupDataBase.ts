import mongoose from "mongoose";

function setupDataBase() {
  console.debug("[DataBase]: Iniciando");
  mongoose.connect("mongodb://localhost:27017/grpc_server", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("[DataBase]: Pronto");
}

export default setupDataBase;