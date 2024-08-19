import usercontext from "./usercontext";
import { useState } from "react";


function ContextState(props)
{
    
    const [userdata, setUserdata] = useState(null);


    return (
        <usercontext.Provider value={{userdata,setUserdata}}>
            {props.children}
        </usercontext.Provider>
    )
}

export default ContextState ;