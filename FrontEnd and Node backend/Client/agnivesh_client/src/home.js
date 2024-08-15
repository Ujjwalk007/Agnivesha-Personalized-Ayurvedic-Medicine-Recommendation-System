import './home.css'



function Home()
{




    return (<div style={{display:'flex'}}>

        <div style={{height:'100%',display:'flex',justifyContent:'center', alignItems: 'center'}}>
            

            <div className="auth">

                    <label style={{color:'grey',fontSize:'2vh'}}>Welcome!</label><br/>
                    <label style={{fontSize:'3vh',fontWeight:'bold',fontFamily:'Lora'}}>Join the Community</label>

                    <br/><br/><br/>

                    <label style={{fontSize:'2vh',fontWeight:'bold'}}>Email or Username</label><br/>

                    <input tyep='text' 
                    className='inputfield'
                    placeholder='e.g.: elonmusk@facebook.com'
                    >
                    </input>

                    <br/><br/>
                    <label style={{fontSize:'2vh',fontWeight:'bold'}}>Password</label><br/>
                    <input tyep='text' 
                    className='inputfield'
                    placeholder='e.g.: Aezakmi'
                    >
                    </input>

                    <br/><br/>

                    <button type="button" 
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: '#006A4E',
                        color: 'white',
                        width:'90%',
                        borderRadius:'3vh',
                        height: '5vh',
                        fontSize:'2vh'
                    }}
                    className="btn btn-primary"
                    >
                        Login
                    </button>

                    <br/>
                    <label style={{color:'grey',fontSize:'2vh'}}>Not member yet? Sign Up!</label>
                    <a style={{textDecoration:'none',fontSize:'2vh',paddingLeft:'2vh',color:'black'}} href='/signup'>Sign Up </a>





            </div>

        </div>

        <div className='textcol'>

            <div >
                <label style={{color:'white'}}>Discover Ayurveda's</label>
              <label style={{color:'#018749'}}>healing Power</label> 
              <br/>
              <p style={{color:'white',fontSize:'3vh',fontFamily:'Times New Roman'}}>
              Welcome to our Ayurvedic Remedies platform, where ancient wisdom <br/>meets modern solutions.
              <br/>Ayurveda, the "Science of Life," has been a trusted source of holistic <br/> healing for thousands of years.
              Your journey to health and vitality starts here.

               <br/><br/>
              <b>
              Input your details, and let Ayurveda guide you <br/> towards a healthier, happier you.
              </b>
              
              </p>

            </div>
               
            



        </div>




    </div>)
}

export default Home;