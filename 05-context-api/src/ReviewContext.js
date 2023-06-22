import {createContext, useState} from "react";

// create a new context
const ReviewContext = createContext();

const ReviewProvider = (props) => {
    const [reviews, setReviews] = useState([
        { id: 101, restaurant: 'Restaurant A', review: 'Great food!', rating: 5 },
        { id: 102, restaurant: 'Restaurant B', review: 'Good service.', rating: 4 },
      ]);

    const deleteReview = (index) => {
        setReviews([...reviews.slice(0, index), ...reviews.slice(index + 1)])
    }

    const addReview = (review) => {
        setReviews([...reviews, 
            {id: Math.floor(Math.random() * 100000), 
                restaurant: review.restaurant, 
                review: review.review, 
                rating: review.rating }]);
    }

    const updateReview = (index, updatedReview) => {
        setReviews([...reviews.slice(0, index), 
            updatedReview,
      ...reviews.slice(index+1)])
    }

    return (
        // set the context to be an object which contain
        // the reviews itself, and functions to add, update and delete
        <ReviewContext.Provider value={{
            reviews, addReview, updateReview, deleteReview
        }}>
            {props.children}
        </ReviewContext.Provider>
    )
}

export { ReviewContext, ReviewProvider}