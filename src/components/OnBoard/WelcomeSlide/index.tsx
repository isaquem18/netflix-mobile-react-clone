
import React, { useRef, useState } from 'react';
import { SlideItem } from './SlideItem';
import { DATA } from '../../../utils/OnBoardTitle';
import { ViewToken } from 'react-native';
import {
  Container,
  List,
  SliderPaging,
  Circle
} from './styles';


interface IShownSlideItem {
  changed: ViewToken[];
  viewableItems: ViewToken[];
}

export function WelcomeSlide () {
  const [ slideShownIndex, setSlideShownIndex ] = useState<number>(0);

  const shownSlideItem = useRef(({ changed, viewableItems }: IShownSlideItem) => {

    const viewableItemIndex = viewableItems[0]?.index ?? 0;
    setSlideShownIndex(viewableItemIndex);

  })

  return (
    <Container>
      <List 
        data={DATA}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <SlideItem 
            key={item.title}
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            fullSize={item?.fullSize}
          />
        )}
        onViewableItemsChanged={shownSlideItem.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
      <SliderPaging>
        {DATA.map((_, index) => (
          <Circle selected={index === slideShownIndex} key={index.toString()}/>
        ))}
      </SliderPaging>
    </Container>
  )
}
