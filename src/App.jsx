import { useEffect, useState } from "react";
import Background from "./component/background/Background";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";


const App = () => {
  let heroData=[
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"}
  ];

  const [heroCount,setHeroCount]= useState(0);
  const [platStatus,setPlayStatus]= useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000)
  },[])

  return (
    <>
      <Background platStatus={platStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero 
        setPlayStatus={setPlayStatus} 
        heroData={heroData[heroCount]} 
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        platStatus={platStatus}
      
      />
    </>
  );
}

export default App