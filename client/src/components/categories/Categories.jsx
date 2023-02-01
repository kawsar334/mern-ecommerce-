import CatItem from "../categoryItem/CatItem"
import "./categories.scss"
import { categories } from "../../data"

const Categories = () => {
  return (
    <>
    <div className="categories">
        {categories.map((category)=>(
            
            <CatItem category={category} key={category.id} />
            ))}
    </div>

    
    </>
  )
}

export default Categories