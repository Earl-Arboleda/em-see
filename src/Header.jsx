import Sidebar from "./Sidebar";

export default function Header(){
    return(
        <div className="Header">
            <Sidebar/>
            <div className="head">
            <h1>
                EM-See
            </h1>
            </div>
        </div>
    );
}