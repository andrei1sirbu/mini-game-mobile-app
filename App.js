import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import openSansBold from "./assets/fonts/OpenSans-Bold.ttf";
import openSans from "./assets/fonts/OpenSans-Regular.ttf";
import bgImage from "./assets/images/background.png";
import Colors from "./config/colors";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [number, setNumber] = useState(null);
	const [isGameOver, setIsGameOver] = useState(false);
	const [gameRounds, setGameRounds] = useState([]);
	const [fontsLoaded] = useFonts({
		"open-sans": openSans,
		"open-sans-bold": openSansBold,
	});

	function newGame() {
		setIsGameOver(false);
		setNumber(null);
		setGameRounds(0);
	}

	let screen = number ? (
		<GameScreen
			userNumber={number}
			setIsGameOver={setIsGameOver}
			gameRounds={gameRounds}
			setGameRounds={setGameRounds}
		/>
	) : (
		<StartGameScreen setNumber={setNumber} setIsGameOver={setIsGameOver} />
	);

	if (isGameOver) {
		screen = (
			<GameOverScreen
				userNumber={number}
				rounds={gameRounds.length}
				newGame={newGame}
			/>
		);
	}

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hide(11);
		}
	}, [fontsLoaded]);

	return (
		<SafeAreaProvider>
			<StatusBar style="light" />
			<LinearGradient
				colors={[Colors.primary600, Colors.secondary500]}
				style={styles.rootContainer}
			>
				<ImageBackground
					source={bgImage}
					resizeMode="cover"
					style={styles.rootContainer}
					imageStyle={{
						opacity: 0.5,
					}}
				>
					<SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
	},
});
