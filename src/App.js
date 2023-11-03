import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Product from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/Card";

function App() {

  const [selectedCategory,setSelectedCategory] =useState(null);
  
  const [query,setQuery]=useState("");
  const handleInputChange= event=>
  {
    setQuery(event.target.value)
  }



  const filteredItem=products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!==-1));

  const handleChange=event=>
  {
    setSelectedCategory(event.target.value);
  }
  const  handleClick=event=>
  {
    setSelectedCategory(event.target.value);
  }


  function filteredData(products,selected,query)
   {
    let filteredProducts=products;

    if(query)
    {
      filteredProducts=filteredItem;
    }

    if(selected)
    {
      filteredProducts=filteredProducts.filter(
        ({category,color,company,newprice,title}) =>
        category===selected || color===selected || company===selected
        || newprice===selected || title===selected);
      }

      return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice})=>{
      <Card
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      />
      });
    }

    const result=filteredData(products,selectedCategory,query)
  return (
    <>
    <Sidebar handleChange={handleChange}/>
    <Navigation/>
    <Recommended/>
    <Product/>
    </>
  );
}
export default App;
