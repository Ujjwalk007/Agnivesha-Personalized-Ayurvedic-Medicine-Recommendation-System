import './header.css'
import logo from './source/logoA.png'


function Header()
{



    return(<div className = 'main'>

        <div>
                <img src={logo} alt='AgniveshLogo' height='120px'/>
        </div>

        <div className='links'>
                <a href='/' className='links'>Home</a>
                <a href ='/aboutus' className='links'>About Us</a>
                <a href ='/myinfo' className='links'>My Info</a>


        </div>

    </div>)
}

export default Header;