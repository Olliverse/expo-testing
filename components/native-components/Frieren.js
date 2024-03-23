import {Animated, FlatList, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Asset} from "expo-asset";
import React, {useMemo, useState} from "react";
import ImageViewer from "../defaults/ImageViewer";
import {Gesture, GestureDetector, GestureHandlerRootView} from "react-native-gesture-handler";
import PropTypes from "prop-types";

/*
* Uses the following deps:
* - npx expo install expo-asset
* - npx expo install react-native-safe-area-context
* */
export default function Frieren({horizontalSwipeGesture}) {
    const verticalSwipeGesture = Gesture.Pan()
    const gestures = Gesture.Simultaneous(verticalSwipeGesture, horizontalSwipeGesture);
    // ComposedGesture.
    const getAsset = (chapter, page) => {
        try {
            return Asset.fromURI(`https://cdn.hxmanga.com/file/sworldnoox/sousou-no-frieren/chapter-${chapter}/${page}.webp`);
        } catch (e) {
            console.log(`Error when loading asset with chapter ${chapter} and page ${page}`, e)
        }
    }

    const getAssets = (chapter) => {
        let assets = []
        for (let page = 1; page <= 2; page++) {
            assets.push(getAsset(chapter, page))
        }
        return assets;
    }

    const [chapter, setChapter] = useState(100);

    const assets = useMemo(
        () => {
            console.log("Frieren - Use memo called")
            return getAssets(chapter)
        },
        [chapter]
    );

    return (
        <SafeAreaView style={styles.container}>
            {
                assets.length > 0 ?
                    <GestureHandlerRootView style={styles.container}>
                        <GestureDetector gesture={gestures}>
                            <Animated.View>
                                {/* Ich werd probably die Flatlist nicht nutzen..*/}
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={assets}
                                    renderItem={({item}) => <ImageViewer placeholderImageSource={item}
                                                                         enableZoom={true}/>}
                                />
                            </Animated.View>
                        </GestureDetector>
                    </GestureHandlerRootView>
                    :
                    // Just here to check out how jsx mapping syntax is
                    <ScrollView>
                        {
                            assets.map(asset =>
                                <ImageViewer key={asset.uri} placeholderImageSource={asset} enableZoom={true}/>
                            )
                        }
                    </ScrollView>
            }
        </SafeAreaView>
    );
}

Frieren.propTypes = {
    horizontalSwipeGesture: PropTypes.object,
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center',
    },
});