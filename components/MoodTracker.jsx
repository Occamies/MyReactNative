import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const moods = [
    { name: 'Very Unhappy', icon: 'frown-o', value: 1 },
    { name: 'Unhappy', icon: 'frown-o', value: 2 },
    { name: 'Neutral', icon: 'meh-o', value: 3 },
    { name: 'Happy', icon: 'smile-o', value: 4 },
    { name: 'Very Happy', icon: 'smile-o', value: 5 },
  ];

  const handleMoodPress = (value) => {
    setSelectedMood(value === selectedMood ? null : value);
  };

  const renderMoodButtons = () => {
    return moods.map((mood) => (
      <TouchableOpacity
        key={mood.value}
        onPress={() => handleMoodPress(mood.value)}
        style={[
          styles.moodButton,
          mood.value === selectedMood && styles.selectedButton,
        ]}
      >
        <Icon name={mood.icon} size={35} color="#333" />
       
      </TouchableOpacity>
    ));
  };

  return (
    <View>
      <Text style={styles.label}>Moodtracker</Text>
      <View style={styles.moodButtonsContainer}>{renderMoodButtons()}</View>
    </View>
  );
}

export default MoodTracker