// import react  from 'react';
import ItemCard from "./ItemCard";
function ClothingContainer({listings, filterData}) {

console.log (listings)

const allListing = listings.map((listings) => {
    return <ItemCard key={listings.id} listings = {listings} filterData= {filterData} />
})
  return (
    <div className="clothingContainer">
    {allListing}
    </div>
  );
}



export default ClothingContainer;