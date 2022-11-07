import {Link,useParams} from 'react-router-dom';
function Tmp() {
  const {sid} =useParams();
  return (
    <>
    <h1>tmp  {sid}</h1>
    <div className="container">
        <div>
            <Link to="/tmp/1">1</Link>
          </div>
          <div>
            <Link to="/tmp/2">2</Link>
          </div>
          <div>
            <Link to="/tmp/3">3</Link>
        </div>
       </div>
    </>
  );
}
export default Tmp ;