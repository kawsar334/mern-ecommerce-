import "./productlist.css"

const ProductLis = () => {
  return (
    <div className="productlist">
        <h3>product list</h3>
          <table class="table table-light border text-center ">
              <thead>
                  <tr >
                      <th scope="col" className="text-center">Id</th>
                      <th scope="col" className="text-center">name</th>
                      <th scope="col" className="text-center">Title</th>
                      <th scope="col" className="text-center">stock</th>
                      <th scope="col" className="text-center">price</th>
                      <th scope="col" className="text-center" colSpan={2}>action</th>


                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td><img src="" alt="" className="productImg" /> <span>kawsar firoz</span></td>
                      <td>kawsarfiroz@gmail.com</td>
                      <td>Active</td>
                      <td className="userTrasaction">$120.00</td>
                      <td><a href="/product/id" className="btn btn-primary mx-1"><i class="fa-regular fa-pen-to-square"></i></a>
                          <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                      </td>
                  </tr>



              </tbody>
          </table>
    </div>
  )
}

export default ProductLis