import { useContext } from 'react';
import { ReviewContext } from './ReviewContext';
import ReviewForm from './components/ReviewForm';

export default function EditReview(props) {
    const context = useContext(ReviewContext);
    // retrieve review I want to edit
    const reviewToEdit = context.reviews[props.index];
    const handleSubmit = (restaurant, review, rating) => {
        context.updateReview(props.index, {
            id: reviewToEdit.id, restaurant, review, rating
        })
        props.changePage("show");
    }
    return <>
        <h1>Edit Review</h1>
        <ReviewForm
            initialRestaurant={reviewToEdit.restaurant}
            initialReview={reviewToEdit.review}
            initialRating={reviewToEdit.rating}
            handleSubmit={handleSubmit}
        />
    </>
}

