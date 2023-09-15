import React, { useState } from 'react'
import { Text, View, Pressable, TextInput, Platform } from "react-native";
import styles from './style/styles';

import DateTimePicker from "@react-native-community/datetimepicker"


const Date = () => {

  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)


  const toggleDatePicker = ()=> {
    setShowPicker(!showPicker)
  }

  const onChange = ({type}, selectedDate)=>{
    if (type=="set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS ==="android") {
        toggleDatePicker();
        setTodaysDate(currentDate.toDateString())
      }
    } else {
      toggleDatePicker();
    }
  }

  return (
    <View style={styles.container}>
      <Text>
        Date
        {showPicker && (
          <DateTimePicker
            mode="date"
            display='spinner'
            value={date}
            onChange={onChange}

          />
        )
        }

        {!showPicker && (
          <Pressable
          onPress={toggleDatePicker}
          >
  
          <TextInput
          style={styles.input}
          placeholder="mandag"
          value={todaysDate}
          onchangeText={setTodaysDate}
          placeholderTextColor="#11182744"
          editable={false}
          />
          </Pressable>
        )}


      </Text>
    </View>
  )
}

export default Date