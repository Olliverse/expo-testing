import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import LeftRightSwipe from "./LeftRightSwipe";


const getSubChildren = (children, currentPage) => {
    if (currentPage > 1 && currentPage < children.length) {
        return [children[currentPage-2], children[currentPage-2], children[currentPage]];
    } else if (currentPage === 1) {
        return [EmptyTemplateView(0), children[0], children[1]]
    } else if (currentPage === children.length) {
        return [children[children.length - 2], children[children.length - 1], EmptyTemplateView(2)];
    } else {
        return [EmptyTemplateView(0), EmptyTemplateView(1), EmptyTemplateView(2)];
    }
}

const getInitialSubChildren = (children, currentPage) => {
    // console.log("init")
    return getSubChildren(children, currentPage);
}

const EmptyTemplateView = (id) => {
    return (<View style={styles.emptyTemplate} key={id}><Text>{id}</Text></View>)
}

const SwipeableView = ({children}) => {
    const childrenArray = React.Children.toArray(children)
    const [currentPage, setCurrentPage] = useState(1);
    const [childrenToRender, setChildrenToRender] = useState(getInitialSubChildren(childrenArray, currentPage));

    useEffect(() => {
        setChildrenToRender(getSubChildren(childrenArray, currentPage));
        console.log(currentPage)
    }, [currentPage]);

    return (
        <LeftRightSwipe
            children={childrenToRender}
            overallChildrenCount={childrenArray.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
    );
};

const styles = StyleSheet.create({
    emptyTemplate: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
});

export default SwipeableView;
