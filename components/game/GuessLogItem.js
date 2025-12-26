import { View, StyleSheet, Text, Dimensions } from "react-native";
import Colors from "../../config/colors";

function GuessLogItem({ roundNumber, guess }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>#{roundNumber}</Text>
			<Text style={styles.text}>Opponent's Guess: {guess}</Text>
		</View>
	);
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		borderColor: Colors.primary700,
		borderWidth: 1,
		borderRadius: 28,
		padding: 16,
		marginVertical: 8,
		backgroundColor: Colors.secondary500,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3,
	},
	text: {
		fontFamily: "open-sans",
		fontSize: deviceWidth < 600 ? 16 : 32,
	},
});

export default GuessLogItem;
