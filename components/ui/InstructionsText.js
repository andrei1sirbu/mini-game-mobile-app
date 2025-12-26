import { Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../config/colors";

function InstructionsText({ children, ...props }) {
	// right style overrides the left style
	return <Text style={[styles.instructionsText, props.style]}>{children}</Text>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	instructionsText: {
		fontFamily: "open-sans",
		fontSize: deviceWidth < 600 ? 24 : 48,
		color: Colors.secondary500,
	},
});

export default InstructionsText;
