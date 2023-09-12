import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.get('/api',(req,res)=>{
    res.json({
        data:'Hello World',

    });
});

app.listen(8000,()=>console.log('Server is running on port 8000'));