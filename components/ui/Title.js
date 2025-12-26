import { Dimensions, StyleSheet, Text, Platform } from "react-native";

function Title({ text }) {
	return <Text style={styles.title}>{text}</Text>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	title: {
		fontFamily: "open-sans-bold",
		fontSize: deviceWidth < 600 ? 24 : 48,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
		// borderWidth: Platform.OS === "android" && 2,
		borderWidth: Platform.select({
			ios: 0,
			android: 2,
		}),
		borderColor: "white",
		borderRadius: 28,
		padding: 12,
	},
});

export default Title;
