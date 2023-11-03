
function Input({handleChange,value,title,name,color}) {
  return (
    <>
    <label className="sidebar-label-container">
    <input  onChange={handleChange}  type="radio" name="test" value={value} name={name}/>
    <span className="checkmark" style={{backgroundColor:color}}></span>{title}
  </label>
    </>
  );
}
export default Input;