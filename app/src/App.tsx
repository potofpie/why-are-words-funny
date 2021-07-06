import {useState} from 'react'
import {
  LandingPage,
  RateTheWord,
  ChoiceTheWord
} from './pages'


export const renderPage = (page: string, setPage: Function) => {
  switch(page) {
    case 'landing':
      return <LandingPage setPage={setPage}/>
    case 'rate':
      return <RateTheWord setPage={setPage}/>
    case 'choice':
      return <ChoiceTheWord setPage={setPage}/>
    default:
      return <div>error</div>
  }
}


export const App = () => { 
  const [page, setPage] = useState('landing')
  return  (
    <>
    {renderPage(page,setPage)}
    </>

  );
  ;
}


