import { useContext, useEffect, useState } from 'react';
import './recommedation.css'
import axios from 'axios';
import usercontext from '../context/usercontext';



function Upchar()
{
    const cont = useContext(usercontext);
    const [remedy,setremedy] = useState('');

    const PersonData = {

    "Disease_name":cont.userdata.Disease_name,
    "user_gender": cont.userdata.user_gender,
    "user_age": cont.userdata.user_age,
    "Prakrutii" : cont.userdata.Prakrutii,
    "Diabetes": cont.userdata.Diabetes

    }

    useEffect(()=>{


        async function GetRemedy()
        {
            // const reponse = await axios.post('http://localhost:5000/',PersonData,{
            //     headers:{
            //         'Content-Type': 'application/json'
            //     }
            // })

            // const data =  reponse.data.Treatment;
            // setremedy(data);

            try {
                const response = await fetch('http://localhost:5000/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(PersonData)
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
        
                const data = await response.json();
                const remedy = data.Treatment;
                console.log(remedy);
                setremedy(remedy);
        
            } catch (error) {
                console.error('There was an error making the request:', error);
            }
        } 

        GetRemedy();

    },[]);



    return (<div>

        <div className="centerbox">

            <center>
            <label className='title'>Here is Your Ayurvedic remedy!</label>
            </center>

            <div className='lower'>

                    <div >
                        <label style={{marginLeft:'11.5vh',color:'#078D6D',textDecoration:'underline',fontWeight:'bold',fontSize:'3vh'}} >Patient Information</label>
                            <div className='patientInfo'>

                                <div style={{borderRadius:'5vh',padding:'1vh',height:'7vh',width:'100%',backgroundColor:'#078D6D'}}>

                                    <center>
                                    <label style={{color:'white',fontWeight:'bold',fontSize:'3vh'}}>{cont.userdata.name}</label>
                                    </center>

                                </div>

                                <label style={{marginLeft:'2vh',fontSize:'3vh',fontWeight:'bold',color:'grey'}}>Age : </label> <label style={{fontWeight:'bold',fontSize:'3vh',color:'#078D6D'}}>{cont.userdata.user_age} Years</label><br/>
                                <label style={{marginLeft:'2vh',fontSize:'3vh',fontWeight:'bold',color:'grey'}}>Gender : </label> <label style={{fontWeight:'bold',fontSize:'3vh',color:'#078D6D'}}>{cont.userdata.user_gender} </label><br/>
                                <label style={{marginLeft:'2vh',fontSize:'3vh',fontWeight:'bold',color:'grey'}}>Prakruti : </label> <label style={{fontWeight:'bold',fontSize:'3vh',color:'#078D6D'}}>{cont.userdata.Prakrutii} </label><br/>
                                <label style={{marginLeft:'2vh',fontSize:'3vh',fontWeight:'bold',color:'grey'}}>Diabetes : </label> <label style={{fontWeight:'bold',fontSize:'3vh',color:'#078D6D'}}>{cont.userdata.Diabetes} </label><br/>




                            </div>


                    </div>

                    <div className='remedy'>
                            {remedy}
                    </div>



            </div>

            
            


        </div>



    </div>)
}

export default Upchar;