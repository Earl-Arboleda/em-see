import "./Login.css"
import Header from "./Header";

const Login = () =>{
    return(
        <div className="loading">
            <Header/>
            <div className="loginForm">
            <input placeholder="Username"></input>
            <input placeholder="Password"></input>
            </div>
        </div>
    );
}
export default Login;