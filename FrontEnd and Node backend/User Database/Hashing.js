const bcrypt = require('bcrypt')

async function convert(key)
{
    const token = await bcrypt.hash(key,1);
    return token;
}



module.exports = {
    convert
}