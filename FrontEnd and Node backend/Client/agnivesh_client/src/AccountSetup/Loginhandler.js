import axios from 'axios';



async function LoginHandler(user,pass)
{
    
    
    const response = await axios.post('http://localhost:5500/verify',{name:user,password:pass},{
            headers: {
                'Content-Type': 'application/json'
            }
        })
    const data =  response.data;

    return data;
    
}

export {LoginHandler}