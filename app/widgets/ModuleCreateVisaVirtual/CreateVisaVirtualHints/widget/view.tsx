import React, { RefObject } from 'react';
import { View, Text, Dimensions, ScrollViewProps } from 'react-native';
import { styles } from './styles';
import Carousel, { CarouselStatic, Pagination } from 'react-native-snap-carousel';
import { Card } from '../assets';
import { HINTS } from './const';
import { IHint } from './types';

interface IOwnProps {
  carouselRef: RefObject<Carousel<any>> & RefObject<ScrollViewProps> & RefObject<CarouselStatic<any>>;
  activeSlideIndex: number;
  onSnapToItem: (index: number) => void;
}

export function CreateVisaVirtualHintsView({ carouselRef, activeSlideIndex, onSnapToItem }: IOwnProps) {
  function renderItem({item, index}: {
    item: IHint;
    index: number;
  }) {
    const { label, text } = item;

    return (
      <View key={index} style={styles.hint}>
        <View style={styles.hintIcon}>
          <Card />
        </View>
        <Text style={styles.question}>{label}</Text>
        <Text style={styles.answer}>{text}</Text>
      </View>
    )
  }

  function renderPagination() {
    return (
      <Pagination
        dotsLength={3}
        activeDotIndex={activeSlideIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.carouselBox}>
        <Carousel
          ref={carouselRef}
          firstItem={0}
          inactiveSlideShift={0}
          inactiveSlideOpacity={1}
          data={HINTS}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width - 50}
          autoplay={true}
          loop={true}
          initialNumToRender={100}
          onSnapToItem={onSnapToItem}
          removeClippedSubviews={false}
        />

        {renderPagination()}
      </View>
    </View>
  )
}