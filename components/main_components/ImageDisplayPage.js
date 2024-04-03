import React, { useState } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '../commons/ImageViewer';
import Button from "../commons/Button";

const ImageDisplayTemplate = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const choosePhotoClicked = async () => {
        try {
            const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (!permissionResult.granted) {
                Alert.alert('Permission to access camera roll is required!');
                return;
            }
            const pickerResult = await ImagePicker.launchImageLibraryAsync();
            if (!pickerResult.canceled) {
                setSelectedImage(pickerResult.assets[0]);
            }
        } catch (error) {
            console.log('Error picking an image: ', error);
            Alert.alert('Error picking an image. Please try again later.');
        }
    };

    const useThisPhotoClicked = () => {
        if (selectedImage) {
            // Do something with the selected image
            console.log(selectedImage)
            Alert.alert('Selected image: ' + selectedImage.fileName);
        } else {
            Alert.alert('No image selected!');
        }
    };

    return (
        <>
            <ImageViewer img={selectedImage ? selectedImage : require('../../assets/images/main_image.png')} />
            <Button label="Choose a photo" callback={choosePhotoClicked} style={{ marginTop: 20 }} />
            <Button label="Use this photo" callback={useThisPhotoClicked} style={{ marginTop: 5 }} />
        </>
    );
};

export default ImageDisplayTemplate;
