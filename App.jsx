import React from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App() {
  return (
    <>
    <View>

      <View style={{flexDirection:'row'}}>
        <Image style={styles.banner} source={require('./assets/img/bg.jpg')} />
      </View>

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Que hacer en París</Text>

        <ScrollView horizontal >
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad1.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad2.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad3.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad4.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad5.jpg')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  contenedor: {
    marginHorizontal:10
  },
  titulo: {
    color: '#000',
    fontWeight:'bold',
    marginVertical:20,
  },
  ciudad:{
    width:250,
    height:300,
    marginRight:10,
  },

});

export default App;
