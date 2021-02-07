import List from "../Components/List";
import React, {useState} from 'react';
import API from "../util/API";

function Search() {

    const [books, setBook] = useState([{
        id: "7",
        volumeInfo:{
            title: "Deep Six",
            authors: ["Thom E. Gemcity"],
            description: "The year is 2006. L.J. Tibbs is rebellious by nature and scarred by childhood tragedy in the southern community of Specter. An outcast in his own world, he drinks to alleviate the burden of his Messianic complex. The aftermath of one of his hair-raising investigations finds L.J. Tibbs right in the middle of an unspeakable crime that cost a young woman her life. Tibbs finds himself trapped in the underworld of a local crime syndicate which has a need to administer a terrifying revenge on the family members of a rival family. But the revenge they seek is a two-edged sword, and the price is Tibbs\' own sanity as he recklessly pursues his quarry in a chilling, double-twist climax that surpasses anything Gemcity has written before.",
            imageLinks:{
                smallThumbnail: "https://lh3.googleusercontent.com/proxy/rHod6cQgOiZXBT6kjjZqeWq1nP3HU70kd5lf-xJZVK3hj1gWOwnxnQXStwPp6OVJNzD2uQfIyCABqKudiv41RlSbOTYPFMi0F1M_y-e8VQ"
            },
            previewLink:"http://seanmurray-ultima.wifeo.com/mcgee-book.php"
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