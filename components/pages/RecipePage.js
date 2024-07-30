import {StyleSheet, Text, View} from 'react-native';
import React from "react";
import {useThemeState} from "../../contexts/ThemeContext";
import {Card, Paragraph, Title} from 'react-native-paper';
import en_recipes from "../../data/en_recipes";
import {FlatList} from "react-native-gesture-handler";
import {useI18NState} from "../../contexts/I18NContext";
import de_recipes from "../../data/de_recipes";

export default function RecipePage() {
    const {language, i18n} = useI18NState()
    const {theme} = useThemeState();

    const recipeItem = ({item}) => (
        <Card key={item.id} style={[styles.card, {backgroundColor: theme.primary3}]}>
            <Card.Cover source={item.image}/>
            <Card.Content>
                <Title>{item.name}</Title>
                <Paragraph>{item.ingredients}</Paragraph>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: theme.text}]}>
                {i18n.t("recipes-title")}
            </Text>
            <FlatList
                data={language === "de" ? de_recipes : en_recipes}
                renderItem={recipeItem}
                contentContainerStyle={styles.flatListContainer}
                showsVerticalScrollIndicator={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: "10%",
    },
    flatListContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    card: {
        marginBottom: 20,
        width: '100%',
    },
});