import express from 'express';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT || 5000;
  }

  getConnection() {}

  middleware() {}

  routes() {}

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Server running on Port ${this.port}`)
    );
  }
}

export default Server;
