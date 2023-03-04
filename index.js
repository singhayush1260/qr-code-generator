const express=require('express');
const qrCode=require('qrcode');
const PORT=3000;

const app=express();

app.set('view engine','ejs');
app.set('views','views');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render('index')
})

app.post('/scan',(req,res,next)=>{
 const data=req.body.text;
 qrCode.toDataURL(data,(err,src)=>{
    res.render('scan',{qr_code:src});
 })
})

app.listen(PORT,()=>{
    console.log('Server started at PORT ',PORT);
})