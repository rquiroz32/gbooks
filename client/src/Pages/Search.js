import List from "../Components/List";
import React, {useState, useEeffect} from 'react';
import API from "../util/API";

function Search() {

    const [books, setBook] = useState([{
        id: "",
        volumeInfo:{
            title: "temp",
            description: "placeholder",
            imageLinks:{
                smallThumbnail: "http://books.google.com/books/content?id=DE5qzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
            }
        }
        

    }]) 

    const validateString = (string) => {
        if(!string || string === null || string ===" "){
            alert("please enter in a string")
            return
        }else{
            return string.split(' ').join('') /*encodeURIComponent()*/
        }

    }
    const apiCall = ()=> {
        let  searchTerm = document.getElementById("bookSearch").value
        searchTerm = validateString(searchTerm)
         console.log(searchTerm)
        if (searchTerm===undefined){
            searchTerm=''
        }

        API.searchBooks(searchTerm).then(res=>{
            setBook(res.data.items)
            // console.log(res)
        }).catch((err)=>{
            console.log(err)
            setBook()
        })
    }

    
    



    return (
        <div className="container-fluid">
            <div className="d-flex flex-row justify-content-center ">
                <input className="col-sm-10 ml-md-3" type="text" id="bookSearch" placeholder="Search for books.."></input>
                <button type="Submit" onClick={()=> apiCall()} className="ml-sm-3 btn btn-primary">Submit</button>
            </div>
            <hr />
            <List books = {books}/>

        </div>)

}

export default Search;