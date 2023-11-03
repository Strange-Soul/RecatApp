import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {BsFillBagCheckFill} from 'react-icons/bs';
function Card() {
  return (
    <>
    <section className="card">
      <img className="card-img" src= "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"/>
      <div className="card-details">
        <h3 className="card-title">Shoes</h3>
        <section className="card-reviews">
         <AiFillStar className="ratings-start"/>
         <AiFillStar className="ratings-start"/>
         <AiFillStar className="ratings-start"/>
         <AiFillStar className="ratings-start"/>
         <span className="total-reviews">4</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>$300</del>200
          </div>
          <div className="bag">
          <BsFillBagCheckFill className="bag-icon"/>
          </div>
        </section>
      </div>
      </section>
    </>
  )
}

export default Card;