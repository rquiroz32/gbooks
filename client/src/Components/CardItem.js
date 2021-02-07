function CardItem(props) {

 
    const viewOnClick = () => {
        window.location.href = props.volumeInfo.previewLink
    }

    const saveOnClick = () =>{
        //need to make api calls to post books to db
    }


    return (
    
        <li className="list-group-item" key = {props.id} data-id ={props.id}>
            {console.log(JSON.stringify(props))}
            <h4>{props.volumeInfo.title}</h4>
           <img src= {!props.volumeInfo.imageLinks.smallThumbnail ? null : props.volumeInfo.imageLinks.smallThumbnail } className="mr-sm-3"/>
           <button type="button" className="ml-sm-3 btn btn-primary" onClick={()=>{viewOnClick()}} >View</button>
           <button type="button" className="ml-sm-3 btn btn-primary">Save</button>
           <br/>
           <br/>
           <p> Written By: {!props.volumeInfo.authors ? null :  props.volumeInfo.authors.length <=1 ? props.volumeInfo.authors.map(author => `${author}`) : props.volumeInfo.authors.map(author => `${author}, `) }</p>
           <br/>
           <p>{props.volumeInfo.description}</p>
         
           
        </li>
    )
}

export default CardItem