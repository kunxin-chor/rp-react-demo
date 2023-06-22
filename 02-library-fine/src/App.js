
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./Header";
import FineCalculator from "./FineCalculator";

function App() {
  return (
    <>
    <div className="container">
      <Header title="Always Due Library"/>
      <h1>Welcome</h1>
      <p>Welcome to the Always Due Library. if your book is overdue, please calculate the fine</p>
      <FineCalculator/>
    </div>
    </>
  );
}

export default App;
