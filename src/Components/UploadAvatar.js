import React, { useEffect, useState } from "react";
import Avatar from 'react-avatar-edit';

function UploadAvatar() {

    const [ src, setSrc ] = useState('/cat_placeholder.png');
    const [ preview, setPreview ] = useState(null);

    const onCrop = view => {setPreview(view);}
    const onClose = () => {setPreview(null);}

    async function getRandomCatImage() { // i am using await instead of .then because i want the function to return something. if i made another state for the cat i could use then
        try {
            const response = await fetch('https://cataas.com/cat?json=true');
            const data = await response.json(); // this api doesn't return a json unless you add ?json=true to the url
            // im doing additional steps instead of just https://cataas.com/cat to make sure  src and preview get the same image
            return `https://cataas.com/cat/${data._id}`; // assuming the response has a property 'url' containing the image URL
        } catch (error) {
            console.error('Error fetching random cat image:', error);
            return null;
        }
    }

    const setRandomCatImage = async () => {
        const randomCatImageUrl = await getRandomCatImage();
        if (randomCatImageUrl) {
            console.log(randomCatImageUrl)
            setSrc(randomCatImageUrl)
            setPreview(randomCatImageUrl)
        }
    };

    useEffect(()=>{setRandomCatImage()}, []);

    return (
        <div>
            <Avatar
                width={300}
                height={300}
                onCrop={onCrop}
                onClose={onClose}
                src={src}
            />
            <button onClick={setRandomCatImage}>Use a Random Cat</button>
        </div>
    )
}

export default UploadAvatar;