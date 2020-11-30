import React, { Component } from 'react';
import { CreateVisaVirtualHintsView } from './view';
import Carousel, { CarouselStatic } from 'react-native-snap-carousel';
import { ScrollViewProps } from 'react-native';

interface IState {
  activeSlideIndex: number;
}

export class CreateVisaVirtualHintsController extends Component<{}, IState> {
  carouselRef = React.createRef<Carousel<any> & ScrollViewProps & CarouselStatic<any>>()

  state: IState = {
    activeSlideIndex: 0
  }

  onSnapToItem = (index: number) => {
    this.setState({
      activeSlideIndex: index
    });
  }

  render() {
    const { activeSlideIndex } = this.state;
    
    return (
      <CreateVisaVirtualHintsView
        carouselRef={this.carouselRef}
        activeSlideIndex={activeSlideIndex}
        onSnapToItem={this.onSnapToItem}
      />
    )
  }
}
