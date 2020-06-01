import { loadSync } from "@grpc/proto-loader";

function load(path: string) {
  const packageDefinition = loadSync(path, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });

  return packageDefinition;
}

export default {
  load,
};
