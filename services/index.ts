import moment from 'moment-timezone'
import cors from 'cors'
import morgan, { StreamOptions } from 'morgan'
import appLogger from "../libs/core/logger/AppLogger"
import pokemonapi from '../services/routes/pokemonRoute'
import express, { Express, Request, Response, NextFunction } from 'express'
import next from "next"

moment.tz.setDefault('Asia/Jakarta')

// Override the stream method by telling
// Morgan to use our custom logger instead of the console.log.
const stream: StreamOptions = {
    // Use the http severity
    write: (message) => appLogger.http(message),
  };

// Skip all the Morgan http log if the
// application is not running in development mode.
const skip = () => {
    const env = process.env.NODE_ENV || "development";
    return env !== "development";
  };

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3080;

(async () => {
    try {
        await app.prepare()
        // const backend = express()
        const backend: Express = express();
        // const allowedOrigins = ['http://localhost:3000','http://localhost:3001'];

        // Build the morgan middleware
        const morganMiddleware = morgan(
                // Define message format string (this is the default one).
                // The message format is made from tokens, and each token is
                // defined inside the Morgan library.
                // You can create your custom token to show what do you want from a request.
                ":method :url :status :res[content-length] - :response-time ms",
                // Options: in this case, I overwrote the stream and the skip logic.
                // See the methods above.
                { stream, skip }
        );
        
        backend.use(morganMiddleware);
        backend.use(express.urlencoded({ extended: false }));

        // const options: cors.CorsOptions = {
        //     origin: allowedOrigins
        //   };
        // Set Cors Policy For Access-Control-Allow-Origin from All Host
        backend.use(cors())
        backend.use(express.json())
        
        // backend.all('/api', (req: Request, res: Response) => {
        //     return handle(req, res);
        //   });

        backend.use('/api', (req: Request, res: Response, next: NextFunction) => {
            // set the CORS policy
            res.header('Access-Control-Allow-Origin', '*');
            // set the CORS headers
            res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
            // set the CORS method headers
            if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
                return handle(req, res) //res.status(200).json({});
            }
            next();
        })

        /** Routes */
        backend.use('/pinkemon', pokemonapi)

        /** Error handling */
        backend.use((req, res, next) => {
            const error = new Error('not found');
            return res.status(404).json({
                message: error.message
            });
        });

        /** Server */
        backend.listen(port, (err?: any) => { 
            if (err) throw err;
            console.log(`Pinkemon API listening on port ${port}!`)
        })
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
})()