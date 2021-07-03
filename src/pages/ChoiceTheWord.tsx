import {useState} from 'react'
import {
  AppContainer,
  ButtonContainer,
  Description,
  ButtonLink,
} from '../components'
import {
  TestPageContainer
} from './'
import {
  useSpring
} from 'react-spring'
import {
  PageProps
} from './'





export const ChoiceTheWord = ({setPage}: PageProps)  => { 
  const [choice, setChoice] = useState('')
  const fadeStyles = useSpring({
    opacity: 1,
    from: { opacity: 1 },
    to: {opacity: Boolean(choice.length)  ? 1 : 0},
  });


  return  (
    <TestPageContainer>
      <AppContainer >
        <Description>
          Please choose the word that you think is funnier!
        </Description>
        <div>

          <ButtonContainer onClick={() => setChoice('word 1')}>
            <ButtonLink style={{textDecoration: 'word 1' ===  choice ?   'underline' : 'none' }}>
              word 1
            </ButtonLink> 
          </ButtonContainer>
          <ButtonContainer onClick={() => setChoice('word 2')}>
            <ButtonLink style={{textDecoration: 'word 2' ===  choice ?   'underline' : 'none' }}>
              word 2
            </ButtonLink> 
          </ButtonContainer>
        </div>
        {choice.length !== 0 && <ButtonContainer style={fadeStyles}>
            <ButtonLink>
              Submit
            </ButtonLink>
          </ButtonContainer>}
      </AppContainer>
    </TestPageContainer>
  );
  ;
}

