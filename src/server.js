import express from 'express';
import cors from 'cors';
import dbConnection from './database/connection.js';
import userRoute from './routes/users.js';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT || 5000;

    this.getConnection();
    this.middleware();
    this.router();
  }

  getConnection() {
    dbConnection();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  router() {
    this.app.use('/users', userRoute);
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Server running on Port ${this.port}`)
    );
  }
}

export default Server;
