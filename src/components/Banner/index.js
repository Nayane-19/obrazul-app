import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {BannerContainer, BannerImage} from './bannerElements'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Banner1',
    imgPath:'https://www.obrazul.com.br/loja/images/landing/lp-banner1.jpg',
    
      
  },
  {
    label: 'Banner2',
    imgPath:'https://www.obrazul.com.br/loja/images/landing/lp-banner2.jpg',
      
  },
  {
    label: 'Banner3',
    imgPath:'https://www.obrazul.com.br/loja/images/landing/lp-banner3.jpg',
  },
  
];



function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  


  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <BannerContainer>
      <AutoPlaySwipeableViews 
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <BannerImage  src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
    </BannerContainer>
  );
}

export default Banner;