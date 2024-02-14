import { Figure } from "react-bootstrap"

function CatButtons({ name, image, id }){

  function handleOnClick(){
    console.log("hello")
  }

    return (
        <Figure>
            <a href={`/profile/${id}`} className='d-flex justify-content-center'>
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
    );
}

export default CatButtons;