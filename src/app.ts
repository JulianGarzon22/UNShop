import express, { Application } from "express";
import IndexRoutes from "./routes/index.routes";
import { chownSync } from "fs";

export class App {
  private app: Application;
  private readonly port: Application;

  constructor() {
    this.app = express();
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.set("port", process.env.PORT || 5000);
    this.port = this.app.get("port");
  }

  routes() {
    this.app.use(IndexRoutes);
  }

  async listen() {
    await this.app.listen(this.port);
    console.log("✅  Server running on port:", this.port);
  }
}
