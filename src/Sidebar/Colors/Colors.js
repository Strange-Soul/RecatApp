import "./Colors.css";
import Input from "../../components/Input";
function Colors({handleChange}) {
  return (
    <>
   <div>
    <h2 className="sidebar-title color-title">Colors</h2>
    <label className="sidebar-label-conatiner">
    <input  onChange={handleChange} type="radio" value="" name="test"/>
    <span className="checkmark"></span>All
  </label> 


  <input
  handleChange={handleChange}
  value="black"
  title="Black"
  name="test1"
  color="black"
  />

<input
  handleChange={handleChange}
  value="blue"
  title="Blue"
  name="test1"
  color="blue"
  />

<input
  handleChange={handleChange}
  value="red"
  title="Red"
  name="test1"
  color="red"
  />

<input
  handleChange={handleChange}
  value="green"
  title="Green"
  name="test1"
  color="green"
  />

<input
  handleChange={handleChange}
  value="white"
  title="White"
  name="test1"
  color="white"
  />


<label className="sidebar-label-container">

  <input 
  type="radio" 
  onChange={handleChange} 
  value="white"
  name="test1"/>

<span className="checkmark" style={{background:"white",border:"2px solid black"}}>

</span>
</label>

   </div>
    </>
  )
}
export default Colors;