import {Button, Input} from "../shared";
import {handleNumbers} from "../shared/lib/index..ts";

function App() {


    return (
        <>
            <Button>click me</Button>
            <Input isValid={true} handleData={handleNumbers}/>
        </>
    )
}

export default App
