import React, {useState} from 'react';
import {Alert, StyleSheet, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {useThemeState} from "../../contexts/ThemeContext";
import ImageViewer from "../custom/ImageViewer";
import Button from "../custom/Button";
import {useI18NState} from "../../contexts/I18NContext";

export default function NativeImageSelection() {
    const {i18n} = useI18NState()
    const {theme} = useThemeState();
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
            <Text style={[styles.title, {color: theme.text}]}>Image display and selection (expo-image-picker)</Text>
            <ImageViewer img={selectedImage ? selectedImage : require('../../assets/main_image.png')}/>
            <Button label={i18n.t("choose-photo")} callback={choosePhotoClicked} style={{marginTop: 20}}/>
            <Button label={i18n.t("use-photo")} callback={useThisPhotoClicked} style={{marginTop: 5}}/>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    }
});