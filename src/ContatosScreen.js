import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ContatosScreen() {
    return (
        <View style={styles.tela}>
          <Text>Tela de Contatos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});