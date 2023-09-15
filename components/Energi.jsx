import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import styles from './styles';


const Energi = () => {
  const [percentage, setPercentage] = useState(0);

  const increasePercentage = () => {
    if (percentage < 100) {
      setPercentage(percentage + 10);
    }
  };

  const decreasePercentage = () => {
    if (percentage > 0) {
      setPercentage(percentage - 10);
    }
  };

  return (
    <View>
      <Text style={styles.label}>Energy: {percentage}%</Text>
      <View style={styles.progressBar}>
        <View
          style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: '#FCA00F',
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={decreasePercentage} style={styles.button}>
          <Text>Decrease</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={increasePercentage} style={styles.button}>
          <Text>Increase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Energi