// components/RamInfoForm.js
import React, { useState } from "react";

const RamInfoForm = () => {
  const [ramData, setRamData] = useState({
    image: "",
    name: "",
    categoryId: "",
    category: "",
    price: 0,
    status: "",
    rating: 0,
    description: "",
    keyFeatures: [],
    individualRating: 0,
    averageRating: 0,
    reviews: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRamData({
      ...ramData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ramData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="ram-info">
      <h2>RAM Information Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input
            className="border border-black "
            type="text"
            name="image"
            value={ramData.image}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Name:
          <input
            className="border border-black "
            type="text"
            name="name"
            value={ramData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          category
          <input
            className="border border-black "
            type="text"
            name="category"
            value={ramData.category}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Category ID:
          <input
            className="border border-black "
            type="text"
            name="categoryId"
            value={ramData.categoryId}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:
          <input
            className="border border-black "
            type="number"
            name="price"
            value={ramData.price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Status:
          <input
            className="border border-black "
            type="text"
            name="status"
            value={ramData.status}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Rating:
          <input
            className="border border-black "
            type="number"
            name="rating"
            value={ramData.rating}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={ramData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Key Features:
          <ul>
            {ramData.keyFeatures.map((feature, index) => (
              <li key={index}>
                <input
                  className="border border-black "
                  type="text"
                  value={feature}
                  onChange={(e) => {
                    const updatedFeatures = [...ramData.keyFeatures];
                    updatedFeatures[index] = e.target.value;
                    setRamData({ ...ramData, keyFeatures: updatedFeatures });
                  }}
                />
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() =>
                  setRamData({
                    ...ramData,
                    keyFeatures: [...ramData.keyFeatures, ""],
                  })
                }
              >
                Add Feature
              </button>
            </li>
          </ul>
        </label>
        <label>
          Individual Rating:
          <input
            className="border border-black "
            type="number"
            name="individualRating"
            value={ramData.individualRating}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Average Rating:
          <input
            className="border border-black "
            type="number"
            name="averageRating"
            value={ramData.averageRating}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Reviews:
          <ul>
            {ramData.reviews.map((review, index) => (
              <li key={index}>
                <textarea
                  value={review.comment}
                  onChange={(e) => {
                    const updatedReviews = [...ramData.reviews];
                    updatedReviews[index] = { comment: e.target.value };
                    setRamData({ ...ramData, reviews: updatedReviews });
                  }}
                />
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() =>
                  setRamData({
                    ...ramData,
                    reviews: [...ramData.reviews, { comment: "" }],
                  })
                }
              >
                Add Review
              </button>
            </li>
          </ul>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RamInfoForm;
