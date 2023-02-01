import "./widgetlg.css";


const WidgetLg = () => {
  const Button = ({type})=>{
    return <button className={type ? type :`widgetLgButton ${type}`}>{type}</button>
  }
  return (
    <div className="widgetlg">
      <h3 className="widgetLgTitle">Latest transctions </h3>
      <table className="widgetLgTable">
        <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTd">Customer </th>
          <th className="widgetLgTd">Date </th>
          <th className="widgetLgTd">Ammount  </th>
          <th className="widgetLgTd">Status  </th>
        </tr>
        </tbody>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetLgImg" />
              <span className="widgetLgName">kawsar firoz </span>
            </td>
            <td className="widgetLgDate">2 Jun 2021 </td>
            <td className="widgetLgAmount">@122.00</td>
            <td className="widgetLgStatus"><Button  type="decline" /></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetLgImg" />
              <span className="widgetLgName">kawsar firoz </span>
            </td>
            <td className="widgetLgDate">2 Jun 2021 </td>
            <td className="widgetLgAmount">@122.00</td>
            <td className="widgetLgStatus"><Button type="Pending" /></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetLgImg" />
              <span className="widgetLgName">kawsar firoz </span>
            </td>
            <td className="widgetLgDate">2 Jun 2021 </td>
            <td className="widgetLgAmount">@122.00</td>
            <td className="widgetLgStatus"><Button type="approved" /></td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default WidgetLg