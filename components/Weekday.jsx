import React, { useState } from 'react';
import { View, Text,ScrollView, TouchableOpacity } from 'react-native';

import styles from './styles';


const Weekday = () => {
  const daysOfWeek = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDay(day === selectedDay ? null : day);
  };

  const renderDayButtons = () => {
    return daysOfWeek.map((day) => (
      <TouchableOpacity
        key={day}
        onPress={() => handleDayPress(day)}
        style={[
          styles.dayButton,
          day === selectedDay && styles.selectedButton,
        ]}
      >
        <Text style={styles.font16}>{day}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View>
      <Text style={styles.label}>vælg ugedag:</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewContent}
      >
        {renderDayButtons()}
      </ScrollView>
      <Text style={styles.selectedDayText}>
        valgt dag: {selectedDay || 'None'}
      </Text>
    </View>
  );
}

export default Weekday