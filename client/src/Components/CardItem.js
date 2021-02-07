import API from "../util/API";

function CardItem(props) {

 
    const viewOnClick = () => {
        window.location.href = props.volumeInfo.previewLink
    }

    const saveOnClick = (props) =>{
        let book = {
            title: props.volumeInfo.title,
            authors: props.volumeInfo.authors,
            description: props.volumeInfo.description,
            image: props.volumeInfo.imageLinks.smallThumbnail,
            link: props.volumeInfo.previewLink
        }
        
        API.postBooks(book).then((res)=>{
            alert(`${book.title} has been successfully saved to your database, please click on Saved to view books you have saved`)

        }).catch(err => {
            alert("Error saving this book to the database, please try saving a different book.")
            console.log(err)})
        //need to make api calls to post books to db
    }


    return (
    
        <li  key = {props.id} className="list-group-item" data-id ={props.id}>
            {console.log(JSON.stringify(props))}
            <h4>{props.volumeInfo.title}</h4>
           <img src= {!props.volumeInfo.imageLinks.smallThumbnail ? null : props.volumeInfo.imageLinks.smallThumbnail } className="mr-sm-3"/>
           <button type="button" className="ml-sm-3 btn btn-primary" onClick={()=>{viewOnClick()}} >View</button>
           <button type="button" className="ml-sm-3 btn btn-primary"onClick={()=>{saveOnClick(props)}} >Save</button>
           <br/>
           <br/>
           <p> Written By: {!props.volumeInfo.authors ? null :  props.volumeInfo.authors.length <=1 ? props.volumeInfo.authors.map(author => `${author}`) : props.volumeInfo.authors.map(author => `${author}, `) }</p>
           <br/>
           <h6>DESCRIPTION:</h6>
           <p>{!props.volumeInfo.description ? "No description can be found on Google Books for this book." : props.volumeInfo.description}</p>        
        </li>
    )
}

export default CardItem