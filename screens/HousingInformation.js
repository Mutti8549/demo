import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const HousingInformation = ({ navigation }) => {
  const [homeAddress, setHomeAddress] = useState('');
  const [ownership, setOwnership] = useState('Rent');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();

    setSelectedDate(currentDate);
  };

  const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : 'Select Date';

  return (
    <View style={styles.container}>

      <Text style={styles.requiredFieldNote}>* Indicates a Required Field</Text>
      
  
      <Text style={styles.sectionTitle}>Home Address</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="home" size={24} color="#4A90E2" />
        <TextInput
          style={styles.input}
          placeholder="26 Money Mart St."
          placeholderTextColor="#A9A9A9"
          value={homeAddress}
          onChangeText={setHomeAddress}
        />
      </View>


      <View style={styles.radioContainer}>
        <Text style={styles.label}>Rent or Own *</Text>
        <View style={styles.radioButtonContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setOwnership('Rent')}
          >
            <View style={ownership === 'Rent' ? styles.radioButtonSelected : styles.radioButtonUnselected} />
            <Text style={styles.radioText}>Rent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setOwnership('Own')}
          >
            <View style={ownership === 'Own' ? styles.radioButtonSelected : styles.radioButtonUnselected} />
            <Text style={styles.radioText}>Own</Text>
          </TouchableOpacity>
        </View>
      </View>
      

      <Text style={styles.sectionTitle}>Monthly Rent/Mortgage Payment *</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="calendar" size={24} color="#4A90E2" />
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text style={styles.dateInput}>{formattedDate} *</Text>
        </TouchableOpacity>
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}


      <Text style={styles.instructionText}>Enter only the portion of the rent that you pay</Text>


      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FinancialInformation')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  requiredFieldNote: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,

  },
  sectionTitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  radioContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    fontWeight: '500',
  },
  radioButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderColor: '#4A90E2',
  },
  radioText: {
    fontSize: 16,
    color: '#333',
  },
  radioButtonUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4A90E2',
    marginRight: 10,
  },
  radioButtonSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4A90E2',
    backgroundColor: 'blue',
    marginRight: 10,
  },
  dateInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  instructionText: {
    fontSize: 14,
    color: '#666',
    marginVertical: 20,

  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 38,
    alignItems: 'center',
    marginTop: '50%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2.65,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HousingInformation;
