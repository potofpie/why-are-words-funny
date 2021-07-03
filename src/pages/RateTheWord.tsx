import {useState} from 'react'
import {
  AppContainer,
  Title,
  ButtonContainer,
  ButtonLink,
  RatingSlider,
  Description
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

const marks = [
  {
    value: -100,
    label: 'Less Funny',
  },
  {
    value: 100,
    label: 'More Funny',
  },
];

export const RateTheWord = ({setPage}: PageProps) => { 
  const [rating, setRating] = useState<number>(0)
  const fadeStyles = useSpring({
    opacity: 1,
    from: { opacity: 1  },
    to: {opacity: rating  ? 1 : 0},
  });

  return  (
      <TestPageContainer>
        <AppContainer>

          <Description>
            Rate the funniness of this word!
          </Description>
            <Title> the word </Title>
            <RatingSlider min={-100} marks={marks} max={100} defaultValue={0}  value={rating} onChange={(e: any, v: any) => setRating(v) }/>
            {rating !== 0 && <ButtonContainer style={fadeStyles}>
              <ButtonLink>
                Submit
              </ButtonLink>
            </ButtonContainer>}
        </AppContainer>
      </TestPageContainer>
  );
  
}

