import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function App() {
  return (
    <ScrollView>
      <Link style={{backgroundColor:"red",width:400}} href={{
        pathname: "About us",
        params:{Skull:"Flaming skull"}
      }}>
        <Image style={{ height: 600, width: 400}} source={{ uri: "https://icon2.cleanpng.com/lnd/20240616/yal/azieey07a.webp" }} />
        About us
      </Link>

      <Link style={{backgroundColor:"red",width:400}} href={{
        pathname: "About us",
        params:{Toy:"jelly toy"}
      }}>
        <Image style={{ height: 600, width: 400}} source={{ uri: "https://www.cleanpng.com/png-gummy-bears-3d-glass-bear-transparent-glass-sculpt-8099473/" }} />
        About us
      </Link>

    </ScrollView>
  )
}