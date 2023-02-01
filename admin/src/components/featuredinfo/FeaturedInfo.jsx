import "./featuredinfo.css"

const FeaturedInfo = () => {
  return (
    <div className="featured">
      

        {/*  */}
          <div className="featureditem">
              <span className="featuredtitle">Revanue</span>
              <div className="featuredMonyContainer">
                  <span className="featuredMoney">$2,415</span>
                  <span className="featuredMoneyRate">11.4 <i class="fa-solid fa-arrow-down"></i></span>
              </div>
              <span className="featuredSubtitle">Compare to last month .</span>
          </div>
        {/*  */}
          {/*  */}
          <div className="featureditem">
              <span className="featuredtitle">Cost</span>
              <div className="featuredMonyContainer">
                  <span className="featuredMoney">$2,415</span>
                  <span className="featuredMoneyRate">11.4 <i class="fa-solid fa-arrow-down"></i></span>
              </div>
              <span className="featuredSubtitle">Compare to last month .</span>
          </div>
          {/*  */}
          {/*  */}
          <div className="featureditem">
              <span className="featuredtitle">Sales.</span>
              <div className="featuredMonyContainer">
                  <span className="featuredMoney">$2,415</span>
                  <span className="featuredMoneyRate">11.4 <i class="fa-solid fa-arrow-down"></i></span>
              </div>
              <span className="featuredSubtitle">Compare to last month .</span>
          </div>
          {/*  */}
    </div>
  )
}

export default FeaturedInfo