import {Button, Input} from "../shared";
import {handleNumbers} from "../shared/lib/index..ts";
import {Exit} from "../widgets";
import {default as Tbank} from "../assets/tbank.svg"
import {Link} from "react-router-dom";


function App() {


    return (
        <>
            <img src={Tbank} alt={"tbank"}></img>
            <Button>click me</Button>
            <Input isValid={true} handleData={handleNumbers}/>
            <Exit/>
            <Link to="/login">Login</Link>
        </>
    )
}

export default App
