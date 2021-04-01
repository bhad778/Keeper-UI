import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import ModalHeader from "../components/ModalHeader";
import AppBoldText from '../components/AppBoldText'
const EducationModal = ({
  setEducation,
  educationModalVisible,
  setEducationModalVisible,
}) => {
  const [buttonPressed, setButtonPressed] = useState({
    button1: "",
    button2: "",
    button3: "",
    button4: "",
    button5: ""
  });

  

  const onButtonClick = (clickedButton) => {
    setButtonPressed(clickedButton);
    setEducation(clickedButton);
  };

  return (
    <Modal  animationType="slide" visible={educationModalVisible}>
  
      <View style={styles.educationTypeContainer}>
      <ModalHeader leftIcon="chevron-left"  screenTitle='Education' border={1} closeModal={setEducationModalVisible} />
        <View
          style={styles.buttonsContainer1}
        >

            <TouchableOpacity
              onPress={() => onButtonClick({button1: true})}
              style={
                buttonPressed.button1 == true
                  ? styles.educationButtonsPressed
                  : styles.educationButtons
              }
            >
              <AppBoldText style={styles.buttonText}>GED</AppBoldText>
            </TouchableOpacity>
                     <TouchableOpacity
                     onPress={() => onButtonClick({button2:true})}
                    
                     style={
                       buttonPressed.button2 == true
                         ? styles.educationButtonsPressed
                         : styles.educationButtons
                     }
                   >
                     <AppBoldText style={styles.buttonText}>Associate's</AppBoldText>
                   </TouchableOpacity>
                   </View>
                   <View style={styles.buttonsContainer2}>
                   <TouchableOpacity
                            onPress={() => onButtonClick({button3:true})}
                            
                            style={
                              buttonPressed.button3 == true
                                ? styles.educationButtonsPressed
                                : styles.educationButtons
                            }
                          >
                            <AppBoldText style={styles.buttonText}>Bachelor's</AppBoldText>
                          </TouchableOpacity>
                                   <TouchableOpacity
                                   onPress={() => onButtonClick({button4:true})}
                                
                                   style={
                                     buttonPressed.button4 == true
                                       ? styles.educationButtonsPressed
                                       : styles.educationButtons
                                   }
                                 >
                                   <AppBoldText style={styles.buttonText}>Master's</AppBoldText>
                                 </TouchableOpacity>
                   </View>
                            <View style={styles.buttonsContainer3}>
                            <TouchableOpacity
                                          onPress={() => onButtonClick({button5:true})}
                                    
                                          style={
                                            buttonPressed.button5 == true
                                              ? styles.educationButtonsPressed
                                              : styles.educationButtons
                                          }
                                        >
                                          <AppBoldText style={styles.buttonText}>Doctoral</AppBoldText>
                                        </TouchableOpacity>
<TouchableOpacity
              style={{
                margin: 4,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                height: 50,
                width: "49%",
                borderRadius: 30,
              }}
            ></TouchableOpacity>
                            </View>
                                        
          
        
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  
  educationTypeContainer: { flex: 5, alignItems: "center", padding:20 },
  educationButtonsPressed: {
    margin: 4,
    marginBottom:5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6cffe",
    height: 50,
    width: "49%",

    borderRadius: 30,
  },
  buttonsContainer1:{   width: "100%",
  marginTop: 60,
  flexDirection: "row",
  
  justifyContent: "center",
  alignItems: "center",},
  buttonsContainer2:{width: "100%",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",},
  buttonsContainer3:{width: "100%",
  flexDirection: "row",
  
  justifyContent: "center",
  alignItems: "center",},
  educationButtons: {
    margin: 4,
    marginBottom:5,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "49%",
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
  },
  buttonText:{fontSize:20}
});

export default EducationModal;
