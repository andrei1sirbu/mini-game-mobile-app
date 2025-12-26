import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../config/colors";

function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{children}</Text>
		</View>
	);
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.secondary500,
		borderRadius: 28,
		padding: deviceWidth < 600 ? 24 : 48,
		margin: deviceWidth < 600 ? 24 : 48,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontFamily: "open-sans-bold",
		color: Colors.secondary500,
		fontSize: deviceWidth < 600 ? 32 : 64,
	},
});

export default NumberContainer;
