import {useContext} from 'react';
import { ReviewContext } from './ReviewContext';
import ReviewForm from './components/ReviewForm';

export default function AddReview(props) {

    const context = useContext(ReviewContext);

    const addNewReview = (restaurant, review, rating) => {
        context.addReview({
            restaurant, review, rating
        });
        props.changePage('show');
    }

    return <>
        <h1>Add New Review</h1>
        <ReviewForm handleSubmit={addNewReview}/>
    </>
}