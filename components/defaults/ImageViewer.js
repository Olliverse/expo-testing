import React from 'react';
import {Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
import PropTypes from "prop-types";

export default function ImageViewer({ placeholderImageSource, enableZoom }) {
    if (enableZoom) {
        return (
            // TODO: diy the zoom
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
    placeholderImageSource: PropTypes.any, // TODO: any ?!
    enableZoom: PropTypes.bool,
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        // TODO: checken, dass es sich anpasst
        width: Dimensions.get('window').width - 1,
        height: 450,
        // width: 320,
        // height: 440,
        borderRadius: 18,
    },
});
