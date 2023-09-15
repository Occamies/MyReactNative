import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1DDC5',
    padding: 20,

  },


  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 40,
    width: "100%",
    textAlign:"center"
  },

  width100: {
    width:"100%"
  },

/* Energy */

  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressBar: {
    width: '80%',
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#B49175',
    borderRadius: 5,
    
  },

  /* todo */

  tasks: {
    marginTop: 10,
  },

  todoText: {
    fontSize: 20
  },
  
  /* sleep */

  optionsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  option: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#B49175',
  },


  marginbottom: {
    marginBottom: 100
  },

  /* Productivity */


  starContainer: {
    marginHorizontal: 5,
  },

  /* weekday */

  dayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  font16: {
    fontSize: 16,
  },


  /* moodtracker */

  moodButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  moodButton: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    flex: 1,
    margin: 1,
  },
  selectedButton: {
    backgroundColor: '#B49175',
  },

});

export default styles;