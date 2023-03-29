import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    ImageBackground,
    ScrollView,
    Dimensions,
} from "react-native";
import TypingEffectText from "react-native-typing-animation-effect";

const { height } = Dimensions.get("window");

export default function App() {
    const [hideComingSoon, setHideComingSoon] = useState(false);
    const [secondPageTitle, setSecondPageTitle] = useState(
        "Discover Your Personality."
    );
    const [handle, setHandle] = useState("");
    const scrollViewRef = useRef(null);
    const handleExploreNow = () => {
        scrollViewRef.current.scrollTo({
            x: 0,
            y: height,
            animated: true,
        });
    };
    const handlePress = () => {
        setHideComingSoon(true);
    };
    return (
        <ImageBackground
            style={styles.container}
            source={{
                uri: "https://wallpapercave.com/wp/wp2532971.jpg",
            }}
        >
            <ScrollView
                ref={scrollViewRef}
                style={{ height: height, width: "100%" }}
                pagingEnabled={true}
            >
                <View style={{ height: height }}>
                    <View style={styles.container2}>
                        <StatusBar style="auto" />

                        <Text style={styles.title}>Find yourself outside.</Text>
                        <Text style={styles.body}>
                            Book unique camping experiences on over 300,000
                            campsites, cabins, RV parks, public parks and more.
                        </Text>
                        <Pressable
                            style={styles.exploreBtn}
                            onPress={handleExploreNow}
                        >
                            <Text style={styles.exploreBtnTxt}>
                                Explore Now!
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View
                    style={{
                        height: height,
                        marginHorizontal: 20,
                        paddingTop: "80%",
                        paddingBottom: "30%",
                    }}
                >
                    <View style={{ marginStart: 15, marginBottom: 22 }}>
                        <TypingEffectText
                            style={{
                                color: "white",
                                fontSize: 24,
                                fontWeight: 800,
                            }}
                        >
                            {secondPageTitle}
                        </TypingEffectText>
                    </View>
                    <ImageBackground
                        style={styles.container3}
                        source={{
                            uri: "https://wallpapercave.com/wp/wp2532971.jpg",
                        }}
                        blurRadius={100}
                        borderRadius={15}
                    >
                        <TextInput
                            style={styles.input}
                            onChangeText={setHandle}
                            value={handle}
                            placeholder="@p_diddy"
                            placeholderTextColor="#A0A0A0"
                        />
                        <Pressable style={styles.button} onPress={handlePress}>
                            <Text style={styles.exploreBtnTxt}>
                                Find Myself.
                            </Text>
                        </Pressable>

                        {!hideComingSoon && (
                            <Text style={styles.secondarytext}>
                                Coming soon...
                            </Text>
                        )}
                        {!hideComingSoon && (
                            <TextInput
                                style={styles.seconadryInput}
                                onChangeText={setHandle}
                                value={handle}
                                placeholder="Chat with chatgpt..."
                                placeholderTextColor="#A0A0A0"
                                editable={false}
                                multiline={true}
                                textAlignVertical="top"
                            />
                        )}

                        {hideComingSoon && <View></View>}
                    </ImageBackground>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#3A0CA3",
        alignItems: "center",
        justifyContent: "center",
    },
    container2: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container3: {
        flex: 1,
        backgroundColor: "#3A0CA3",
        borderRadius: 20,
        padding: 25,
    },

    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "white",
        width: "70%",
        textAlign: "center",
        marginBottom: 10,
        lineHeight: 49,
    },
    body: {
        width: "70%",
        color: "white",
        fontSize: 14,
        lineHeight: 24,
    },
    exploreBtn: {
        width: "70%",
        backgroundColor: "#F72585",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
    },
    exploreBtnTxt: {
        color: "white",
    },
    input: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#000000",
        marginBottom: 15,
    },
    button: {
        marginBottom: 50,
        backgroundColor: "#F72585",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    secondarytext: {
        color: "lightgrey",
        fontSize: 16,
        fontWeight: 800,
        marginBottom: 20,
    },
    seconadryInput: {
        height: 100,
        backgroundColor: "lightgrey",
        borderRadius: 10,
        padding: 15,
        paddingTop: 15,
        fontSize: 16,
        color: "white",
        marginBottom: 15,
    },
});
