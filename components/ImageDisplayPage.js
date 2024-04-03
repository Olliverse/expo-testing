import React from 'react';
import Button from "./commons/Button";
import ImageViewer from "./commons/ImageViewer";

const ImageDisplayTemplate = () => {
    return (
        <>
            <ImageViewer img={require("../assets/images/main_image.png")}/>
            <Button label="Choose a photo" style={{marginTop: 20}}/>
            <Button label="Use this photo" style={{marginTop: 5}}/>
        </>
    )
};
export default ImageDisplayTemplate;
