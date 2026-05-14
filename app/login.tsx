import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles';
import { TextInput } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
    <TextInput placeholder="Insira seu CPF" style={styles.input}/>
      <StatusBar style="auto" />
    </View>
  );
}