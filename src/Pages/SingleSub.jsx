import { useParams, useLoaderData } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
import PageTitle from "../Components/PageTitle";

const SingleSub = () => {
  const { id } = useParams();
  const services = useLoaderData();
  const service = services.find((item) => item.id === id);

  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewText || !rating || rating < 1 || rating > 5) {
      toast.error("Please enter valid review and rating (1-5).")
      return;
    }
    toast.success("Thanks for your feedback")
    const newReview = {
      text: reviewText,
      rating: Number(rating),
      time: new Date().toLocaleString(),
    };

    setReviews([newReview, ...reviews]);
    setReviewText("");
    setRating("");
  };

  if (!service) return <p className="text-center text-red-500 mt-10">Service not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-8 my-10">
        <PageTitle title={service.name} />
      {/* Banner */}
      <img
        src={service.banner}
        alt={service.name}
        className="w-full h-80 object-cover rounded-lg"
      />

      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold">{service.name}</h2>
          <p className="text-gray-600 mt-1">{service.tech_category}</p>
          <div className="text-sm text-yellow-500 mt-2">
            ⭐ {service.ratings} ({service.number_of_reviews} reviews)
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-semibold text-indigo-600">${service.price}</p>
          <p className="text-sm text-gray-500">Billing: {service.frequency}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-lg">{service.description}</p>

      {/* Features */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Key Features</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {service.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Subscription Benefits</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {service.subscription_benefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Review Form */}
      <form
        onSubmit={handleReviewSubmit}
        className="space-y-4 border-t pt-6 mt-10"
      >
        <h3 className="text-2xl font-semibold">Write a Review</h3>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="w-full border p-3 rounded-md resize-none"
          placeholder="Share your thoughts..."
        />
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full border p-3 rounded-md"
          placeholder="Rating (1 to 5)"
          min="1"
          max="5"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews */}
      {reviews.length > 0 && (
        <div className="mt-10 space-y-4">
          <h3 className="text-xl font-semibold">Customer Reviews</h3>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border p-4 rounded-md bg-gray-50 space-y-1"
            >
              <p className="text-gray-800">{review.text}</p>
              <p className="text-yellow-500 text-sm">⭐ {review.rating}</p>
              <p className="text-gray-400 text-xs">{review.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleSub;
