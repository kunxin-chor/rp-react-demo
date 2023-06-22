import {useState} from 'react'

export default function ReviewForm(props) {

    const [restaurant, setRestaurant] = useState(props.initialRestaurant ?? "");
    const [review, setReview] = useState(props.initialReview ?? "");
    const [rating, setRating] = useState(props.initialRating ?? 3);

    return (<div>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Restaurant name"
          value={restaurant}
          onChange={(e) => setRestaurant(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Your review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <select
          className="form-control mb-2"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className="btn btn-primary me-2"
          onClick={()=>{
            setRestaurant('');
            setReview('');
            setRating(3);
            props.handleSubmit(restaurant, review, rating)
          }}
        >
         {props.isEditing === false ? 'Create' : 'Update'}
  
        </button>
      </div>)
}