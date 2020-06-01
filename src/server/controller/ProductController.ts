import grpc, { Client, GrpcObject, ProtobufMessage } from "grpc";
import path from "path";
import protoLoader from "../../protoLoader";
import Product from "../model/ProductModel";

const PROTO_PATH = path.resolve(
  __dirname,
  "..",
  "..",
  "proto",
  "products.proto"
);

class ProductController {
  productProto: GrpcObject | typeof Client | ProtobufMessage;

  constructor() {
    this.productProto = this.setPackageDefinition();
  }

  private setPackageDefinition() {
    let packageDefinition = protoLoader.load(PROTO_PATH);
    return grpc.loadPackageDefinition(packageDefinition).product;
  }

  async insert(call, callback) {
    const { name, description, pricing } = call.request;

    const product = await Product.create({ name, description, pricing });

    callback(null, { product });
  }

  async list(call, callback) {
    const products = await Product.find();
    callback(null, { products });
  }
}

export default ProductController;
