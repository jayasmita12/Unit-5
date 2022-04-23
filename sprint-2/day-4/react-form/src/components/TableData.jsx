export const TableData = ({formdata})=>{
    return (
         <div>
          <table>


              <thead>
              <tr>
                  <th>Id</th>
                <th>Username</th>
                <th>Age</th>
                <th>DepartMent</th>
                <th>Salary</th>
                <th>Address</th>
                <th>Marital</th>
              </tr>
              </thead>




              <tbody>
                  {formdata.map((e)=>{
                      return <tr key={e.id}>
                          <td>{e.id}</td>
                          <td>{e.username}</td>
                          <td>{e.age}</td>
                          <td>{e.department}</td>
                          <td>{e.salary}</td>
                          <td>{e.address}</td>
                          <td>{e.marital}</td>
                      </tr>
               
                  })}
                </tbody>



          </table>
       </div>
    )
}