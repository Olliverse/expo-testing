import React from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet} from 'react-native';
import PropTypes from "prop-types";

/*
* TODO
*  NOT YET IMPLEMENTED.
*  This component may be named Zoomable but zoom is
*  Its kinda hard since its combined with gesture to swipe left/right & up/down
* */
export default function FullWidthImage({img}) {
    return (
        <SafeAreaView>
            <Image
                source={img}
                style={styles.image}
                resizeMode="contain"
            />
        </SafeAreaView>
    );
}

FullWidthImage.propTypes = {
    img: PropTypes.object,
};

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: undefined,
        maxHeight: Dimensions.get('window').height,
        aspectRatio: 800 / 1147,
    },
});
