const mon = require('mongoose')

const connection = "mongodb+srv://UK:mongo%40uk@cluster0.awsgmde.mongodb.net/agnivesha"

mon.connect(connection)


const User = mon.Schema({
    name: String,
    password:String,

    user_gender:String,
    user_age : String,
    Prakrutii :String,
    Diabetes : String
})

const UserData = mon.model('UserData',User)



module.exports = {
    UserData
}