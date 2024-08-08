import express from "express"
import cookieParser from "cookie-parser";
import cors from 'cors'
import baseRoutes from "./routes/index.js";
import customLogger from "./middlewares/custom_logger.js"



const app = express();
const PORT = 3000 //itroduce env later on

const whiteListDomains = ['https://stackoverflow.com', ];

const corsOptions = {
    origin: (origin, callback)=> {
        console.log(origin);
        console.log({origin});
        if(whiteListDomains.indexOf(origin) !== -1 || !origin){
            callback(null, true);
        }
        else{
            callback(new Error('not allowed by cors policy - nj'))
        }
    }
}

app.use(cors(corsOptions)); //everyone on the internet can hit my url


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true }));
app.use(customLogger);

app.use('/', baseRoutes)

app.listen(PORT, ()=>{
    console.log('server listenting at port', PORT)
})