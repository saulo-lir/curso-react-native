import React, { useState } from 'react';
import { SafeAreaView, Text, Button, StyleSheet, TextInput } from 'react-native';

const App = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSend = async () => {
    if(title != '' && body != '') {

      const req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 345
        }),
        headers:{
          'Content-Type': 'application/json'
        }
      });

      const json = await req.json();

      alert("ADICIONADO! ID: "+json.id+" - "+json.title);
    } else {
      alert("Preencha as informações.");
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.inputLabel}>Título:</Text>
      <TextInput style={styles.input} value={title} onChangeText={t=>setTitle(t)} />

      <Text style={styles.inputLabel}>Corpo:</Text>
      <TextInput style={styles.input} value={body} onChangeText={t=>setBody(t)} />

      <Button title="Enviar" onPress={handleSend} />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#333',
    padding: 20
  },
  inputLabel:{
    fontSize: 20,
    color: '#FFF',
    marginBottom: 10
  },
  input:{
    backgroundColor: '#555',
    height: 45,
    fontSize: 18,
    color: '#FFF',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 30,
    borderRadius: 5
  }
});

export default App;