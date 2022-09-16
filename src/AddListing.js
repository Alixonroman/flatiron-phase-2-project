import React from "react";

function AddListing({ addNewListing }) {
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        image: e.target.image.value,
        price: e.target.price.value,
        description: e.target.description.value,
        category: e.target.category.value,
      }),
    })
      .then((r) => r.json())
      .then((newListing) => {
        addNewListing(newListing);
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Listing</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Item name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <input type="text" name="description" placeholder="Description" />
        <input type="text" name="category" placeholder="Category" />
        <button type="submit">Add Listing</button>
      </form>
    </div>
  );
}

export default AddListing;
