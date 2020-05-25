import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.tela}>
          <Text>Tela de Login</Text>
          <Button
            title="Contatos"
            onPress={() =>
                navigation.navigate('Contatos')
            }
        />
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