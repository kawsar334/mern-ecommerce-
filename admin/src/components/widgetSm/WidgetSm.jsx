import "./widgetsm.css";


const WidgetSm = () => {
  return (
    <div className="widgetsm">
        <span className="widgetsmtittle">New join Members </span>
        <ul className="widgetSmList">
            <li className="widgetsmlistitem">
                  <img src="https://images.pexels.com/photos/1261819/pexels-photo-1261819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetsmimg" />
                  <div className="widgetSmUser">
                  <span className="widgetsmusername">kawsar firoz </span>
                  <span className="widgetSmTitle">Web developer.</span>
                  </div>
                  <button className="widgetSmButton"><i class="fa-regular fa-eye"></i> display</button>
            </li>

              <li className="widgetsmlistitem">
                  <img src="https://images.pexels.com/photos/1261819/pexels-photo-1261819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetsmimg" />
                  <div className="widgetSmUser">
                      <span className="widgetsmusername">kawsar firoz </span>
                      <span className="widgetSmTitle">Web developer.</span>
                  </div>
                  <button className="widgetSmButton"><i class="fa-regular fa-eye"></i> display</button>
              </li>
             
        </ul>
    </div>
  )
}

export default WidgetSm