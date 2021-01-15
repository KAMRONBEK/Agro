import React, { RefObject } from 'react';
import { View, Text, Dimensions, ImageBackground, TouchableOpacity, ScrollViewProps, ActivityIndicator } from 'react-native';
import Carousel, { CarouselStatic } from 'react-native-snap-carousel';
// import Switch from 'react-native-switch-pro';
import { styles } from './styles';
import { ICard, IActiveCard, ICardBalance } from 'types';
import { TOUCHABLE_OPACITY_2, TOUCHABLE_OPACITY } from 'const';
import { AddCardLogo, Reload, Waves, VisaBgAgroLogo, AgroLogo, Visa, Uzcard, VisaColor } from '../assets';
import { IAddCard } from './types';
import { Palette } from 'styles';
import { TextInputMask } from 'react-native-masked-text';
import { BlurView } from "@react-native-community/blur";
import moment from 'moment';
import { strings } from "locales/i18n";

interface IOwnProps {
  carouselRef: RefObject<Carousel<any>> & RefObject<ScrollViewProps> & RefObject<CarouselStatic<any>>;
  activeCard: IActiveCard;
  cards: (ICard | IAddCard)[];
  activeCardTitle: string;
  cardsBalance: ICardBalance[];
  cardsBalanceIsFetching: boolean;
  changeVisaVirtualStatusIsFetching: boolean;
  onSnapToItem: (index: number) => void;
  openAddModal: () => void;
  getCardsBalance: () => void;
  onValueChange: (value: boolean) => void;
}

export function CardsView({
  activeCard,
  carouselRef,
  cards,
  activeCardTitle,
  cardsBalance,
  cardsBalanceIsFetching,
  changeVisaVirtualStatusIsFetching,
  onSnapToItem,
  openAddModal,
  getCardsBalance,
  onValueChange
}: IOwnProps) {
  function renderUzcardBalance({ svgate }: ICard) {
    const cardBalanceData = cardsBalance?.find(cardBalance => cardBalance.id === svgate);
    const balance = String(cardBalanceData?.balance);
    const formatedBalance = !!balance && balance.length > 3 ? balance.slice(0, balance.length - 2) : balance;

    return (
      <View style={styles.balanceBox}>
        <TextInputMask
          type={'money'}
          options={{
            precision: 0,
            separator: ' ',
            delimiter: ' ',
            unit: '',
            suffixUnit: ''
          }}
          editable={false}
          value={formatedBalance}
          style={styles.balance}
        />

        <Text style={styles.balanceCurrency}>{strings('som')}</Text>

        {
          cardsBalanceIsFetching ?
            <ActivityIndicator animating={cardsBalanceIsFetching} size='small' color={Palette.white} /> :
            <TouchableOpacity onPress={getCardsBalance} style={styles.reloadButton} activeOpacity={TOUCHABLE_OPACITY}>
              <Reload />
            </TouchableOpacity>
        }
      </View>
    )
  }

  function renderVisaBalance({ visa_balance }: ICard) {
    const { avaiL_AMOUNT } = visa_balance;

    return (
      <View style={styles.visaBalanceBox}>
        <Text style={[styles.balanceCurrency, styles.balanceUSDCurrency]}>$</Text>

        <TextInputMask
          type={'money'}
          options={{
            precision: 0,
            separator: ' ',
            delimiter: ' ',
            unit: '',
            suffixUnit: ''
          }}
          editable={false}
          value={avaiL_AMOUNT}
          style={styles.visaBalance}
        />

        {
          cardsBalanceIsFetching ?
            <ActivityIndicator animating={cardsBalanceIsFetching} size='small' color={Palette.white} /> :
            <TouchableOpacity onPress={getCardsBalance} style={styles.reloadButton} activeOpacity={TOUCHABLE_OPACITY}>
              <Reload />
            </TouchableOpacity>
        }
      </View>
    )
  }

  function renderUzcardExpireDate({ expire_date }: ICard) {
    const formatedExpire = expire_date?.slice(0,2) + '/' + expire_date?.slice(2, expire_date.length);

    return <Text style={styles.cardExpire}>{formatedExpire}</Text>;
  }

  function renderVisaExpireDate({ expire_date }: ICard) {
    const formatedExpire = moment(expire_date).format('MM/YY');

    return <Text style={styles.visaCardExpire}>{formatedExpire}</Text>;
  }

  function renderExpiredCardLayout(card_number: string) {
    return (
      <BlurView
        style={styles.blur}
        blurType="dark"
        blurAmount={3}
        blurRadius={5}
      >
        <Text style={styles.blurText}>{strings('visaCardExpired')}</Text>

        <View style={styles.blurCardNumberBox}>
          <VisaColor />
          <TextInputMask
            type={'custom'}
            options={{
              mask: '****   ****   ****   ****',
            }}
            editable={false}
            value={card_number}
            style={styles.blurVisaCardNumber}
          />
        </View>

        <TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.blurButton}>
          <Text style={styles.blurButtonText}>{strings('openAgain')}</Text>
        </TouchableOpacity>
      </BlurView>
    )
  }

  function renderUzCard(item: ICard) {
    const { card_number } = item;
    
    return (
      <ImageBackground style={styles.cardBg} resizeMode='stretch' source={require('../assets/CardBg/CardBg1.png')}>
        <View style={styles.cardContent}>
          <View style={styles.cardContentTop}>
            <Uzcard />
          </View>
          {renderUzcardBalance(item)}
          <View style={styles.cardData}>
            <TextInputMask
              type={'custom'}
              options={{
                mask: '**** **** **** ****'
              }}
              editable={false}
              value={card_number}
              style={styles.cardNumber}
            />
            {renderUzcardExpireDate(item)}
          </View>
        </View>
      </ImageBackground>
    )
  }

  function renderVisaCard(item: ICard) {
    const { card_number, visa_info, } = item;
    const { statuS1 } = visa_info;
    
    return (
      <View style={[styles.cardBg, styles.visaCardBg]}>
        { statuS1 === "2" && renderExpiredCardLayout(card_number) }
        <View style={styles.visaWaves}>
          <Waves />
        </View>
        <View style={styles.agroBgLogo}>
          <VisaBgAgroLogo />
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardContentTop}>
            <AgroLogo />
            <View>
              <Text style={styles.virtualTitle}>Virtual</Text>
              <View style={styles.switchContainer}>
                { changeVisaVirtualStatusIsFetching && <ActivityIndicator size='small' color={Palette.white} animating={changeVisaVirtualStatusIsFetching} /> }
                <Text style={styles.switchTitle}>{statuS1 === '0' ? strings('activated'): strings('deactivated')}</Text>
                {/* <Switch 
                  value={statuS1 === '0' ? true : false}
                  onAsyncPress={onValueChange}
                  style={styles.switch}
                /> */}
              </View>
            </View>
          </View>
          <View style={styles.visaCardData}>
            {renderVisaExpireDate(item)}
            <TextInputMask
              type={'custom'}
              options={{
                mask: '****   ****   ****   ****',
              }}
              editable={false}
              value={card_number}
              style={styles.visaCardNumber}
            />
          </View>
          <View style={styles.cardContentFooter}>
            <View style={styles.cardContentFooterLeft}>
              <Text numberOfLines={1} style={styles.cardHolder}>{visa_info.carD_NAME}</Text>
              {renderVisaBalance(item)}
            </View>
          
            <Visa />
          </View>
        </View>
      </View>
    )
  }

  function renderCard() {
    return {
      UZCARD: (item: ICard) => renderUzCard(item),
      VISA: (item: ICard) => renderVisaCard(item)
    }
  }


  function renderItem({item, index}: {
    item: ICard & IAddCard;
    index: number;
  }) {
    const { card_type } = item;

    return (
      <View key={item.id}>
        { !item?.addCard ? renderCard()[card_type](item): renderAddCard(item) }
      </View>
    );
  }

  function renderAddCard({ title }: IAddCard) {
    return (
      <TouchableOpacity onPress={openAddModal} activeOpacity={TOUCHABLE_OPACITY_2} style={styles.addCardBox}>
        <AddCardLogo />
        <Text style={styles.addCardTitle}>{title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      {
        !!activeCardTitle && <View style={styles.activeCardBox}>
          <View style={styles.activeBoxLine} />
          <Text style={styles.activeCardTitle}>{activeCardTitle}</Text>
          <View style={styles.activeBoxLine} />
        </View>
      }
      <Carousel
        ref={carouselRef}
        firstItem={activeCard?.index}
        inactiveSlideShift={5}
        inactiveSlideOpacity={1}
        data={[...cards]}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 100}
        onSnapToItem={onSnapToItem}
        removeClippedSubviews={false}
      />
    </View>
  )
}
