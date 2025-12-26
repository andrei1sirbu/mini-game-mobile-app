import { useState } from "react";
import {
	Alert,
	Dimensions,
	KeyboardAvoidingView,
	StyleSheet,
	TextInput,
	View,
	useWindowDimensions,
} from "react-native";
import Card from "../components/ui/Card";
import InstructionsText from "../components/ui/InstructionsText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../config/colors";

function StartGameScreen({ setNumber, setIsGameOver }) {
	const [input, setInput] = useState("");
	// this is an alternative to the Dimensions API
	// this checks the dimensions of the device even when the user switches from portrait to landscape and vice-versa
	const { width, height } = useWindowDimensions();

	function resetHandler() {
		setInput("");
	}

	function confirmHandler() {
		const inputNumber = parseInt(input);
		if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
			Alert.alert(
				"Invalid number!",
				"Input has to be a number between 1 and 99.",
				[{ text: "Confirm", style: "destructive", onPress: resetHandler }]
			);
			return;
		}
		setNumber(inputNumber);
		setIsGameOver(false);
	}

	return (
		// in case the input is hidden by the keyboard, it pushes the input upward so the user can be able to see it

		<KeyboardAvoidingView behavior="position">
			<View>
				<View style={styles.titleContainer}>
					<Title text={"Guess My Number"} />
				</View>
				<Card>
					<InstructionsText>Enter a Number</InstructionsText>
					<TextInput
						value={input}
						onChangeText={(value) => setInput(value)}
						style={styles.numberInput}
						maxLength={2}
						keyboardType="number-pad"
						autoCorrect={false}
					/>
					<View style={styles.buttonContainer}>
						<PrimaryButton pressHandler={resetHandler}>Reset</PrimaryButton>
						<PrimaryButton pressHandler={confirmHandler}>Confirm</PrimaryButton>
					</View>
				</Card>
			</View>
		</KeyboardAvoidingView>
	);
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	numberInput: {
		height: deviceWidth < 600 ? 50 : 100,
		width: deviceWidth < 600 ? 50 : 100,
		fontSize: deviceWidth < 600 ? 32 : 64,
		borderBottomWidth: 2,
		borderBottomColor: Colors.secondary500,
		color: Colors.secondary500,
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonContainer: {
		flexDirection: "row",
	},
	titleContainer: {
		marginHorizontal: 16,
		marginBottom: 32,
	},
});

export default StartGameScreen;
