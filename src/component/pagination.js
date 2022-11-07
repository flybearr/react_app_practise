import { useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
function Pagination({page,totalPage}) {
    // let location = useLocation();
    // const usp = new URLSearchParams(location.search);
    // console.log(usp.get('page'));
    
//    
//     useEffect(()=>{
    
//   },[location])
    return (
    <>
   <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disabled">
      <a className="page-link">Previous</a>
    </li>
   
   {Array(11).fill(1).map((v,i)=>{
    const classNames = ['page-item']
       const p =page -5 +i;
     
       if(p<1 || p>totalPage) return null;
       if(p===page) classNames.push('active');
       const  link = `?page=${p}`
        return  <li className={classNames.join(' ')} key={p}> 
            <Link className="page-link" to={link}>{p}</Link>
        </li>
   })}

    <li className="page-item">
      {page==51 ?<a className="page-link disabled" href="#">Next</a> : <a className="page-link" href="#">Next</a> }
    </li>
  </ul>
</nav>
    </>
  );
}
export default Pagination;