import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Modal,
  ScrollView,
  Alert,
} from 'react-native';
import { Button, Chip, Card } from 'react-native-paper';

const ProfileViewImages = () => {
  return (
    <Card>
      <Card.Cover
        style={styles.images}
        source={{
          uri:
            'https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg',
        }}
      />
      <Card.Content>
        <View style={styles.chipsContainer}>
          <Chip style={styles.chipsHeight}>5'4"</Chip>
          <Chip style={styles.chipsPersonality}>Big Personality</Chip>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  images: { height: 750, width: 415 },
  chipsContainer: { flexDirection: 'row' },
  chipsHeight: { margin: 10 },
  chipsPersonality: { margin: 10 },
});

export default ProfileViewImages;
