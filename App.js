import { Text, TextInput, View, ScrollView } from "react-native";

import styles from "./components/styles";

/* import Date from "./components/Date"; */
import Weekday from "./components/Weekday";
import MoodTracker from "./components/MoodTracker";
import Input from "./components/Input";
import Energi from "./components/Energi";
import ToDo from "./components/ToDo";
import Produktivitet from "./components/Produktivitet";
import Sleep from "./components/Sleep";
import { useState } from "react";

export default function App() {

  const [text, setText] = useState("");

  const handleChangeText = (newText)=> {
    setText(newText);
  }

  return (

    <ScrollView style={styles.container}>
      <View >
        {/* <Date /> */}
      </View>
      <View style={styles.container}>
        <Weekday />
      </View>
      <View style={styles.container}>
        {/* mood tracker */}
        <MoodTracker />
      </View>
      <View style={styles.container}>
        {/* taknemmelig tracker */}
        <Text style={styles.label}>
          3 ting jeg er taknemelig for
        </Text>

        <Input styles={styles.input} />
        <Input />
        <Input />
      </View>
      <View style={styles.container}>
        {/* taknemelig for */}
        <Text style={styles.label}>
          3 ting som har påvirket mig negativt og positivt i dag ?
        </Text>
        <Input />
        <Input />
        <Input />
      </View>
      <View style={styles.container}>
        {/* energi niveau*/}
        <Energi />
      </View>
      <View style={styles.container}>
        {/* To Do*/}
        <ToDo />
      </View>
      <View style={styles.container}>{/* dominerende følelse */}
        <Text style={styles.label}>
         Dagens dominernende følelse
        </Text>
        <Input/>
      </View>
      <View style={styles.container}>{/* produktivitet */}
        <Produktivitet/>
      </View>
      <View style={styles.container}>{/* sleep hours */}
       <Sleep/>

      </View>
    </ScrollView>
  );
}