import {Link, useLocation} from 'react-router-dom';
import ToggleButton from './ToggleButton';
import { useContext } from "react";
import ThemeContext, { themes } from "../context/context";
import Authcontext  from "../context/Authcontext";
function Navbar () {
  const location = useLocation();
  const { name: themeName, setTheme } = useContext(ThemeContext);
  const {myAuth,logout} = useContext(Authcontext);
  const seg1 = location.pathname.split('/')[1];
  console.log(seg1);
  const actives = {}
  actives[seg1] = {
    backgroundColor: "lightblue",
    borderRadius: "10px",
  };
    return (
    <>
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" style={actives.list}  to="/list">
                  AB-list
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={actives['list-auth']}  to="/list-auth">
                  AB-list-auth
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={actives.tmp} to="/tmp">
                  tmp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={actives.canvas} to="/canvas">
                canvas
                </Link>
              </li>
             
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
            {myAuth.authorised ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      {myAuth.account}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#" onClick={(e)=>{
                      e.preventDefault();
                      logout();
                    }}>
                      登出
                    </a>
                  </li>
                </>
              ) : (
                <Link className="nav-link" style={actives.login} to="/login">
                  login
                </Link>
              )}
              <li className="nav-item">
                <ToggleButton  texts={['暗','亮']} handler={(i)=>{
                  setTheme(i=== 0 ? themes.dark : themes.light);
                }} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}
export default Navbar ;