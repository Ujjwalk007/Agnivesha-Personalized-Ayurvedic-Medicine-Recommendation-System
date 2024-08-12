const exp = require('express')
const { UserData } = require('./DB')
const cors = require('cors')
const { convert } = require('./Hashing')
const bcrypt = require('bcrypt')


const app = exp()

app.use(exp.json());
app.use(cors());

app.post('/adduser',async (req,res)=>{

    const data = req.body;

    

    const existing = await UserData.findOne({"name":data.name});
    const pass = await convert(data.password)

    if(existing)
    res.status(400).send("UserExisting");
    else
    {
        UserData.create({
            name:data.name,
            password:pass,
    
            user_gender:data.user_gender,
            user_age : data.user_age,
            Prakrutii :data.Prakrutii,
            Diabetes : data.Diabetes
    
        }).then(user =>{
            res.status(200).json({"Status":"Success"});
        }).catch(err=>{
            res.status(500).json({"Status":"Error..."})}
        )


    }

})

app.post('/verify',async (req,res)=>{

    const data = req.body;
    const user = data.name;
    const password = data.password;

    const valid = await UserData.findOne({"name":user});

    if(valid)
    {
        if(await bcrypt.compare(password,valid.password))
        res.status(200).json(valid);
        else
        res.status(400).json({"status":"fail"});
    }
    else
    res.status(400).json({"status":"fail"});


})



app.listen(5000)


