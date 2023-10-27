import "../styles/pageSeven.css";
import employeesicon from "../assets/employees-icon.png";
import clientsIcon from "../assets/clients-icon.png";
import productsicon from "../assets/products-icon.png";
export default function PageSeven()
{
    return(
        <div className="page-seven-wrapper">
        <div id="unit-one">
          <img  src={employeesicon} id='employees-icon'  alt='employees-icon' className="unit-icon"  />
          <div className="unit-count">800+</div>
          <div className="unit-text">Employees</div>
        </div>
        <div id="unit-two">
        <img  src={clientsIcon} id='clents-icon'  alt='clients-icon'  className="unit-icon" />
          <div className="unit-count">100+</div>
          <div className="unit-text">Clients</div>
</div>
<div id="unit-three">
<img  src={productsicon} id='products-icon'  alt='products-icon'  className="unit-icon" />
          <div className="unit-count">200+</div>
          <div className="unit-text">Products</div>
</div>
        </div>
    )
}