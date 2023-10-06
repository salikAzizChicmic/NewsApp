import { useEffect, useState } from 'react';
import {Text,FlatList} from 'react-native'
import Dashboard from './src/components/Dashboard';
const App=()=>{
  const [Data, setData] = useState([])
  
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=49131b7955bd4cd7b4444862bc98b5a6").then((res)=>res.json()).then((ans) => {
      //console.log(ans.articles)
      //ans.articles.map((ele)=>{console.log(ele.source.name)})
      setData[ans]
    })
  },[])
  return (
    <Dashboard />
  )
}

export default App;