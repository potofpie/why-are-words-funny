import React,{FC} from 'react'
import logo from '../laughing.svg';
import {
  AppContainer,
  Logo,
} from '../components'

interface Props {
}





export const TestPageContainer: FC<Props> = ({children})  => { 
  return  (
    <AppContainer >
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}> <Logo style={{margin: 10, }} src={logo} /> 
      <p>Why are words <i><b>funny</b></i>?</p>
      </div>
      {children}
    </AppContainer>
  );
  ;
}

