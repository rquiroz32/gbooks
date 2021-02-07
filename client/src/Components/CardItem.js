function CardItem(props) {

 
    return (
    
        <li className="list-group-item" dataId ={props.id}>
           <img src= {props.volumeInfo.imageLinks.smallThumbnail} className="mr-sm-3"/>
           Text and some other stuff
           <button type="button" className="ml-sm-3 btn btn-primary">View</button>
           <button type="button" className="ml-sm-3 btn btn-primary">Save</button>
           
        </li>
    )
}

export default CardItem