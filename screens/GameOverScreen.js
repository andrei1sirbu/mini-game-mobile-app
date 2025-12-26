import {
	Image,
	StyleSheet,
	View,
	ScrollView,
	Text,
	useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import gameOverImg from "../assets/images/success.png";
import Colors from "../config/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ userNumber, rounds, newGame }) {
	const { width, height } = useWindowDimensions();
	console.log(width, height);

	const isPhonePortrait = width > 500 && height < 500;
	const imageSize = isPhonePortrait ? 150 : 300;

	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
	};

	const fontSize = {
		fontSize: width < 600 ? 16 : 32,
	};

	return (
		<ScrollView style={{ flex: 1 }}>
			<View style={styles.screenContainer}>
				<Title text={"Game Over!"} />
				<View style={[styles.imageContainer, imageStyle]}>
					<Image source={gameOverImg} style={styles.image} />
				</View>
				<Text style={[styles.summaryText, fontSize]}>
					Your phone needed <Text style={styles.highlightText}>{rounds}</Text>{" "}
					rounds to guess the number{" "}
					<Text style={styles.highlightText}>{userNumber}</Text>.
				</Text>
				<PrimaryButton pressHandler={newGame}>Start New Game</PrimaryButton>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		overflow: "hidden",
		borderWidth: 3,
		borderColor: Colors.primary700,
		margin: 36,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	summaryText: {
		textAlign: "center",
		color: "white",
		fontFamily: "open-sans",
		marginBottom: 24,
	},
	highlightText: {
		fontFamily: "open-sans-bold",
		color: Colors.primary500,
	},
});

export default GameOverScreen;
