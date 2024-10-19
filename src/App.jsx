import Header from "./components/Header.jsx";
import Input from './components/Input.jsx';
import { useState } from "react";
import Results from "./components/Results.jsx";




function App() {

  const [value, setValue] = useState(
    {
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 12,

    }
  );


  function handleChange(inputType, newValue){
    setValue((...prevInvestment)=>{
      return {
        prevInvestment,
        [inputType]: +newValue,
      }

    });
  }


  return (
    <>
     <Header/>
     <Input onChange={handleChange} value={value}/>
     <Results value={value}/>
    </>
  )
}

export default App
