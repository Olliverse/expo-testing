import React from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import PropTypes from "prop-types";
import {Asset} from "expo-asset";

export default function ZoomableImage({source}) {
    return (
        <SafeAreaView>
            <Image
                source={source}
                style={styles.image}
                resizeMode="contain"
            />
        </SafeAreaView>
    );
}

ZoomableImage.propTypes = {
    placeholderImageSource: PropTypes.objectOf(Asset),
};

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: undefined,
        maxHeight: Dimensions.get('window').height,
        aspectRatio: 800/1147,
    },
});
