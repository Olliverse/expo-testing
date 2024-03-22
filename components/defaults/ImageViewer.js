import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';

export default function ImageViewer({ placeholderImageSource, enableZoom }) {
    console.log("Loading image from:", placeholderImageSource);

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
                    resizeMode="contain" // Adjust the image resizing mode as needed
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

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
