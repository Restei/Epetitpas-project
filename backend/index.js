const express = require('express');
const cors = require('cors');
const prisma = require('./prismaClient');

const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());


app.post('/api/signin', async (req, res) => {
    const mail = req.body.email;
    const name = req.body.username;
    const data = await prisma.users.findUnique( {where : {email : mail,name : name}});
    if (!data){
        return res.json({datas : null});
    }
    else{
        const safe_data = {id: data.id.toString(), name:data.name, email : data.email};
        return res.json({datas : safe_data });
    }
});


app.post('/api/signup', async (req, res) => {
    const mail = req.body.email;
    const name = req.body.username;
    const data = await prisma.users.findUnique( {where : {email : mail, name : name}});
    if (!data){
        await prisma.users.create({data : {
            name : name,
            email : mail
        }})
    }
    else{
        return res.json({datas : null});
    }
  });


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  