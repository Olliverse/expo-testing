import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {Gesture, GestureDetector, GestureHandlerRootView, PanGestureHandler, State} from 'react-native-gesture-handler';
import LeftRightSwipe from "./LeftRightSwipe";

const getSubChildren = (children, curPage) => {
    if(children.length === 0) return []
    if (curPage > 1 && curPage < children.length) {
        return children.slice(curPage - 2, curPage);
    } else if (curPage === 1) {
        return children.length > 1 ? children.slice(0, 1) : children[0];
    } else if (curPage === children.length) {
        return children.length > 1 ? children.slice(children.length - 1, children.length) : children[0];
    } else {
        console.log("idfk ", curPage, children);
        return [];
    }
}

const SwipeableView = ({children}) => {
    const [curPage, setCurPage] = useState(1);
    const [childrenToRender, setChildrenToRender] = useState(children.length > 2 ? children.slice(0, 2) : children);

    useEffect(() => {
        setChildrenToRender(getSubChildren(children, curPage));
    }, [curPage]);

    return (
        <LeftRightSwipe children={childrenToRender} currentPage={curPage} setCurrentPage={setCurPage}/>
    );
};

export default SwipeableView;
