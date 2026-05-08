/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
import { useState } from "react";
import "./battleship.css";

export function SetupTest() {
	console.log("Hello,World!");
}

export function BattleShip() {
	const [player1, setPlayer1] = useState({});
	const [player2, setPlayer2] = useState({});

	const [currentPlayer, setCurrentPlayer] = useState("Player1");

	const [p1Gameboard, SetP1Gameboard] = useState({
		A: ["", "", "", "", "", "", "", "", "", ""],
		B: ["", "", "", "", "", "", "", "", "", ""],
		C: ["", "", "", "", "", "", "", "", "", ""],
		D: ["", "", "", "", "", "", "", "", "", ""],
		E: ["", "", "", "", "", "", "", "", "", ""],
		F: ["", "", "", "", "", "", "", "", "", ""],
		G: ["", "", "", "", "", "", "", "", "", ""],
		H: ["", "", "", "", "", "", "", "", "", ""],
		I: ["", "", "", "", "", "", "", "", "", ""],
		J: ["", "", "", "", "", "", "", "", "", ""],
	});

	const [p2Gameboard, SetP2Gameboard] = useState({
		A: ["", "", "", "", "", "", "", "", "", ""],
		B: ["", "", "", "", "", "", "", "", "", ""],
		C: ["", "", "", "", "", "", "", "", "", ""],
		D: ["", "", "", "", "", "", "", "", "", ""],
		E: ["", "", "", "", "", "", "", "", "", ""],
		F: ["", "", "", "", "", "", "", "", "", ""],
		G: ["", "", "", "", "", "", "", "", "", ""],
		H: ["", "", "", "", "", "", "", "", "", ""],
		I: ["", "", "", "", "", "", "", "", "", ""],
		J: ["", "", "", "", "", "", "", "", "", ""],
	});

	// functions
	function handleP1Click(row, column) {
		if (currentPlayer === "Player2") {
			alert("not ur turn");
			return;
		}
		SetP1Gameboard((prev) => {
			const newBoard = { ...prev };
			newBoard[row] = [...prev[row]];
			newBoard[row][column] = "hit";
			return newBoard;
		});
		setCurrentPlayer("Player2");
	}

	function handleP2Click(row, column) {
		if (currentPlayer === "Player1") {
			alert("not ur turn");
			return;
		}
		if (p2Gameboard[row][column] === "hit") {
			alert("block has already been hit");
			return;
		}

		SetP2Gameboard((prev) => {
			const newBoard = { ...prev };
			newBoard[row] = [...prev[row]];
			newBoard[row][column] = "hit";
			return newBoard;
		});
		setCurrentPlayer("Player1");
	}
	function createShip(type, length) {
		return {
			type: type,
			length: length,
			hits: length,
			isSunk: false,
			takeDmg() {
				this.hits -= 1;
				if (this.hits <= 0) {
					this.isSunk = true;
				}
			},
		};
	}

	console.log(p1Gameboard);
	console.log(p2Gameboard);

	return (
		<div className="container">
			<div className="p1-gameboard">
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("A", 0)}
				>
					{p1Gameboard.A[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("A", 1)}
				>
					{p1Gameboard.A[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("A", 2)}
				>
					{p1Gameboard.A[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("A", 3)}
				>
					{p1Gameboard.A[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("A", 4)}
				>
					{p1Gameboard.A[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("A", 5)}
				>
					{p1Gameboard.A[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("A", 6)}
				>
					{p1Gameboard.A[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("A", 7)}
				>
					{p1Gameboard.A[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("A", 8)}
				>
					{p1Gameboard.A[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("A", 9)}
				>
					{p1Gameboard.A[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("B", 0)}
				>
					{p1Gameboard.B[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("B", 1)}
				>
					{p1Gameboard.B[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("B", 2)}
				>
					{p1Gameboard.B[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("B", 3)}
				>
					{p1Gameboard.B[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("B", 4)}
				>
					{p1Gameboard.B[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("B", 5)}
				>
					{p1Gameboard.B[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("B", 6)}
				>
					{p1Gameboard.B[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("B", 7)}
				>
					{p1Gameboard.B[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("B", 8)}
				>
					{p1Gameboard.B[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("B", 9)}
				>
					{p1Gameboard.B[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("C", 0)}
				>
					{p1Gameboard.C[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("C", 1)}
				>
					{p1Gameboard.C[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("C", 2)}
				>
					{p1Gameboard.C[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("C", 3)}
				>
					{p1Gameboard.C[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("C", 4)}
				>
					{p1Gameboard.C[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("C", 5)}
				>
					{p1Gameboard.C[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("C", 6)}
				>
					{p1Gameboard.C[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("C", 7)}
				>
					{p1Gameboard.C[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("C", 8)}
				>
					{p1Gameboard.C[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("C", 9)}
				>
					{p1Gameboard.C[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("D", 0)}
				>
					{p1Gameboard.D[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("D", 1)}
				>
					{p1Gameboard.D[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("D", 2)}
				>
					{p1Gameboard.D[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("D", 3)}
				>
					{p1Gameboard.D[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("D", 4)}
				>
					{p1Gameboard.D[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("D", 5)}
				>
					{p1Gameboard.D[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("D", 6)}
				>
					{p1Gameboard.D[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("D", 7)}
				>
					{p1Gameboard.D[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("D", 8)}
				>
					{p1Gameboard.D[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("D", 9)}
				>
					{p1Gameboard.D[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("E", 0)}
				>
					{p1Gameboard.E[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("E", 1)}
				>
					{p1Gameboard.E[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("E", 2)}
				>
					{p1Gameboard.E[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("E", 3)}
				>
					{p1Gameboard.E[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("E", 4)}
				>
					{p1Gameboard.E[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("E", 5)}
				>
					{p1Gameboard.E[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("E", 6)}
				>
					{p1Gameboard.E[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("E", 7)}
				>
					{p1Gameboard.E[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("E", 8)}
				>
					{p1Gameboard.E[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("E", 9)}
				>
					{p1Gameboard.E[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("F", 0)}
				>
					{p1Gameboard.F[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("F", 1)}
				>
					{p1Gameboard.F[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("F", 2)}
				>
					{p1Gameboard.F[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("F", 3)}
				>
					{p1Gameboard.F[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("F", 4)}
				>
					{p1Gameboard.F[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("F", 5)}
				>
					{p1Gameboard.F[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("F", 6)}
				>
					{p1Gameboard.F[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("F", 7)}
				>
					{p1Gameboard.F[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("F", 8)}
				>
					{p1Gameboard.F[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("F", 9)}
				>
					{p1Gameboard.F[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("G", 0)}
				>
					{p1Gameboard.G[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("G", 1)}
				>
					{p1Gameboard.G[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("G", 2)}
				>
					{p1Gameboard.G[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("G", 3)}
				>
					{p1Gameboard.G[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("G", 4)}
				>
					{p1Gameboard.G[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("G", 5)}
				>
					{p1Gameboard.G[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("G", 6)}
				>
					{p1Gameboard.G[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("G", 7)}
				>
					{p1Gameboard.G[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("G", 8)}
				>
					{p1Gameboard.G[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("G", 9)}
				>
					{p1Gameboard.G[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("H", 0)}
				>
					{p1Gameboard.H[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("H", 1)}
				>
					{p1Gameboard.H[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("H", 2)}
				>
					{p1Gameboard.H[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("H", 3)}
				>
					{p1Gameboard.H[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("H", 4)}
				>
					{p1Gameboard.H[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("H", 5)}
				>
					{p1Gameboard.H[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("H", 6)}
				>
					{p1Gameboard.H[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("H", 7)}
				>
					{p1Gameboard.H[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("H", 8)}
				>
					{p1Gameboard.H[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("H", 9)}
				>
					{p1Gameboard.H[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("I", 0)}
				>
					{p1Gameboard.I[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("I", 1)}
				>
					{p1Gameboard.I[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("I", 2)}
				>
					{p1Gameboard.I[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("I", 3)}
				>
					{p1Gameboard.I[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("I", 4)}
				>
					{p1Gameboard.I[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("I", 5)}
				>
					{p1Gameboard.I[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("I", 6)}
				>
					{p1Gameboard.I[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("I", 7)}
				>
					{p1Gameboard.I[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("I", 8)}
				>
					{p1Gameboard.I[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("I", 9)}
				>
					{p1Gameboard.I[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("J", 0)}
				>
					{p1Gameboard.J[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("J", 1)}
				>
					{p1Gameboard.J[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("J", 2)}
				>
					{p1Gameboard.J[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("J", 3)}
				>
					{p1Gameboard.J[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("J", 4)}
				>
					{p1Gameboard.J[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("J", 5)}
				>
					{p1Gameboard.J[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("J", 6)}
				>
					{p1Gameboard.J[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("J", 7)}
				>
					{p1Gameboard.J[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("J", 8)}
				>
					{p1Gameboard.J[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP1Click("J", 9)}
				>
					{p1Gameboard.J[9]}
				</div>
			</div>
			<div className="p2-gameboard">
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("A", 0)}
				>
					{p2Gameboard.A[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("A", 1)}
				>
					{p2Gameboard.A[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("A", 2)}
				>
					{p2Gameboard.A[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("A", 3)}
				>
					{p2Gameboard.A[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("A", 4)}
				>
					{p2Gameboard.A[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("A", 5)}
				>
					{p2Gameboard.A[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("A", 6)}
				>
					{p2Gameboard.A[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("A", 7)}
				>
					{p2Gameboard.A[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("A", 8)}
				>
					{p2Gameboard.A[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("A", 9)}
				>
					{p2Gameboard.A[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("B", 0)}
				>
					{p2Gameboard.B[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("B", 1)}
				>
					{p2Gameboard.B[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("B", 2)}
				>
					{p2Gameboard.B[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("B", 3)}
				>
					{p2Gameboard.B[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("B", 4)}
				>
					{p2Gameboard.B[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("B", 5)}
				>
					{p2Gameboard.B[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("B", 6)}
				>
					{p2Gameboard.B[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("B", 7)}
				>
					{p2Gameboard.B[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("B", 8)}
				>
					{p2Gameboard.B[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("B", 9)}
				>
					{p2Gameboard.B[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("C", 0)}
				>
					{p2Gameboard.C[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("C", 1)}
				>
					{p2Gameboard.C[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("C", 2)}
				>
					{p2Gameboard.C[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("C", 3)}
				>
					{p2Gameboard.C[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("C", 4)}
				>
					{p2Gameboard.C[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("C", 5)}
				>
					{p2Gameboard.C[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("C", 6)}
				>
					{p2Gameboard.C[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("C", 7)}
				>
					{p2Gameboard.C[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("C", 8)}
				>
					{p2Gameboard.C[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("C", 9)}
				>
					{p2Gameboard.C[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("D", 0)}
				>
					{p2Gameboard.D[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("D", 1)}
				>
					{p2Gameboard.D[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("D", 2)}
				>
					{p2Gameboard.D[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("D", 3)}
				>
					{p2Gameboard.D[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("D", 4)}
				>
					{p2Gameboard.D[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("D", 5)}
				>
					{p2Gameboard.D[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("D", 6)}
				>
					{p2Gameboard.D[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("D", 7)}
				>
					{p2Gameboard.D[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("D", 8)}
				>
					{p2Gameboard.D[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("D", 9)}
				>
					{p2Gameboard.D[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("E", 0)}
				>
					{p2Gameboard.E[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("E", 1)}
				>
					{p2Gameboard.E[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("E", 2)}
				>
					{p2Gameboard.E[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("E", 3)}
				>
					{p2Gameboard.E[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("E", 4)}
				>
					{p2Gameboard.E[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("E", 5)}
				>
					{p2Gameboard.E[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("E", 6)}
				>
					{p2Gameboard.E[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("E", 7)}
				>
					{p2Gameboard.E[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("E", 8)}
				>
					{p2Gameboard.E[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("E", 9)}
				>
					{p2Gameboard.E[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("F", 0)}
				>
					{p2Gameboard.F[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("F", 1)}
				>
					{p2Gameboard.F[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("F", 2)}
				>
					{p2Gameboard.F[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("F", 3)}
				>
					{p2Gameboard.F[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("F", 4)}
				>
					{p2Gameboard.F[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("F", 5)}
				>
					{p2Gameboard.F[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("F", 6)}
				>
					{p2Gameboard.F[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("F", 7)}
				>
					{p2Gameboard.F[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("F", 8)}
				>
					{p2Gameboard.F[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("F", 9)}
				>
					{p2Gameboard.F[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("G", 0)}
				>
					{p2Gameboard.G[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("G", 1)}
				>
					{p2Gameboard.G[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("G", 2)}
				>
					{p2Gameboard.G[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("G", 3)}
				>
					{p2Gameboard.G[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("G", 4)}
				>
					{p2Gameboard.G[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("G", 5)}
				>
					{p2Gameboard.G[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("G", 6)}
				>
					{p2Gameboard.G[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("G", 7)}
				>
					{p2Gameboard.G[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("G", 8)}
				>
					{p2Gameboard.G[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("G", 9)}
				>
					{p2Gameboard.G[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("H", 0)}
				>
					{p2Gameboard.H[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("H", 1)}
				>
					{p2Gameboard.H[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("H", 2)}
				>
					{p2Gameboard.H[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("H", 3)}
				>
					{p2Gameboard.H[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("H", 4)}
				>
					{p2Gameboard.H[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("H", 5)}
				>
					{p2Gameboard.H[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("H", 6)}
				>
					{p2Gameboard.H[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("H", 7)}
				>
					{p2Gameboard.H[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("H", 8)}
				>
					{p2Gameboard.H[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("H", 9)}
				>
					{p2Gameboard.H[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("I", 0)}
				>
					{p2Gameboard.I[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("I", 1)}
				>
					{p2Gameboard.I[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("I", 2)}
				>
					{p2Gameboard.I[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("I", 3)}
				>
					{p2Gameboard.I[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("I", 4)}
				>
					{p2Gameboard.I[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("I", 5)}
				>
					{p2Gameboard.I[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("I", 6)}
				>
					{p2Gameboard.I[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("I", 7)}
				>
					{p2Gameboard.I[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("I", 8)}
				>
					{p2Gameboard.I[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("I", 9)}
				>
					{p2Gameboard.I[9]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("J", 0)}
				>
					{p2Gameboard.J[0]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("J", 1)}
				>
					{p2Gameboard.J[1]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("J", 2)}
				>
					{p2Gameboard.J[2]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("J", 3)}
				>
					{p2Gameboard.J[3]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("J", 4)}
				>
					{p2Gameboard.J[4]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("J", 5)}
				>
					{p2Gameboard.J[5]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("J", 6)}
				>
					{p2Gameboard.J[6]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("J", 7)}
				>
					{p2Gameboard.J[7]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("J", 8)}
				>
					{p2Gameboard.J[8]}
				</div>
				<div
					type="button"
					className="p1-cell"
					onClick={() => handleP2Click("J", 9)}
				>
					{p2Gameboard.J[9]}
				</div>
			</div>
		</div>
	);
}
