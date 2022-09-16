import React,{useState} from "react";

function ItemCard({ listings }) {
    const [favorite, setFavorite] = useState(false);
   
    function handleFavoriteClick() {
        setFavorite(!favorite);
    }
    

  return (
    <li className="card">
      <div className="image">
        <span className="price">${listings.price}</span>
        <img src={listings.image} alt={listings.description}  />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick ={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick ={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listings.title}</strong>
        
        {/* <strong>{listings.description}</strong> */}
        <span>  {listings.category}</span>
        <button  className="emoji-button delete">🗑</button>
      </div>
    </li>   
  );}


export default ItemCard;
