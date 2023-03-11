import Annoucement from "../../components/annoucement/Annoucement"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer";

import "./home.scss"
import Newsletter from "../../components/newsletter/Newsletter";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
const Home = () => {


  Swal.fire({
    title: 'Welcom',
    text: '❤',
    imageUrl: 'https://res.cloudinary.com/dmvmzwqkw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1678456845/upload/bvqaqtbivtbgkfy4it91.png',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    timer:2000
  })
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />

    </div>
  )
}

export default Home