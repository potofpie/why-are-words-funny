import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import {  animated} from 'react-spring'



export const RatingSlider = withStyles({
  root: {
    color: '#60a5fa',
    height: 8,
    width: '250px',
    fontFamily: 'source-code-pro'
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  // valueLabel: {
  //   left: 'calc(-50% + 4px)',
  // },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


export const FunnyFont = styled.b.attrs(() => ({}))` 
  font-family: 'Bangers', cursive;
  font-size: 1.2rem;
`

export const TechFont = styled.b.attrs(() => ({}))` 
  font-family: 'Share Tech Mono', monospace;
`

export const AppContainer = styled(animated.div).attrs(() => ({
    className: `
      App
      m-3
    `
  }))``
  
  
  
  export const Logo = styled(animated.img).attrs(() => ({
    className: `
    w-1/5	 
    md:w-1/6 
    lg:w-1/12	
    `
  }))``
  
  
  export const Title = styled.p.attrs(() => ({
    className: `
    m-3 
    text-2xl
    `
  }))``
  
  export const Description = styled.p.attrs(() => ({
    className: `
    m-3 
    text-sm 
    text-gray-400 
    text-center
    `
  }))``
  
  
  export const ButtonContainer = styled(animated.span).attrs(() => ({
    className: `
    ml-3 
    inline-flex 
    rounded-md 
    shadow
    m-3
    cursor-pointer
    `
  }))``
  
  
  
  export const ButtonLink = styled.span.attrs(() => ({
    className: `
    inline-flex 
    items-center 
    justify-center 
    px-5 
    py-3 
    border 
    border-transparent 
    text-base 
    font-medium 
    rounded-md 
    text-blue-400  
    bg-white  
    hover:bg-indigo-50
    `
  }))``
  
  export const Bottom = styled(animated.div).attrs(() => ({
    className: `
    flex
    text-center
    flex-col	
    items-center 
    w-4/5	 
    md:w-2/4 
    lg:w-3/12	
    justify-center 
    `
  }))``