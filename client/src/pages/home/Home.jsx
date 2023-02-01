import Annoucement from "../../components/annoucement/Annoucement"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer";

import "./home.scss"
import Newsletter from "../../components/newsletter/Newsletter";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";

const Home = () => {
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