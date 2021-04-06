import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import ModalHeader from "../components/ModalHeader";
import AppBoldText from '../components/AppBoldText'
const Compensation = ({
  compensationModalVisible,
  setCompensationModalVisible,
  setCompensationType,
}) => {
  const onButtonClick = (clickedButton) => {
    setButtonPressed(clickedButton);
    setButtonTextPressed(clickedButton);
  };
  const [multiSliderValueAnnual, setMultiSliderValueAnnual] = React.useState([
    45000,
    150000,
  ]);
  const [multiSliderValueHourly, setMultiSliderValueHourly] = React.useState([
    18,
    60,
  ]);

  
  const [buttonPressed, setButtonPressed] = useState("annually");
  const [buttonTextPressed, setButtonTextPressed] = useState("annually");
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Modal visible={compensationModalVisible}>

      <View style={styles.sliderSection}>
    
        <ModalHeader  leftIcon="chevron-left" border={1} closeModal={setCompensationModalVisible} screenTitle='Compensation' />

    
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => onButtonClick("annually")}
            style={
              buttonPressed === "annually"
                ? styles.buttonsPressed
                : styles.buttons
            }
          >
            <AppBoldText
              style={
            
                   styles.buttonText
              }
            >
              Annually
            </AppBoldText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick("hourly")}
            style={
              buttonTextPressed === "hourly"
                ? styles.buttonsPressed
                : styles.buttons
            }
          >
            <AppBoldText
              style={
              
                   styles.buttonText
              }
            >
              Hourly
            </AppBoldText>
          </TouchableOpacity>
        </View>

        <View style={styles.sliderContainer}>
          <View>
            <Text>
              {buttonPressed === "annually"
                ? `between $${numberWithCommas(
                    multiSliderValueAnnual[0]
                  )}k and $${numberWithCommas(multiSliderValueAnnual[1])}k/year`
                : `between $${multiSliderValueHourly[0]}/hour and $${multiSliderValueHourly[1]}/hour`}
            </Text>
          </View>

          <MultiSlider 
             markerStyle={{ backgroundColor: "black" }} 
            trackStyle={{ backgroundColor: "#b6b6b6", width: 1 }}
            selectedStyle={{ backgroundColor: "black" }}
            sliderSection={270}
            values={
              buttonPressed === "annually"
                ? [multiSliderValueAnnual[0], multiSliderValueAnnual[1]]
                : [multiSliderValueHourly[0], multiSliderValueHourly[1]]
            }
            sliderLength={345}
            onValuesChange={
              buttonPressed === "annually"
                ? (values)=> setMultiSliderValueAnnual(values)
                : (values) => setMultiSliderValueHourly(values)
            }
            onValuesChangeFinish={(values) => setCompensationType(values)}
            min={buttonPressed === "annually" ? 15000 : 8}
            max={buttonPressed === "annually" ? 200000 : 100}
            step={buttonPressed === "annually" ? 1000 : 2}
            allowOverlap
            snapped
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  
  header:{marginBottom:20},

  sliderSection: {
    flex: 6,
    padding:20,
    alignItems:'center',
    
    
  },
  buttonsContainer: {
    justifyContent:'center',
    flexDirection: "row",
    marginTop:60,
    width:'100%',
    marginBottom: 40,
    
  
  },
  buttons: {
    borderRadius: 30,
    
    width: "49%",
    height: 50,
    margin: 4,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsPressed: {
    borderRadius: 30,
    width: "49%",
    height: 50,
    margin: 4,
    marginBottom: 10,
    backgroundColor: "#f6cffe",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "black", fontSize:20 },

});
export default Compensation;
