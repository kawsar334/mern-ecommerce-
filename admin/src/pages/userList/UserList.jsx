
import "./userlist.css";

;



const UserList = () => {
  return (
    <div className="userList" >
      <table class="table table-light border ">
        <thead>
          <tr >
            <th scope="col" className="text-center">Id</th>
            <th scope="col" className="text-center">User</th>
            <th scope="col" className="text-center">Email</th>
            <th scope="col" className="text-center">Handle</th>
            <th scope="col" className="text-center">Transaction</th>
            <th scope="col" className="text-center" colSpan={2}>action</th>


          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td><img src="" alt="" className="userIgm" /> <span>kawsar firoz</span></td>
            <td>kawsarfiroz@gmail.com</td>
            <td>Active</td>
            <td className="userTrasaction">$120.00</td>
            <td><a href="/user/id"  className="btn btn-primary mx-1"><i class="fa-regular fa-pen-to-square"></i></a>
              <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>
          
          
         
        </tbody>
      </table>
     
    </div>
  )
}

export default UserList