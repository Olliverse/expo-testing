import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Asset} from "expo-asset";
import React, {useMemo, useState} from "react";
import {FlatList} from "react-native-gesture-handler";
import PropTypes from "prop-types";
import ZoomableImage from "../defaults/ZoomableImage";
import MiniButton from "../defaults/MiniButton";

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
        for (let page = 1; page <= 30; page++) {
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
        <View style={styles.container}>
            <Text style={styles.heading}>
                Frieren
            </Text>
            <View style={{display: "flex", flexDirection: 'row', alignItems: "center"}}>
                <MiniButton iconName={"backward"} callback={() => setChapter(chapter - 1)}></MiniButton>
                <Text style={{marginLeft: 20, marginRight: 20, fontSize: 20}}>Chapter {chapter}</Text>
                <MiniButton iconName={"forward"} callback={() => setChapter(chapter + 1)}></MiniButton>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={assets}
                renderItem={({item}) => <ZoomableImage source={item}/>}
            />
        </View>
    );
}

Frieren.propTypes = {
    horizontalSwipeGesture: PropTypes.object,
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 35
    },
});