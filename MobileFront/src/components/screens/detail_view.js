import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
class DetailView extends Component {
 render() {
 return (
    <View style={styles.center}>
    <Text style={styles.title}>Detail View</Text>
    <Button title="Click for Tabs"onPress={() => this.props.navigation.navigate("Tabs")}/>
    </View>
    );
    }
}
const styles = StyleSheet.create({
center: 
{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
},
title: 
{
    fontSize: 36,
    marginBottom: 16,
},
});
export default DetailView;