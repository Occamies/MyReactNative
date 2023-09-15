import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Produktivitet = () => {
  const [productivity, setProductivity] = useState(3);

  const onclickvalue = (value) => {
    setProductivity(value);
  };

  const renderStjerner = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const iconName = i <= productivity ? 'star' : 'star-o';
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => onclickvalue(i)}
          style={styles.starContainer}
        >
          <Icon name={iconName} size={30} color="#FFD700" />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View>
      <Text style={styles.label}>Produktivitet:</Text>
      <View style={styles.optionsContainer}>{renderStjerner()}</View>
    </View>
  );
}

export default Produktivitet