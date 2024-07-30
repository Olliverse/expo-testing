import {StyleSheet, Text, View} from 'react-native';
import {Asset} from "expo-asset";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {FlatList} from "react-native-gesture-handler";
import {useThemeState} from "../../contexts/ThemeContext";
import MiniButton from "../custom/MiniButton";
import FullWidthImage from "../custom/FullWidthImage";

function formatWithLeadingZeros(number, length) {
    return number.toString().padStart(length, '0');
}


export default function MangaPage() {
    const {theme} = useThemeState();
    const flatListRef = useRef();
    const [chapter, setChapter] = useState(111);

    useEffect(() => {
        scrollToTop();
    }, [chapter]);

    const scrollToTop = () => {
        flatListRef.current.scrollToIndex({index: 0, animated: true});
    };


    const getAsset = (chapter, page) => {
        try {
            const url = `https://scans.lastation.us/manga/Sousou-no-Frieren/${formatWithLeadingZeros(chapter, 4)}-${formatWithLeadingZeros(page, 3)}.png`
            return Asset.fromURI(url);
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

    const assets = useMemo(
        () => {
            return getAssets(chapter)
        },
        [chapter]
    );

    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: theme.text}]}>
                Manga Reader (List Use-Case)
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
                renderItem={({item}) => <FullWidthImage img={item}/>}
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    }
});