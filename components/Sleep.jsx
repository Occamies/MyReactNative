import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

const Sleep = () => {
  const [sleepAmount, setSleepAmount] = useState(null);

  const handleOptionPress = (amount) => {
    setSleepAmount(amount);
  };

  return (
    <View style={styles.marginbottom}>
      <Text style={styles.label}>Mængde af søvn</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            sleepAmount === 4 && styles.selectedOption, // Apply different styles for the selected option
          ]}
          onPress={() => handleOptionPress(4)}
        >
          <Text style={styles.font16}>0-4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            sleepAmount === 6 && styles.selectedOption,
          ]}
          onPress={() => handleOptionPress(6)}
        >
          <Text style={styles.font16}>4-6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            sleepAmount === 8 && styles.selectedOption,
          ]}
          onPress={() => handleOptionPress(8)}
        >
          <Text style={styles.font16}>6-9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            sleepAmount === 10 && styles.selectedOption,
          ]}
          onPress={() => handleOptionPress(10)}
        >
          <Text style={styles.font16}>9-14</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Sleep