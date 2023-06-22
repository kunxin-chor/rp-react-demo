import {useContext} from 'react';
import { ReviewContext } from './ReviewContext';
import Review from './components/Review';

export default function ShowReviews(props) {
    const context = useContext(ReviewContext);
    return <>
        <h1>Reviews</h1>
        <ul className="list-group">
            {context.reviews.map( (review,index)=>{
                return <li className="list-group-item mb-3" ey={review.id}>
                    <Review review={review}
                            onEdit={()=>{
                                props.onEdit(index)
                            }}
                  />
                </li>
            })}
        </ul>
    </>
}