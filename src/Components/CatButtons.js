import { Figure } from "react-bootstrap"

function CatButtons({ name, image }){
    console.log(name)
    
  


    return (
        <Figure>
            <Figure.Image
                src={ image }
                alt="something"
                roundedCircle
                className="mx-5"
                width={200}
                height={180}
            />
            <Figure.Caption className="fs-3 mx-5 text-center mb-5">
                { name }
            </Figure.Caption>
        </Figure> 

    )
}

export default CatButtons