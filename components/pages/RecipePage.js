import {StyleSheet, Text, View} from 'react-native';
import React from "react";
import {useThemeState} from "../../contexts/ThemeContext";
import {Card, Paragraph, Title} from 'react-native-paper';
import recipeData from "../../data/RecipeData";
import {FlatList} from "react-native-gesture-handler";

export default function RecipePage() {
    const {theme} = useThemeState();

    const renderItem = ({item}) => (
        <Card key={item.id} style={[styles.card, {backgroundColor: theme.primary2}]}>
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
                Recipes (Card Use-case)
            </Text>
            <FlatList
                data={recipeData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
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