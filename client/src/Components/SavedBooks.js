import Saved from "../Pages/Saved";
import API from "../util/API";

function SavedBook(props) {

 
    const viewOnClick = () => {
        window.location.href = props.link
    }

    const delOnClick = (props) =>{
        
       API.deleteBooks(props._id).then(()=>{          
            window.location.reload()
        }).catch(err => console.log(err))
        
    }


    return (
    
        <li className="list-group-item" key = {props.id} data-id ={props.id}>
            {console.log(JSON.stringify(props))}
            <h4>{props.title}</h4>
           <img src= {!props.image ? null : props.image } className="mr-sm-3"/>
           <button type="button" className="ml-sm-3 btn btn-primary" onClick={()=>{viewOnClick()}} >View</button>
           <button type="button" className="ml-sm-3 btn btn-primary"onClick={()=>{delOnClick(props)}} >Delete</button>
           <br/>
           <br/>
           <p> Written By: {!props.authors ? null :  props.authors.length <=1 ? props.authors.map(author => `${author}`) : props.authors.map(author => `${author}, `) }</p>
           <br/>
           <h6>DESCRIPTION:</h6>
           <p>{!props.description ? "No description can be found on Google Books for this book." : props.description}</p>        
        </li>
    )
}

export default SavedBook