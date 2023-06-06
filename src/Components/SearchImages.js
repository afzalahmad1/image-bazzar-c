import React,{useEffect, useState} from 'react';
import axios from 'axios';

const SearchImages = ({addImages}) => {
  const [searchTerm, setSearchTerm] = useState("cat");


  console.log("Search Term",searchTerm)
  

//   console.log("Access Key",process.env.REACT_APP_ACCESS_KEY)

   useEffect(() => {
        getImages()
   },[])


  function getImages(){
         axios.get("https://api.unsplash.com/search/photos", {
             params: {
                client_id : process.env.REACT_APP_ACCESS_KEY,
                query : searchTerm
             }
         })
         .then(response => addImages(response.data.results))
         .catch(error => console.log(error))
           
  }

//   function getImages1(){
//       fetch("https://api.unsplash.com/search/photos", {
//         params: {
//             client_id : process.env.REACT_APP_ACCESS_KEY,
//             query : searchTerm
//          }
//       })

//       .then(response => response.json())
//      .then(data => console.log(data.results))
//      .catch(error => console.log(error))
//   }


  function reset(){
    setSearchTerm("")
    addImages([])
  }

    return(
        <div>
            <input type="text" placeholder="Search Images" 
             onChange={e => setSearchTerm(e.target.value)}
             value={searchTerm}
            />
           
            <button onClick={getImages}>Search</button> 
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default SearchImages;