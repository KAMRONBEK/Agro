import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CodeInput from 'react-native-confirmation-code-input';
import { TemplateModal } from 'templates';
import { styles } from './styles';
import { Palette } from 'styles';
import { TOUCHABLE_OPACITY } from 'const';
import { IFieldState, FieldType, ICreateCard } from 'types';

interface IOwnProps {
  isVisible: boolean;
  createCardIsFetching: boolean;
  createCard: ICreateCard;
  codeField: IFieldState<FieldType.VerificationCode, string>;
  onChange: (value: string) => void;
  closeModal: () => void;
  verifyCard: () => void;
}

export function VerifyCardModalView({
  isVisible,
  createCardIsFetching,
  closeModal,
  createCard,
  onChange,
  codeField,
  verifyCard
}: IOwnProps) {
  console.log(codeField);
  function renderError(value: string, index: number) {
    return <Text key={index} style={styles.error}>{value}</Text>
  }
  
  return (
    <TemplateModal
      swipeDirection='down'
      style={styles.modal}
      visible={isVisible}
      close={closeModal}
      animationIn='slideInUp'
      animationOut='slideOutDown'
      avoidKeyboard={true}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Подтверждение карты</Text>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <MaterialCommunityIcons name='close' size={28} color={Palette.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>SMS код</Text>
            <CodeInput
              className={'border-b'}
              space={20}
              codeLength={5}
              codeInputStyle={styles.input}
              activeColor={Palette.greyBorder}
              placeholderTextColor={Palette.grey}
              inactiveColor={Palette.greyBorder}
              keyboardType="number-pad"
              size={22}
              editable={!createCardIsFetching}
              value={codeField.value}
              inputPosition='center'
              onFulfill={onChange}
            />
          </View>
        </View>
        <View style={styles.errorBox}>
          {codeField.errors.map(renderError)}
        </View>
        <TouchableOpacity onPress={verifyCard} activeOpacity={TOUCHABLE_OPACITY} style={styles.addCardButton}>
          {
            createCardIsFetching ? 
              <ActivityIndicator size='small' color={Palette.white} animating={createCardIsFetching} /> :
              <Text style={styles.addCardButtonText}>Подтвердить</Text>
          }
        </TouchableOpacity>
      </View>
    </TemplateModal>
  )
}