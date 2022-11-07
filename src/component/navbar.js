import {Link, useLocation} from 'react-router-dom';
function Navbar () {
  const location = useLocation();
  const seg1 = location.pathname.split('/')[1];
  console.log(seg1);
  const actives = {
    'list': 'nav-link ',
    'tmp':'nav-link '
  }
  if(actives[seg1]){
    actives[seg1] += 'active';
  }
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
                <Link className={actives.list} to="/list">
                  AB-list
                </Link>
              </li>
              <li className="nav-item">
                <Link className={actives.tmp} to="/tmp">
                  tmp
                </Link>
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