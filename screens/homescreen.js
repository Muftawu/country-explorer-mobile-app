import { View, Text, ScrollView } from "react-native"
import CardItemList from "../components/card_list";
import React,{ useEffect, useState } from "react";
import { ScrollViewBase } from "react-native";
const HomeScreen = () => {
    const [data, setData] = useState([])

    // fetch data from django server
    const fetch_from_django = () => {
        fetch("http://172.20.10.3:8000")
        .then(response => {
            return response.json()
        })
        .then(data => {
        setData(data)
        })
    }

    useEffect(() => {
        fetch_from_django()
    }, [])

    return (
         <View>
            <Text style={{padding: 20, fontSize:20, textAlign: "center", fontWeight: "bold"}}>List of Countries</Text>
            <Text style={{paddingBottom: 10, fontSize:15, textAlign: "center"}}>Tap a country for more details</Text>
        
                <CardItemList data={data} />
                
            </View>
    )
}

export default HomeScreen;