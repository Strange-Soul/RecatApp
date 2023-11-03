import Input from "../../components/Input";
import "./Price.css";
function Price({handleChange}) {
    return(
        <div classname="ml">
<h2 classname="sidebar-title price-title">Price</h2>
<label className="sidebar-label-conatiner">
    <input  onChange={handleChange} type="radio" value="" name="test"/>
    <span className="checkmark"></span>All
  </label> 


  <input
  handleChange={handleChange}
  value={50}
  title="$0-50"
  name="test2"
  />

<input
  handleChange={handleChange}
  value={100}
  title="$50-100"
  name="test2"
  />
   <input
  handleChange={handleChange}
  value={150}
  title="$150-200"
  name="test2"
  />
   <input
  handleChange={handleChange}
  value={200}
  title="$200-250"
  name="test2"
  />
        </div>
    );
}

export default Price;