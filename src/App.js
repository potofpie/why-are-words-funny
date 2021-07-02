import {useState} from 'react'
import logo from './laughing.svg';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'





const AppContainer = styled(animated.div).attrs(() => ({
  className: `
    App
  `
}))``



const Logo = styled.img.attrs(() => ({
  className: `
  w-1/5	 
  md:w-1/6 
  lg:w-1/12	
  `
}))``


const Title = styled.p.attrs(() => ({
  className: `
  m-3 
  text-2xl
  `
}))``

const Description = styled.p.attrs(() => ({
  className: `
  m-3 
  text-sm 
  text-gray-400 
  w-4/5	 
  md:w-2/4 
  lg:w-3/12	
  text-center
  `
}))``


const ButtonContainer = styled.span.attrs(() => ({
  className: `
  ml-3 
  inline-flex 
  rounded-md 
  shadow
  m-3
  cursor-pointer
  `
}))``



const ButtonLink = styled.span.attrs(() => ({
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


function App() {
  const [startTest, setStartTest] = useState(false)
  const fadeIn = useSpring({ to: { opacity: 1 },  config: {duration: 700}, from: { opacity: 0 } })


  return (
    <AppContainer style={fadeIn} >
        <Logo   src={logo}  alt="laughing-emoji" />
        <Title> Why are things funny? </Title>

        {
          startTest ? 
          <> 
          
          wordTest one
          
          </>

        :
        <>
        <Description> 
        Some words are interperted as funny regardless of there meaning of social conitations 
      </Description>
        <ButtonContainer onClick={() => setStartTest(true) }>
          
        <ButtonLink>
          Start
        </ButtonLink> 
      
      
    </ButtonContainer>
    </>
        }
    </AppContainer>
  );
}

export default App;
