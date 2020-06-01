import { Server, ServerCredentials } from "grpc";
import ProductController from "./controller/ProductController";

function setupServer() {
  const server = new Server();

  const productController = new ProductController();
  const productProto = productController.productProto;

  server.addService(productProto.ProductService.service, {
    insert: productController.insert,
    list: productController.list,
  });

  server.bind("0.0.0.0:50051", ServerCredentials.createInsecure());
  console.log("gRPC Server");

  server.start();
}

export default setupServer;
