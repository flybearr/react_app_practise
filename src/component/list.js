import dayjs from 'dayjs';
function List({rows}) {
  


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">姓名</th>
          <th scope="col">手機</th>
          <th scope="col">Email</th>
          <th scope="col">生日</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((v,i)=>{
            const d = dayjs(v.birthday);
           return <tr key={v.sid}>
                <td>{v.sid}</td>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.mobile}</td>
                <td>{d.isValid() && d.format('YYYY/MM/DD')}</td>
            </tr>
        })}
      </tbody>
    </table>
  );
}

export default List;
