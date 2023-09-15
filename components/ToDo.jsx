import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import styles from './styles';

const ToDo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (item) => {
    const updatedTasks = tasks.filter((task) => task !== item);
    setTasks(updatedTasks);
  };

  return (
    <View>
      <Text style={styles.label}>Todo List</Text>
      <TextInput
        placeholder="Add a task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add Task" onPress={addTask} color="#B49175"/>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.tasks}>
            <Text style={styles.todoText}>{item}</Text>
            <Button title="Remove" onPress={() => removeTask(item)} color="#B49175" />
          </View>
        )}
      />
    </View>
  )
}

export default ToDo