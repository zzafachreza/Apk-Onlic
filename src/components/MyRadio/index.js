import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { MyDimensi, colors, fonts } from '../../utils';
import { Icon } from 'react-native-elements';

export default function MyRadio({ label, selected, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
                    {selected && <View style={styles.radioButtonInner} />}
                </View>
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    radioButtonSelected: {
        borderColor: colors.primary,
    },
    radioButtonInner: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: colors.primary,
    },
    label: {
        fontSize: 20,
        fontFamily: fonts.secondary[600],
        color: colors.primary,
    }
});
