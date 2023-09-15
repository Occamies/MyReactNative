import React, { useState } from 'react'
import { Text, TextInput, View } from "react-native";

import styles from './styles';


const Input = () => {

  const [text, setText] = useState("");

  const handleChangeText = (newText)=> {
    setText(newText);
  }
  return (
    <View style={styles.width100}>
        <TextInput 
        placeholder="Enter text here"
        value={text}
        onChangeText={handleChangeText}
        style={styles.input}
        />
    </View>
  )
}

export default Input