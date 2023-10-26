import React from "react";

export default class ReviewsPagina extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then(response => response.json())
      .then((result) => {
        console.log(result)
        this.setState({
            reviews: result
        });
      })

    }

    render() {
        return(
                 
            <div className="container mt-2">
            <h2>Reviews</h2>
            <div className="row my-4">
            {this.state.reviews.map((review) => (
             <div className="col-12 bg-light mb-4 py-4"  key={review.id}>
                 <h6>{review.email}</h6>
                 <p>{review.body}</p>
                
               </div>
            ))}
             </div>  
             </div>
        )
    }
}