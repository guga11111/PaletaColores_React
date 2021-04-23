import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  LogBox,
  SafeAreaView,
} from 'react-native';
import colors from './src/utils/colors';
import Container from './src/components/container.js'

LogBox.ignoreAllLogs();

export default function App() {
  const [contador, setcontador] = useState(null);

  useEffect(
    () => {
      if (contador) {
        ChangeColor();
      } else {
      }
    },
    [contador]
  );

  const ChangeColor = () => {
      setcontador({
        
        //pmensual: mensual.toFixed(2),
      });
    }

  

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Prestamos</Text>
        <Container
          ChangeColor={ChangeColor}
        />
      </SafeAreaView>
    </>
  );
  }
const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});
