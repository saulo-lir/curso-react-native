import React, {useState, useEffect} from 'react';
import { Text, View, Button, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    /* Requisições dentro do useEffect são recomendadas que sejam executadas por funções */
    const requestMovies = async () => {
      const request = await fetch('https://api.b7web.com.br/cinema/');
      const json = await request.json();
  
      if(json){
        setMovies(json);
      }

      setLoading(false);
    }

    requestMovies();
  }, []);

  /*
  const handleLoadButton = async () => {
    const request = await fetch('https://api.b7web.com.br/cinema/');
    const json = await request.json();

    if(json){
      setMovies(json);
    }
  }
  */

  return (
    <View style={styles.container}>
      
      {loading &&
        <View style={styles.loadingArea}>
          <ActivityIndicator size="large" color="#FFFFFF"/>
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      }

      {!loading &&
        <>
          {/*<Button title="Carregar Filmes" onPress={handleLoadButton}/>*/}
          <Text style={styles.totalMoviesText}>Total de filmes: {movies.length}</Text>
          <FlatList 
            style={styles.list}
            data={movies}
            renderItem={({item})=>(
              <View style={styles.movieItem}>
                <Image 
                  source={{uri: item.avatar}} 
                  style={styles.movieImage}
                  resizeMode="contain"
                />
                <Text style={styles.movieTitle}>{item.titulo}</Text>
              </View>
            )}
            keyExtractor={item => item.titulo}
          />
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#333'
  },
  totalMoviesText:{
    color: '#FFF',
    fontSize:18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  list:{
    flex:1
  },
  movieItem:{
    marginBottom:30
  },
  movieImage:{
    height:400
  },
  movieTitle:{
    color: '#FFF',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 5
  },
  loadingArea:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  loadingText:{
    color:'#FFF'
  }
});

export default App;