import {FlatList, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Asset} from "expo-asset";
import React, {useMemo, useState} from "react";
import ImageViewer from "../defaults/ImageViewer";

/*
* Uses the following deps:
* - npx expo install expo-asset
* - npx expo install react-native-safe-area-context
* */
export default function Frieren({useScrollView}) {

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
            console.log("Use memo called")
            return getAssets(chapter)
        },
        [chapter]
    );

    return (
        <SafeAreaView style={styles.container}>

            {
                useScrollView ?
                    <FlatList
                        data={assets}
                        renderItem={({item}) => <ImageViewer placeholderImageSource={item} enableZoom={true}/>}
                    />
                    :
                    <ScrollView>
                        {
                            assets.map(asset =>
                                <ImageViewer key={asset} placeholderImageSource={asset} enableZoom={true}/>
                            )
                        }
                    </ScrollView>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center',
    },
});