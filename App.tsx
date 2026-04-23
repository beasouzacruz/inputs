import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Image 
          source={require('./assets/sesisenai.png')} 
          style={styles.logo} 
        />

        <View style={styles.form}>

          <Text style={styles.label}>LOGIN:</Text>
          <TextInput 
            placeholder="Insira seu CPF"
            style={styles.input}
          />

          <Text style={styles.label}>SENHA:</Text>
          <TextInput 
            placeholder="Insira sua senha"
            style={styles.input}
            secureTextEntry
          />

          <View style={styles.links}>
            <Text style={styles.link}>cadastrar</Text>
            <Text style={styles.link}>esqueci a senha</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>

        </View>
      </View>

    </View>
  );
}