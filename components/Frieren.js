import {StyleSheet, Text, View} from 'react-native';
import {Asset} from "expo-asset";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {FlatList} from "react-native-gesture-handler";
import ZoomableImage from "./commons/ZoomableImage";
import MiniButton from "./commons/MiniButton";
import {useThemeState} from "../contexts/ThemeContext";

export default function Frieren() {
    const {theme} = useThemeState();
    const flatListRef = useRef();
    const [chapter, setChapter] = useState(28);

    useEffect(() => {
        scrollToTop();
    }, [chapter]);

    const scrollToTop = () => {
        flatListRef.current.scrollToOffset({offset: 0, animated: true});
    };

    const getAsset = (chapter, page) => {
        try {
            return Asset.fromURI(`https://cdn.hxmanga.com/file/sworldnoox/sousou-no-frieren/chapter-${chapter}/${page}.webp`);
        } catch (e) {
            console.log(`Error when loading asset with chapter ${chapter} and page ${page}`, e)
        }
    }

    const getAssets = (chapter) => {
        let assets = []
        for (let page = 1; page <= 4; page++) {
            assets.push(getAsset(chapter, page))
        }
        return assets;
    }

    const assets = useMemo(
        () => {
            return getAssets(chapter)
        },
        [chapter]
    );

    return (
        <View style={styles.container}>
            <Text style={[styles.heading, {color: theme.text}]}>
                Frieren
            </Text>
            <View style={{display: "flex", flexDirection: 'row', alignItems: "center"}}>
                <MiniButton iconName={"backward"} callback={() => setChapter(chapter - 1)}></MiniButton>
                <Text
                    style={{marginLeft: 20, marginRight: 20, fontSize: 20, color: theme.text}}>Chapter {chapter}</Text>
                <MiniButton iconName={"forward"} callback={() => setChapter(chapter + 1)}></MiniButton>
            </View>
            <FlatList
                ref={flatListRef}
                showsVerticalScrollIndicator={false}
                data={assets}
                renderItem={({item}) => <ZoomableImage img={item}/>}
                style={{marginTop: 5}}
            />
        </View>
    );
}

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