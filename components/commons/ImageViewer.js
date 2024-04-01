import React from 'react';
import {Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
import PropTypes from "prop-types";
import {Asset} from "expo-asset";

export default function ImageViewer({ placeholderImageSource, enableZoom }) {
    if (enableZoom) {
        return (
            <ScrollView
                contentContainerStyle={styles.container}
                maximumZoomScale={2.5}
                minimumZoomScale={1}
                bouncesZoom={true}
                centerContent={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <Image
                    source={placeholderImageSource}
                    style={styles.image}
                    resizeMode="contain"
                />
            </ScrollView>
        );
    } else {
        return (
            <Image
                source={placeholderImageSource}
                style={styles.image}
            />
        );
    }
}

ImageViewer.propTypes = {
    placeholderImageSource: PropTypes.any,
    enableZoom: PropTypes.bool,
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: Dimensions.get('window').width,
        height: 450,
        borderRadius: 18,
    },
});
