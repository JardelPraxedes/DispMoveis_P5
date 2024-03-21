import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

export const MainComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <View style={[styles.container,, theme==='dark'? styles.dark : styles.light]}>
      <Text style={the==='dark'? styles.darkText : styles.lightText}>
        O tema atual é: {theme}
      </Text>
      <Button title="Mudar o tema" onPress={toggleTheme}/>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dark: {
    backgroundColor: '#333',
  },
  light: {
    backgroundColor: '#FFF'
  }
  }
  )

export default MainComponent
