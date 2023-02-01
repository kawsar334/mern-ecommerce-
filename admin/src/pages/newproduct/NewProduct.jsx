import "./newproduct.css"

const NewProduct = () => {
  return (
      <div className="newproduct">
          <h3 className="newUserTitle">New Product </h3>
          <form action="" className="newUserForm">
              <div className="newUserFormLeft">
                  <label htmlFor="name">product name</label>
                  <input type="text" name="name" id="name" placeholder="name" />
                  <label htmlFor="title">title</label>
                  <input type="title" name="title" id="title" placeholder="this is title"
                  />
                  <label htmlFor="phone">Price</label>
                  <input type="text" name="price" id="phone" placeholder="$120" />
              </div>
              <div className="newUserFormRight">
                  <label htmlFor="file">
                      <img src="https://images.pexels.com/photos/14341974/pexels-photo-14341974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Loading..." className="uploadImg" />

                      <i class="fa-solid fa-arrow-up"></i>Upload img </label>
                <input type="file" name="file" id="file" style={{display:"none"}} />
                  <label htmlFor="category">category</label>
                  <input type="category" name="category" id="category" placeholder="category" />
                  <label htmlFor="description"> description</label>
                  <input type="text" name="description" id="descriptions" placeholder="description ." />
                  <div className="genderContainer">
                      <h5>colors:</h5>
                      <input type="radio" name="gender" id="gender" />
                      <label htmlFor="gender">red</label>
                      <input type="radio" name="gender" id="gender" />
                      <label htmlFor="gender">green</label>
                      <input type="radio" name="gender" id="gender" />
                      <label htmlFor="gender">
                          blue
                      </label>

                  </div>
                  <button className="newBtn" >submit</button>
              </div>
          </form>
      </div>
  )
}

export default NewProduct