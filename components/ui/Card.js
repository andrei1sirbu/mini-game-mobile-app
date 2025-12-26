import { View, StyleSheet } from "react-native";
import Colors from "../../config/colors";

function Card({ children }) {
	return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
	card: {
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 24,
		padding: 16,

		borderRadius: 28,
		backgroundColor: Colors.primary700,
		// shadow on android
		elevation: 4,
		// shadow on IOS
		shadowColor: "black",
		shadowOffset: {
			width: 4,
			height: 4,
		},
		shadowRadius: 6,
		shadowOpacity: 0.5,
	},
});

export default Card;
