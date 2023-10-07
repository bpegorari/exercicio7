import {useState} from 'react';
import { Text, SafeAreaView, StyleSheet,View, Switch, Pressable, TextInput} from 'react-native';
import{Picker} from '@react-native-picker/picker';
import {Slider} from '@miblanchard/react-native-slider';

export default function App() {
const [texto, setTexto]= useState('');
    
   

function exibeTexto(){
  return(
    <View style={{alignItems:'flex-start',}}>
        <Text style={styles.center}>
        Dados Informados :
        </Text>
        <Text>
        Nome: {nome}
        </Text>
        <Text>
        Idade: {idade}
        </Text>
        <Text>
        Sexo: {sexo}
        </Text>
        <Text>
        Escolaridade: {escolaridade}
        </Text>
        <Text>
        Limite: R$ {limite},00
        </Text>
        <Text>
        Brasileiro: {status?'Sim':'Não'}
        </Text>
        <Pressable style={{height: 45,
      backgroundColor:"#ddd",
      margin: 10,
      fontSize: 20,
      padding: 10,
      width:180,
      borderRadius:10,
      color:'#FFF',
      alignItems:'center',
      justifyContent:'center'
      }} onPress={()=>setTexto('')}>
          <Text>
          Limpar
          </Text>
        </Pressable>
                 
      </View>
  );
}



  const [status, setStatus] = useState(false);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo,setSexo] = useState('Masc');
  const [escolaridade, setEscolaridade]= useState('Fundamental');
  const [limite, setLimite] = useState(0.00);
  state = {
        value: 0,
    };
  return (
    <View style={{backgroundColor:'#81a6cc', width:"100%", height:'100%'}}>
        <SafeAreaView style={{marginTop:100, display:'flex',alignItems:'flex-start', marginLeft:50, backgroundColor:''}}>
      <Text >
      Abertura de conta
      </Text>

      <View >
        <Text>
          Nome:  
          <TextInput onChangeText={setNome} style={styles.input} placeholder = '"João da Silva"' placeholderTextColor="#aaa"/>
        </Text>
      </View>

      <View >
        <Text>
          Idade:  
          <TextInput onChangeText={setIdade} style={styles.input} placeholder = '"18"' placeholderTextColor="#aaa"/>
        </Text>
      </View>
      

      <View style={styles.linha} >
      <Text style={styles.label}>
        Sexo
      </Text>
      <Picker onValueChange={setSexo} style={styles.pick}>
        <Picker.Item label="Masc"  />
        <Picker.Item label="Femi"  />
      </Picker>
      </View>

      <View style={styles.linha} >
      <Text style={styles.label}>
        Escolaridade
      </Text>
      <Picker onValueChange={setEscolaridade} style={styles.pick}>
        <Picker.Item label="Fundamental" style={{color:"blue"}} />
        <Picker.Item label="Medio" />
        <Picker.Item label="Superior"  />
        <Picker.Item label="Pos graduação"  />
      </Picker>
      </View>


      <View style={styles.linha}>
      <Text style={styles.label}>
      Limite
      </Text>
      <View style={{width:200}}>
      <Slider maximumValue={5000} step={100}
                    value={limite}
                    onValueChange={setLimite}
                />
      <Text>
      R$ {limite},00
      </Text>
      </View>
      </View>
      

      <View style={styles.linha}>
        <Text style={styles.label}>
        Brasileiro
        </Text>
        <Switch
      value={status}
      onValueChange={ (valorSwitch) => setStatus(valorSwitch) }
      />
      </View>
      <Pressable style={{height: 45,
      backgroundColor:"#ddd",
      margin: 10,
      fontSize: 20,
      padding: 10,
      width:180,
      borderRadius:10,
      color:'#FFF',
      alignItems:'center',
      justifyContent:'center'
      }} onPress={()=>setTexto(exibeTexto)}>
        <Text>
        Confirmar
        </Text>
      </Pressable>
     
      {texto}
      

    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  linha:{
    flexDirection:'row',
    alignItems:'center',
  },
  label:{
    margin:10
  },
  center:{
    alignSelf:'center',
  },
  input:{
    height: 30,
    borderWidth: 1,
    borderColor: '#aaa',
    margin: 10,
    fontSize: 20,
    padding: 10,
    width:180,
    borderRadius:10,
    color:'#000',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#ddd"
    },
    pick:{
      color:'white',
      width:100,
      borderRadius:10, 
      fontSize:13,
      backgroundColor:"#ddd",      
      height:30
    }

  
});

