import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import {
	Alert,
	StyleSheet,
	View,
	FlatList,
	Text,
	Dimensions,
	useWindowDimensions,
} from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionsText from "../components/ui/InstructionsText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { generateRandomBetween } from "../utils/functions";
import GuessLogItem from "../components/game/GuessLogItem";
var minBoundary;
var maxBoundary;

function GameScreen({ userNumber, setIsGameOver, gameRounds, setGameRounds }) {
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomBetween(1, 100, userNumber)
	);
	const { width, heigth } = useWindowDimensions();

	let content = (
		<>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionsText style={styles.instructionsText}>
					Higher or lower?
				</InstructionsText>
				<View style={styles.btnContainer}>
					{/* .bind() preconfigureaza o functie ce urmeaza sa fie executata 
							de exemplu nextGuess se va apela in componenta primary cu parametrul 
							"higher"/"lower" in functie de parametrul din bind */}
					<PrimaryButton pressHandler={nextGuess.bind(this, "lower")}>
						<AntDesign
							name="minus"
							size={deviceWidth < 600 ? 24 : 48}
							color="white"
						/>
					</PrimaryButton>
					<PrimaryButton pressHandler={nextGuess.bind(this, "higher")}>
						<AntDesign
							name={"plus"}
							size={deviceWidth < 600 ? 24 : 48}
							color="white"
						/>
					</PrimaryButton>
				</View>
			</Card>
		</>
	);

	useEffect(() => {
		setGameRounds([currentGuess]);
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	useEffect(() => {
		if (currentGuess === userNumber) {
			setIsGameOver(true);
		}
	}, [currentGuess, userNumber, setIsGameOver]);

	function nextGuess(direction) {
		if (
			(direction === "lower" && currentGuess < userNumber) ||
			(direction === "higher" && currentGuess > userNumber)
		) {
			Alert.alert("You lied!", "Try to play fair the next time.", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;
		}
		if (direction === "lower") {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		const newGuess = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newGuess);
		setGameRounds((prev) => [newGuess, ...prev]);
	}

	const guessRoundListLength = gameRounds.length;

	if (width > 600) {
		content = (
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<View style={styles.btnContainer}>
					<PrimaryButton pressHandler={nextGuess.bind(this, "lower")}>
						<AntDesign
							name="minus"
							size={deviceWidth < 600 ? 24 : 48}
							color="white"
						/>
					</PrimaryButton>
				</View>
				<NumberContainer>{currentGuess}</NumberContainer>
				<View style={styles.btnContainer}>
					<PrimaryButton pressHandler={nextGuess.bind(this, "higher")}>
						<AntDesign
							name={"plus"}
							size={deviceWidth < 600 ? 24 : 48}
							color="white"
						/>
					</PrimaryButton>
				</View>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Title text={"Opponent's Guess"} />
			{content}
			<View style={styles.listContainer}>
				<FlatList
					data={gameRounds}
					keyExtractor={(item) => item}
					renderItem={(itemData) => {
						return (
							<GuessLogItem
								roundNumber={guessRoundListLength - itemData.index}
								guess={itemData.item}
							/>
						);
					}}
				/>
			</View>
		</View>
	);
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	btnContainer: {
		flexDirection: "row",
	},
	instructionsText: {
		marginBottom: 16,
	},
	listContainer: {
		flex: 1,
		padding: 16,
	},
});

export default GameScreen;
