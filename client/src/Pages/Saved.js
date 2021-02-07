import React, {useState, useEffect} from 'react';
import API from "../util/API";
import List from "../Components/List"
import Results from '../Components/Results';

function Saved(){

    const [books, setBook] = useState([{
        id: "",
        volumeInfo:{
            title: "Title",
            description: "placeholder",
            imageLinks:{
                smallThumbnail: "http://books.google.com/books/content?id=DE5qzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
            }
        }     
    }]) 


   

    useEffect(()=>{
        API.getBooks().then(res=>{
            console.log(res)
            setBook(res.data)
        }).catch(err=>console.log(err))
    },[])

    return(
    <div  key={"SavedBooksContainerDiv"} className="container-fluid">        
        <Results  key={"SavedBooks"} books={books} />
    </div>)
}

export default Saved