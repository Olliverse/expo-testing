import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import PropTypes from "prop-types";

export default function ImageViewer({img}) {
    return <Image
        source={img}
        style={styles.image}
        resizeMode="contain"
    />
}

ImageViewer.propTypes = {
    img: PropTypes.any,
};

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: 450,
        borderRadius: 18,
    },
});
