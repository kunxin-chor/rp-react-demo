import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './components/Review';
import ReviewForm from './components/ReviewForm';

export default function App() {

  //  create the state variables we need

  const [editIndex, setEditIndex] = useState(-1);  // -1 to mean no review is being edited right now

  const [reviews, setReviews] = useState([
    { id: 101, restaurant: 'Restaurant A', review: 'Great food!', rating: 5 },
    { id: 102, restaurant: 'Restaurant B', review: 'Good service.', rating: 4 },
  ]);

  const handleEdit = (index, review) => {
    // remember the index of the review that we are
    setEditIndex(index);

}

  const handleDelete = (index) => {
    setReviews([...reviews.slice(0, index), ...reviews.slice(index + 1)])
}

 const handleSubmit = (restaurant, review, rating) => {

  // if editIndex is -1 means we are creating
    if (editIndex === -1) {
      setReviews([...reviews, {id: Math.floor(Math.random() * 100000), restaurant, review, rating }]);
    } else {
      // otherwise we are editing
      const oldReview = reviews[editIndex];
      const newReview = {
           id: oldReview.id,
           restaurant: restaurant,
           review: review,
           rating: rating
      }
    
      setReviews([...reviews.slice(0, editIndex), 
                        newReview,
                  ...reviews.slice(editIndex+1)])
    }

    setEditIndex(-1);
  }


  return <>
    <div className="container">
      <h1>Restaurant Reviews with Components</h1>
      <ul className="list-group">
        {
         
          reviews.map((review, index) => <li className="list-group-item" key={review.id}>
            {index === editIndex ? <>
              <h3>Update Review</h3> 
               <ReviewForm
                  initialRestaurant = {review.restaurant}
                  initialReview = {review.review}
                  initialRating = {review.rating}
               />
            </> :
             <Review review={review}
                     key={review.id}
                     onEdit={()=>{
                      handleEdit(index, review)
                     }}
                     onDelete={()=>{
                      handleDelete(index)
                     }}
             />
             
            }
          </li>)
        }
      </ul>

      {
        // only show the form for adding review if no reviews are being edited
          editIndex === -1 ?
                (<div className="mt-3">
                  <h2>Add Review</h2>
                     <ReviewForm handleSubmit={handleSubmit}
                                 isEditing={false}
                     />
                </div>) : null
      }
    </div>
  </>
}