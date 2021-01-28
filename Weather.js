import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#D7D2CC", "#304352"],
    title: "안개",
    subtitle: "운전 조심하세요",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "뇌우",
    subtitle: "흔하지 않은 날씨",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "이슬비",
    subtitle: "이슬비라도 우산은 챙겨야죠",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#00C6FB", "#005BEA"],
    title: "비",
    subtitle: "우산 챙기세요",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "눈",
    subtitle: "눈사람 만들자",
  },
  Atmosphere: {
    iconName: "weather-partly-cloudy",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "대기",
    subtitle: "무슨 날씨인지 모르겠네",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "맑음",
    subtitle: "나가서 놀자",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "흐림",
    subtitle: "흐려도 선크림",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "약한 안개",
    subtitle: "운전 조심",
  },
  Dust: {
    iconName: "weather-cloudy-alert",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "미세먼지",
    subtitle: "마스크 꼭 끼세요",
  },
};
export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}
Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
    textAlign: "left",
  },
  textContainer: {
    paddingHorizontal: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
