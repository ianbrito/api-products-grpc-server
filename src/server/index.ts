import setupServer from "./setupServer";
import setupDataBase from "./setupDataBase";

function main() {
  setupDataBase()
  setupServer();
}

main();
