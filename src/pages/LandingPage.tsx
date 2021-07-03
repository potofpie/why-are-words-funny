// import {useState} from 'react'
import logo from '../laughing.svg';
import {
  AppContainer,
  Logo,
  Title,
  ButtonContainer,
  Description,
  ButtonLink,
  Bottom,
} from '../components'
import {
  PageProps
} from './'




export const LandingPage = ({setPage}: PageProps)  => { 
  // const [startTest, setStartTest] = useState(false)

  return  (
    <AppContainer >
        <Logo src={logo}  alt="laughing-emoji" />
        <Title> Why are words <b><i>funny</i></b>? </Title>
        <Bottom>
          <Description> 
          Words can be interperted as <b><i>funny</i></b> regardless of thier meaning. I am trying to collection <b><i>data</i></b> about what makes these words <b><i>funny</i></b>!
        </Description>
        <ButtonContainer onClick={() => setPage('choice')}>
          <ButtonLink >
            Start
          </ButtonLink> 
        </ButtonContainer>
      </Bottom>
    </AppContainer>
  );
  ;
}

