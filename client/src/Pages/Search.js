import List from "../Components/List";
import React, {useState} from 'react';
import API from "../util/API";

function Search() {

    const [books, setBook] = useState([{
        id: "lPV1CQAAQBAJ",
        volumeInfo:{
            title: "The Test Book",
            authors: ["Mikael Krogerus","Roman Tschäppeler"],
            description: "An essential library of tests for self-knowledge and success, from the strategic thinking experts behind the international bestseller The Decision Book. Are you clever? Can you self-motivate? Are you creative? How do you handle money? Can you lead others well? With their trademark style and wit, best-selling authors Mikael Krogerus and Roman Tschäppeler present sixty-four tests spanning intelligence and personality type; creativity and leadership skills; fitness and lifestyle; and knowledge and belief. From what you see in a Rorschach test to comparing your workout against a Navy SEAL’s, from EQ to IQ and Myers-Briggs in between, The Test Book offers a panoply of ways to assess yourself and decide what you need to succeed. As Krogerus and Tschäppeler highlight, you can only know whether you have the right skills, the right job, or the right partner when you know where you stand right now. Small enough to fit in your pocket but packed with insight and good humor, The Test Book delivers a quick, fun way to evaluate your life and happiness.",
            imageLinks:{
                smallThumbnail: "http://books.google.com/books/content?id=lPV1CQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
            },
            previewLink:"https://books.google.com/books?id=lPV1CQAAQBAJ&printsec=frontcover&dq=test&hl=&as_pt=BOOKS&cd=1&source=gbs_api#v=onepage&q=test&f=false"
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
            console.log("response data is below \n" + res)
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
            <List key={"SearchResults"} books = {books}/>

        </div>)

}

export default Search;