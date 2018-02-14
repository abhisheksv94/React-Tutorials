import axios from 'axios';

const instance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

instance.interceptors.request.use(request=>{
    console.log('In interceptor');
    return request;
});
instance.interceptors.response.use(response=>{
    console.log("In response");
    if(response.data){
        let newResponse={data:[]};
        newResponse.data=response.data.map((eachResponse)=>{
            eachResponse.author=eachResponse.id;
            return eachResponse;
        });
        console.log(newResponse);
        return newResponse;
    }
    return response;
});

export default instance;