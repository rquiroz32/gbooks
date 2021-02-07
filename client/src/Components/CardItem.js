import API from "../util/API";

function CardItem(props) {

 
    const viewOnClick = () => {
        window.location.href = props.volumeInfo.previewLink
    }

    const saveOnClick = (props) =>{
        console.log('clicked')
        console.log(props)
        
        let book = {
            title: props.volumeInfo.title,
            authors: props.volumeInfo.authors,
            description: props.volumeInfo.description,
            image: props.volumeInfo.imageLinks.smallThumbnail,
            link: props.volumeInfo.previewLink
        }
        console.log(book)
        API.postBooks(book).then((res)=>{
            console.log('success, response below')
            console.log(res)

        }).catch(err => console.log(err))
        //need to make api calls to post books to db
    }


    return (
    
        <li className="list-group-item" key = {props.id} data-id ={props.id}>
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