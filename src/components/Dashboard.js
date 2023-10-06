import React,{useState,useEffect} from 'react'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import NewsItem from './NewsItem'

const Dashboard = () => {
    const [Data, setData] = useState({})
   const [loading,setLoading] =useState(true)
    useEffect(() => {
        setLoading(true)
        fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=49131b7955bd4cd7b4444862bc98b5a6").then((res) => res.json()).then((ans) => {
            setData(ans)
            console.log(ans.articles[0].author)
           setLoading(false)
        })
    }, [])
    
        return (
            <View style={{ height: '100%', width: '100%', backgroundColor: '#ededed' }}>
                <Text style={{ color: 'black', fontSize: 28, fontWeight: 'bold', marginHorizontal: '4%' }}>DemoText</Text>
                <View style={{ height: '7%', flexDirection: 'row', backgroundColor: 'white', marginVertical: '3%', marginHorizontal: '4%', borderRadius: 18 }}>
                    <Image style={{ height: 20, width: 20, marginVertical: 18, marginLeft: 10, marginRight: 6 }} source={require('../Assets/searchs.png')} />
                    <TextInput placeholder='Enter Your Requirements' />
                </View>
                <ScrollView>
                    {!loading && Data.articles.map((ele, ind) => {
                        return <NewsItem img={ele.urlToImage} des={ele.description} title={ele.title} dates={ele.publishedAt} author={ele.author||"Unknown"} key={ind}/>
                    })}
                </ScrollView>
            </View>
        )
    }

export default Dashboard