import { Figure } from "react-bootstrap"

function CatButtons({ name, image, id }){
    console.log(id)
    
  function handleOnClick(){
    console.log("hello")
  }


    return (
        <Figure>
            <a href={`/profile/${id}`}>
                <Figure.Image
                    src={ image }
                    alt="something"
                    roundedCircle
                    className="mx-5"
                    width={200}
                    height={180}
                    onClick ={handleOnClick}
                />
            </a>
            <Figure.Caption className="fs-3 mx-5 text-center mb-5">
                { name }
            </Figure.Caption>
        </Figure> 

    )
}

export default CatButtons