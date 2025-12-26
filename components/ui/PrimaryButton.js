import { Pressable, View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../config/colors";
import { generateRandomBetween } from "../../utils/functions";

function PrimaryButton({ children, ...props }) {
	return (
		<View style={styles.btnOutterContainer}>
			<Pressable
				onPress={props.pressHandler}
				style={({ pressed }) => {
					if (pressed) return [styles.btnInnerContainer, styles.pressed];
					return styles.btnInnerContainer;
				}}
			>
				<Text style={styles.btnText}>{children}</Text>
			</Pressable>
		</View>
	);
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	btnOutterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
	},
	btnInnerContainer: {
		backgroundColor: Colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		// shadow on Android
		elevation: 2,
		// shadow on IOS
		shadowColor: "black",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowRadius: 3,
		shadowOpacity: 0.5,
	},
	btnText: {
		fontSize: deviceWidth < 600 ? 16 : 32,
		color: "white",
		textAlign: "center",
		fontWeight: "medium",
	},
	pressed: {
		opacity: 0.75,
	},
});

export default PrimaryButton;
