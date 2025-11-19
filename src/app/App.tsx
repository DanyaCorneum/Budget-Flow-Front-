import {Button, Input} from "../shared";
import {handleNumbers} from "../shared/lib/index..ts";
import {Exit, NavigationBar} from "../widgets";
import {default as Tbank} from "../assets/tbank.svg"


function App() {


    return (
        <>
            <img src={Tbank} alt={"tbank"}></img>
            <Button>click me</Button>
            <Input isValid={true} handleData={handleNumbers}/>
            <Exit/>
            <NavigationBar/>
        </>
    )
}

export default App
