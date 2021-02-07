import axios from "axios";


export default {    
    searchBooks: function(searchTerm){
        return axios.get('/api/search/'+searchTerm);

    }
};