import React from 'react';
import ModalView from 'react-native-modal';
import { ViewStyle } from 'react-native';
import { Animation } from 'react-native-animatable';

interface IOwnProps {
  visible: boolean;
  style: ViewStyle;
  swipeDirection: 'up' | 'down' | 'left' | 'right';
  children: JSX.Element;
  avoidKeyboard?: boolean;
  propagateSwipe?: boolean;
  scrollOffset?: number;
  scrollOffsetMax?: number;
  backdropColor?: string;
  swipeThreshold?: number;
  animationIn?: Animation;
  animationOut?: Animation;
  animationInTiming?: number;
  animationOutTiming?: number;
  scrollTo?: (e: any) => void;
  close?: () => void;
}

export function TemplateModal({
  visible,
  swipeDirection,
  close,
  children,
  style,
  avoidKeyboard = false,
  propagateSwipe,
  scrollTo,
  scrollOffset,
  backdropColor,
  swipeThreshold,
  animationIn='fadeIn',
  animationOut='fadeOut',
  scrollOffsetMax,
  animationInTiming,
  animationOutTiming
}: IOwnProps) {
  return (
    <ModalView
      animationIn={animationIn}
      animationOut={animationOut}
      onSwipeComplete={close}
      onBackdropPress={close}
      useNativeDriver={true}
      onBackButtonPress={close}
      swipeDirection={swipeDirection}
      swipeThreshold={swipeThreshold}
      isVisible={visible}
      style={style}
      hideModalContentWhileAnimating={true}
      backdropColor={backdropColor}
      avoidKeyboard={avoidKeyboard}
      propagateSwipe={propagateSwipe}
      scrollTo={scrollTo}
      scrollOffset={scrollOffset}
      scrollOffsetMax={scrollOffsetMax}
      animationInTiming={animationInTiming}
      animationOutTiming={animationOutTiming}
    >
      {children}
    </ModalView>
  );
}
