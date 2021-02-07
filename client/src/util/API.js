import axios from "axios";

let options = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export default {    
    searchBooks: function(searchTerm){
        return axios.get('/api/search/'+searchTerm);

    },
    postBooks: function(book){
        return axios.post("/api/books/", book, options)
    },
    getBooks: function(){
        return axios.get('/api/books/')
    },
    deleteBooks: function(book){
        return axios.delete('/api/books/'+ book)
    }
};