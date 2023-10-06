import React from 'react'
import { Image, Text, View } from 'react-native'
const NewsItem = ({author,dates,title,des,img}) => {
  return (
    <View style={{flexDirection:'row',flexWrap:'wrap',marginHorizontal:20,marginVertical:20}}>
                  {des!=null && des.trim().length>0 && <View style={{backgroundColor:'white',height:400,width:'100%',borderRadius:20}}>
                      <Image style={{ width: '100%', height: '55%', objectFit: 'fill', borderTopLeftRadius: 20, borderTopRightRadius: 20 }} source={{ uri: img || 'https://media.cnn.com/api/v1/images/stellar/prod/231002142003-02-charlotte-sena-search-1002.jpg?c=16x9&q=w_800,c_fill' }} />
                      <View style={{backgroundColor:'white',height:"50.5%",width:'100%',position:'absolute',borderRadius:20,marginTop:"56%",}}>
                          <Text numberOfLines={2} style={{ marginHorizontal: 11, marginVertical: 5, fontSize: 19, fontWeight: 'bold' }}>{title} </Text>
                          <View style={{flexDirection: 'row' ,marginHorizontal:11}}>
                              <Text style={{ fontWeight: 'bold', fontSize: 14,width:'78%' }}>{author}</Text>
                              <Text style={{fontSize:14}}>{`${new Date(dates).getDay()+1}-${new Date(dates).getMonth()+1}-${new Date(dates).getFullYear()}`}</Text>
                          </View>
                          <Text numberOfLines={6} style={{marginHorizontal:11,marginVertical:5}}>{des}</Text>
                      </View>
                  </View>}
              </View>
  )
}

export default NewsItem