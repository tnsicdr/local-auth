import Express from 'express';
import dotenv from 'dotenv';
import getRoutes from './routes';

class Server {
    public app: Express.Application;

    constructor() {
        this.app = Express();
        this.config();
        this.route();
    }

    private config() {
        this.app.use(Express.json());
        this.app.set('serverPort', process.env.PORT);
    }

    private route() {
        const routes = getRoutes();
        routes.forEach((route) => this.app.use('/auth', route.router));
    }

    public start() {
        const port = this.app.get('serverPort');
        this.app.listen(port, () => {
            console.log(`Started server on port ${port}`);
        }).on(`error`, (err) => {
            console.error(err);
            process.exit(1);
        });
    }
}

// Make sure environment variables are set
dotenv.config();

if (!process.env.PORT) 
    throw new Error('Port is not set.');

const app = new Server();
app.start();