import List from "../Components/List";
import React, {useState, useEeffect} from 'react';
import API from "../util/API";

function Search() {

    const [books, setBook] = useState("") 


    const apiCall = ()=> {
        API.searchBooks("Harry Potter").then(res=>{
            setBook(res.data.items)
            // console.log(res)
        }).catch(err=>console.log(err))
    }

    




    return (
        <div className="container-fluid">
            <div class="d-flex flex-row justify-content-center ">
                <input className="col-sm-10 ml-md-3" type="text" id="filterSearch" placeholder="Search for books.."></input>
                <button type="Submit" onClick={apiCall}className="ml-sm-3 btn btn-primary">Submit</button>
            </div>
            <hr />
            <List books = {books}/>

        </div>)

}

export default Search;