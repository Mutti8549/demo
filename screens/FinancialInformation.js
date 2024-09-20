import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Checkbox } from 'react-native-paper';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const FinancialInformation = ({ navigation }) => {
  const [selectedIncomeSource, setSelectedIncomeSource] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [radioValue, setRadioValue] = useState('Yes');
  const [checkedTerms, setCheckedTerms] = useState([false, false, false]);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowDatePicker(Platform.OS === 'ios');
    setMonthlyIncome(currentDate);
  };

  const toggleCheckBox = (index) => {
    const updatedChecks = [...checkedTerms];
    updatedChecks[index] = !updatedChecks[index];
    setCheckedTerms(updatedChecks);
  };

  const formattedDate = monthlyIncome.toLocaleDateString();

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Primary Source of Income *</Text>
      <View style={styles.inputContainer1}>
        <MaterialIcons name="attach-money" size={24} color="#4A90E2" />
        <View style={styles.pickerWrapper}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedIncomeSource(value)}
            items={[
              { label: 'Salary', value: 'salary' },
              { label: 'Business', value: 'business' },
              { label: 'Freelance', value: 'freelance' },
              { label: 'Other', value: 'other' },
            ]}
            placeholder={{ label: 'Select Income Source', value: null }}

          />
        </View>
      </View>


      <Text style={styles.label}>Monthly Income After Taxes *</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="calendar" size={24} color="#4A90E2" />
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
          <Text style={styles.dateInput}>{formattedDate}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={monthlyIncome}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
      </View>

 
      <Text style={styles.label}>Have you declared bankruptcy or filled a Consumer Proposal in last 7 years*</Text>
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity onPress={() => setRadioValue('Yes')} style={styles.radioButton}>
          <View style={radioValue === 'Yes' ? styles.radioButtonSelected : styles.radioButtonUnselected} />
          <Text style={styles.radioText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRadioValue('No')} style={styles.radioButton}>
          <View style={radioValue === 'No' ? styles.radioButtonSelected : styles.radioButtonUnselected} />
          <Text style={styles.radioText}>No</Text>
        </TouchableOpacity>
      </View>

  
      <Text style={styles.label}>Terms and Conditions *</Text>
      {['By submitting this form, I agree and acknowledge that Money Mart may send me additional communications regarding their products', `I consent and authorize Money Mart to obtain my credit report for the purpose of determining eligibility for this loan application. Clicking "Submit" won't affect your credit score.`, 'I agree and consent to the Terms and Conditions....'].map((text, index) => (
        <View key={index} style={styles.checkboxContainer}>
          <Checkbox
            status={checkedTerms[index] ? 'checked' : 'unchecked'}
            onPress={() => toggleCheckBox(index)}
            color="#007AFF"
          />
          <Text style={styles.checkboxText}>{text}</Text>
        </View>
      ))}

 
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
    padding: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
    padding: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  pickerWrapper: {
    flex: 1,
  },
  datePickerButton: {
    flex: 1,
    justifyContent: 'center',
  },
  dateInput: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginLeft: 16,
  },
  radioButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 26,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
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
    borderColor: '#007AFF',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007AFF',
    backgroundColor: 'blue',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  checkboxText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    flex: 1,
    flexShrink: 1,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 38,
    alignItems: 'center',
    marginTop: '22%',
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
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    fontWeight: '500',
  },
});




export default FinancialInformation;
