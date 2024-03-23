import {Animated, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Asset} from "expo-asset";
import React, {useEffect, useMemo, useRef, useState} from "react";
import ImageViewer from "../defaults/ImageViewer";
import {Gesture, GestureDetector, GestureHandlerRootView} from "react-native-gesture-handler";
import PropTypes from "prop-types";

/*
* Uses the following deps:
* - npx expo install expo-asset
* - npx expo install react-native-safe-area-context
* */
const INITIAL_TOP_OFFSET = 30
export default function Frieren({horizontalSwipeGesture}) {
    const [yOffset, setYOffset] = useState(INITIAL_TOP_OFFSET)
    const translateRef = useRef(new Animated.Value(yOffset)).current;

    const performDrawbackAnimation = () => {
        Animated.spring(translateRef, {
            toValue: INITIAL_TOP_OFFSET,
            useNativeDriver: true
        }).start(() => setYOffset(INITIAL_TOP_OFFSET));
    }

    const verticalSwipeGesture = Gesture.Pan()
        .onChange(({changeY}) => {
            setYOffset(yOffset + changeY);
            // console.log(yOffset)
        })
        .onEnd(() => {
            if (yOffset > INITIAL_TOP_OFFSET) {
                performDrawbackAnimation();
            }
        })

    useEffect(() => {
        translateRef.setValue(yOffset);
    }, [yOffset]);

    const gestures = Gesture.Simultaneous(verticalSwipeGesture, horizontalSwipeGesture);

    const getAsset = (chapter, page) => {
        try {
            return Asset.fromURI(`https://cdn.hxmanga.com/file/sworldnoox/sousou-no-frieren/chapter-${chapter}/${page}.webp`);
        } catch (e) {
            console.log(`Error when loading asset with chapter ${chapter} and page ${page}`, e)
        }
    }

    const getAssets = (chapter) => {
        let assets = []
        for (let page = 1; page <= 5; page++) {
            assets.push(getAsset(chapter, page))
        }
        return assets;
    }

    const [chapter, setChapter] = useState(101);

    const assets = useMemo(
        () => {
            console.log("Frieren - Use memo called")
            return getAssets(chapter)
        },
        [chapter]
    );

    return (
        <SafeAreaView>
        {/*<SafeAreaView style={styles.container}>*/}
            <GestureHandlerRootView>
                <GestureDetector gesture={gestures}>
                    <Animated.View style={[
                        styles.scrollDownContainer,
                        {
                            transform: [{translateY: translateRef}],
                        }
                    ]}>
                        <Text style={{fontWeight: "bold", fontSize: 24}}>
                            Frieren Manga
                        </Text>
                        {
                            assets.map(asset =>
                                <ImageViewer placeholderImageSource={asset} key={asset.uri} enableZoom={true}/>
                            )
                        }
                    </Animated.View>
                </GestureDetector>
            </GestureHandlerRootView>
        </SafeAreaView>
    );
}

Frieren.propTypes = {
    horizontalSwipeGesture: PropTypes.object,
};

const styles = StyleSheet.create({
    scrollDownContainer: {
        display: "flex",
        flexDirection: 'column',
    },
});






// const INITIAL_TOP_OFFSET = 30
// export default function Frieren({horizontalSwipeGesture}) {
//     const translateRef = useRef(new Animated.Value(INITIAL_TOP_OFFSET));
//
//     const performDrawbackAnimation = () => {
//         Animated.spring(translateRef.current, {
//             toValue: INITIAL_TOP_OFFSET,
//             bounciness: 40,
//             useNativeDriver: true
//         }).start(result => () => );
//     }
//
//     const verticalSwipeGesture = Gesture.Pan()
//         .onChange(({changeY}) => {
//             translateRef.current.setValue(translateRef.current + changeY)
//         })
//         .onEnd(() => {
//             if (translateRef.current > INITIAL_TOP_OFFSET) {
//                 performDrawbackAnimation();
//             }
//         })