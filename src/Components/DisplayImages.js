


const DisplayImages = ({images}) => {



    return(
        <div>
             {
                  images.map((pic,index) =>{

                    return(
                         <img key={index} src={pic.urls.small} alt={pic.alt_description}/>
                    )
                  })
             }
        </div>
    )
}

export default DisplayImages;