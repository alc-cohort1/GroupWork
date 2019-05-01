
const express = require('express');

const app = express();


app.get('/' , (req,res) =>{

    return res.status(200).json({message:'hellow world'});

   // return res.status(201).json({message:'created',user})
});
app.listen(3000);

 console.log('your live on port 3000')












