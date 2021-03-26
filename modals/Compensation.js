import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import ModalHeader from "../components/ModalHeader";
const Compensation = ({
  compensationModalVisible,
  setCompensationModalVisible,
  setCompensation,
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
    
        <ModalHeader rightIcon="chevron-left" leftIcon="check" border={1} closeModal={setCompensationModalVisible} screenTitle='Compensation' />

    
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => onButtonClick("annually")}
            style={
              buttonPressed === "annually"
                ? styles.buttonsPressed
                : styles.buttons
            }
          >
            <Text
              style={
                buttonTextPressed === "annually"
                  ? styles.buttonTextPressed
                  : styles.buttonText
              }
            >
              Annually
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick("hourly")}
            style={
              buttonTextPressed === "hourly"
                ? styles.buttonsPressed
                : styles.buttons
            }
          >
            <Text
              style={
                buttonTextPressed === "hourly"
                  ? styles.buttonTextPressed
                  : styles.buttonText
              }
            >
              Hourly
            </Text>
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
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop:40,
    marginBottom: 40,
  },
  buttons: {
    borderRadius: 30,
    width: "45%",
    height: 50,
    margin: 5,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsPressed: {
    borderRadius: 30,
    width: "45%",
    height: 50,
    margin: 5,
    marginBottom: 10,
    backgroundColor: "#f6cffe",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "black" },
  buttonTextPressed: { color: "white" },
});
export default Compensation;
