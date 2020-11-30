import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { TemplateModal } from 'templates';
import { styles } from './styles';
import { IPayment } from 'types';
import { Processing, Failed, Success } from '../assets';
import { Palette, GRADIENT_COLORS, GRADIENT_RED_COLORS } from 'styles';
import LinearGradient from 'react-native-linear-gradient';
import { TOUCHABLE_OPACITY } from 'const';

interface IOwnProps {
  payment: IPayment;
  paymentIsFetching: boolean;
  paymentIsError: boolean;
  done: () => void;
  doneError: () => void;
}

export function ServicePaymentStatusModalView({
  payment,
  paymentIsFetching,
  paymentIsError,
  done,
  doneError
}: IOwnProps) {
  function renderStatusType() {
    if (paymentIsFetching) {
      return (
        <View style={styles.warning}>
          <View style={styles.topDiv}>
            <Text style={[styles.topText, styles.orange]}>Процесс оплаты</Text>
          </View>

          <View style={styles.imgBox}>
            <Processing />
            <ActivityIndicator style={styles.loader} color={Palette.orange} size='large' animating={true} />
          </View>

          <View style={styles.botDiv}>
            <Text style={[styles.botText, styles.orange]}>Идет обработка данных это
              может занять несколько минут</Text>
          </View>
        </View>
      )
    } else if (!!paymentIsError) {
      return (
        <View style={styles.warning}>
          <View style={styles.topDiv}>
            <Text style={[styles.topText, styles.red]}>Ошибка при оплате</Text>
          </View>

          <View style={styles.imgBox}>
            <Failed />
          </View>

          <View style={styles.botDiv}>
            <Text style={[styles.reasons, styles.red]}>Причины:</Text>
            <View style={styles.reasonsList}>
              <Text style={[styles.botText]}>1. Проверьте вводимые данные</Text>
              <Text style={[styles.botText]}>2. Попробуйте позже</Text>
              <Text style={[styles.botText]}>3. Обратитесь к тех поддержке</Text>
            </View>
            
            <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} onPress={doneError} style={styles.button}>
              <LinearGradient style={styles.buttonInner} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={GRADIENT_RED_COLORS}>
                <Text style={styles.buttonText}>Ок</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      )
    } else if (!!payment) {
      return (
        <View style={styles.warning}>
          <View style={styles.topDiv}>
            <Text style={[styles.topText, styles.green]}>Оплата прошла успешно</Text>
          </View>

          <View style={styles.imgBox}>
            <Success />
          </View>

          <View style={styles.botDiv}>
            <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} onPress={done} style={styles.button}>
              <LinearGradient style={styles.buttonInner} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={GRADIENT_COLORS}>
                <Text style={styles.buttonText}>Ок</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

  return (
    <TemplateModal
      swipeDirection={null}
      visible={true}
      style={styles.modal}
      close={() => null}
    >
      <View style={styles.main}>
        {renderStatusType()}
      </View>
    </TemplateModal>
  )
}