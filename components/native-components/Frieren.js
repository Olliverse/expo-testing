import {Animated, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Asset} from "expo-asset";
import React, {useMemo, useState} from "react";
import ImageViewer from "../defaults/ImageViewer";
import {FlatList, Gesture, GestureDetector} from "react-native-gesture-handler";
import PropTypes from "prop-types";

/*
* Uses the following deps:
* - npx expo install expo-asset
* - npx expo install react-native-safe-area-context
* */
export default function Frieren() {
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
            return getAssets(chapter)
        },
        [chapter]
    );

    return (
        <SafeAreaView>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={assets}
                renderItem={({item}) => <ImageViewer placeholderImageSource={item} enableZoom={true}/>}
            />
        </SafeAreaView>
    );
}

Frieren.propTypes = {
    horizontalSwipeGesture: PropTypes.object,
};