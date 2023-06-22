
import { useState } from 'react';
import ShowReviews from "./ShowReviews";
import AddReview from "./AddReview";
import EditReview from "./EditReview";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReviewProvider } from './ReviewContext';
export default function App() {

    const [editIndex, setEditIndex] = useState(-1); 

    const handleEdit = (index) => {
       setEditIndex(index);
       setPage('edit');
    }
    
    const renderPage = () => {
        switch (page) {
            case "show":
                return <ShowReviews onEdit={handleEdit}/>

            case "add":
                return <AddReview changePage={changePage}/>

            case "edit":
                return <EditReview index={editIndex}
                                  changePage={changePage} />
            default:
                return ""


        }
    }

    const [page, setPage] = useState('show');
    const changePage = (newPage) => {
        setPage(newPage)
    }

    return <>

        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={()=>{
                            changePage('show')
                        }}>All Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={()=>{
                            changePage('add')
                        }}>Add New</a>
                    </li>
                </ul>
            </div>

        </nav>

        <div className="container">
            <ReviewProvider>
            {
                renderPage()
            }
            </ReviewProvider>
        </div>
    </>
}