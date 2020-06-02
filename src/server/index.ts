import setupDataBase from "./setupDataBase";
import setupServer from "./setupServer";

require("dotenv/config");

function main() {
  setupDataBase();
  setupServer();
}

main();
