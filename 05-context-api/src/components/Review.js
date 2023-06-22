export default function Review(props) {
    return (
        <div>
            <strong>{props.review.restaurant}</strong> - {props.review.review} - Rating: {props.review.rating}/5
            <button className="ms-2 btn btn-primary btn-sm" 
                onClick={props.onEdit }>Edit</button>
            <button className="ms-2 btn btn-danger btn-sm"
             onClick={props.onDelete }>Delete</button>
        </div>
    )
}