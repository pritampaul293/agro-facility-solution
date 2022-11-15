import axios from "axios";

class RestClient {

    static GetRequest(getUrl) {
        return axios.get(getUrl).then(response => {
            return response.data
        }).catch(error => {
            return null;
        })
    }
    static PostRequest = (postURL,postJson)=>{
        
        return axios.post(postURL,postJson)
        .then(res=>{
        //   alert("Saved to db successfully")
            return res;
        })
        .catch(err=>{
            alert("something went wrong in db")
        return null;
        });
    }


}

export default RestClient;