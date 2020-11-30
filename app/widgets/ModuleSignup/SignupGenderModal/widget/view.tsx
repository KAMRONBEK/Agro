import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TemplateModal } from "templates";
import { styles } from './styles';
import { Palette } from 'styles';
import { TOUCHABLE_OPACITY } from 'const';
import { GenderRu, IFieldState, FieldType, Gender } from 'types';

interface IOwnProps {
  isVisible: boolean;
  field: IFieldState<FieldType.Gender, Gender>;
  setGender: (value: Gender) => () => void;
  closeModal: () => void;
}

export function SignupGenderModalView({
  isVisible,
  field,
  setGender,
  closeModal
}: IOwnProps) {
  return (
    <TemplateModal
      visible={isVisible}
      swipeDirection='down'
      style={styles.modal}
      close={closeModal}
      animationIn='slideInUp'
      animationOut='slideOutDown'
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Укажите пол</Text>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <MaterialCommunityIcons name='close' size={28} color={Palette.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={setGender(Gender.Female)} style={styles.button} activeOpacity={TOUCHABLE_OPACITY}>
            <View style={styles.buttonTextBox}>
              <MaterialCommunityIcons name='human-female' size={28} color={Palette.blackText} />
              <Text style={styles.buttonText}>{GenderRu.Female}</Text>
            </View>
            {
              field.value === Gender.Female && <MaterialCommunityIcons name='check' color={Palette.greenAloe} size={24} />
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={setGender(Gender.Male)} style={styles.button} activeOpacity={TOUCHABLE_OPACITY}>
            <View style={styles.buttonTextBox}>
              <MaterialCommunityIcons name='human-male' size={28} color={Palette.blackText} />
              <Text style={styles.buttonText}>{GenderRu.Male}</Text>
            </View>
            {
              field.value === Gender.Male && <MaterialCommunityIcons name='check' color={Palette.greenAloe} size={24} />
            }
          </TouchableOpacity>
        </View>
      </View>
    </TemplateModal>
  )
}