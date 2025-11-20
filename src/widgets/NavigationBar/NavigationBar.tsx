import {Link, Outlet} from "react-router-dom";
import {Button} from "../../shared";

function NavigationBar() {
    return (
        <div className={"navbar"}>
            <Link to={"/home"}><Button>Home</Button></Link>
            <Link to={"/about"}><Button>about</Button></Link>
            <Link to={"/other"}><Button>other</Button></Link>
            <Link to={"/sign-in"}><Button>Sign-in</Button></Link>
            <Outlet/>
        </div>
    )
}

export default NavigationBar;