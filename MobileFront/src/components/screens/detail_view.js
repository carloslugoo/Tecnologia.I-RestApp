import React, { useState, useEffect } from "react"
import { StyleSheet, View, Text, Image } from "react-native";

import client from "./../../api/client";

const DetailView = ({ navigation, route }) => {
    const [detail, setDetail] = useState("");

    const { objurl } = route.params;
    const { hey } = route.params;

    const getDetail = async (url) => {
        try {
            const response = await client.get(url);
            if (!response.ok) {
                setDetail(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDetail(objurl);
    }, []);

    return (
        <View style={styles.center}>
            <Text style={styles.title}>Pizzeria: {detail.pizzeria_name}</Text>
            <Text style={styles.title}>Address: {detail.street}</Text>
            <Text style={styles.title}>City: {detail.city}, {detail.state},{detail.zip_code}</Text>
            <Text style={styles.title}>Web: {detail.website}</Text>
            <Text style={styles.title}>Ph: {detail.phone_number}</Text>
            <Text style={styles.title}>Description: {detail.description}</Text>
            <Text style={styles.title}>Email: {detail.email}</Text>
            <Image style={styles.pizzaImage}source={{uri: detail.logo_image,}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
    },
    pizzaImage: {
        width: 200,
        height: 200,
        marginBottom: 16,
    }
});

export default DetailView;