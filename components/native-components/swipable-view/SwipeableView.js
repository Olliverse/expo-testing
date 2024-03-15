import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import LeftRightSwipe from "./LeftRightSwipe";


const getSubChildren = (children, curPage) => {
    console.log(`getSubChildren for page ${curPage} all childs ${children.length}`)
    if (curPage > 1 && curPage < children.length) {
        console.log("slicing")
        return children.slice(curPage - 2, curPage);
    } else if (curPage === 1) {
        console.log("add empty at start")
        return children.length > 1 ?
            [EmptyTemplateView(), children[0], children[1]]
            :
            [EmptyTemplateView(), children[0], EmptyTemplateView()];
    } else if (curPage === children.length) {
        console.log("add empty at end")
        return children.length > 1 ?
            [children[children.length - 2], children[children.length - 1], EmptyTemplateView()]
            :
            [EmptyTemplateView(), children[0], EmptyTemplateView()];
    } else {
        console.log("all empty")
        return [EmptyTemplateView(), EmptyTemplateView(), EmptyTemplateView()];
    }
}

const initial = (children, curPage) => {
    console.log("init thing is called")
    return getSubChildren(children, curPage)
}

const EmptyTemplateView = () => {
    return (<View style={styles.emptyTemplate}></View>)
}

const SwipeableView = ({children}) => {
    const childrenArray = React.Children.toArray(children)
    const [currentPage, setCurrentPage] = useState(1);
    const [childrenToRender, setChildrenToRender] = useState(initial(childrenArray, currentPage));

    // useEffect(() => {
    //     // TODO:
    //     setChildrenToRender(getSubChildren(childrenArray, currentPage));
    //     console.log("Looping?")
    // }, [currentPage]);

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
