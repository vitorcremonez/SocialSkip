import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';



const Card = ({children, noPadding}) => {
    const styles = {
        card: {
            backgroundColor: 'white',
            padding: noPadding ? 0 : 5,
            borderColor: '#DDD',
            borderTopWidth: StyleSheet.hairlineWidth,
            borderBottomWidth: StyleSheet.hairlineWidth,
        },
    };

    return (
        <View style={styles.card}>
            {children}
        </View>
    );
};

export default Card;