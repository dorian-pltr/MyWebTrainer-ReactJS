/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Vignette from "./Vignette";
import ComfirmFrequency from "./ConfirmFrequency";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			hoverFreq: [false, false, false],
			hover: false,
		};
	}

	// Méthode pour gérer la souris sur les vignettes de choix de fréquence
	toggleHoverFreq(i) {
		let hoverFreqCopy = this.state.hoverFreq;
		hoverFreqCopy[i] = !hoverFreqCopy[i];
		this.setState({ hoverFreq: hoverFreqCopy });
	}
	// Méthode pour gérer la souris sur une vignette
	toggleHover() {
		let hoverCopy = !this.state.hover;
		this.setState({ hover: hoverCopy });
	}

	ChoixProgramme(type) {
		let programme;
		console.log("ChoixClique", type);
		switch (type) {
			case "1 à 3 fois par semaine":
				programme = ["FullBody", "à entrainer tout vos muscles à chaque séances"];
				break;
			case "4 fois par semaine":
				programme = [
					"HalfBody",
					"à dédier deux séances d'entrainement aux muscles du haut de votre corps, et deux séances au bas de votre corps",
				];
				break;
			case "+ de 5 fois par semaine":
				programme = ["Split", "à entrainer un groupe musculaire différent à chaque séance"];
				break;
		}
		ReactDOM.render(this.formatsEntrainement(programme, type), document.getElementById("monProgramme"));
	}

	formatsEntrainement(programme, type) {
		return (
			<div>
				<h4>Laissez vous guider - étape 2/4</h4>
				<h5>Mon format d'entrainement</h5>
				<div id="choixProgramme">
					<p>
						Vous avez choisi de vous entrainer {type}, votre coach vous recommande un programme de type{" "}
						<b>{programme[0]}</b>.<br />
						Ce programme d'entrainement consiste {programme[1]}.
					</p>
					<Vignette
						className={"programme_" + this.state.hover}
						text="Je construis mon programme"
						onClick={() => this.ProgrammeClique(programme[0])}
						onMouseEnter={() => this.toggleHover()}
						onMouseLeave={() => this.toggleHover()}
					/>
				</div>
			</div>
		);
	}

	// Méthode pour gérer le clique sur le bouton "Je construis mon programme"
	ProgrammeClique(type) {
		console.log("ProgrammeClique", type);
	}

	//Méthode pour afficher le panel de choix de fréquence d'entrainement
	ChoixFrequence() {
		// eslint-disable-next-line no-unused-vars
		return (
			<div>
				<h4>Laissez vous guider - étape 1/4</h4>
				<h5>Ma fréquence d'entrainement</h5>
				<div id="choixFrequence">
					<Vignette
						className={"frequence_" + this.state.hoverFreq[0]}
						text="1 à 3 fois par semaine"
						onClick={() => this.ChoixProgramme("1 à 3 fois par semaine")}
						onMouseEnter={() => this.toggleHoverFreq(0)}
						onMouseLeave={() => this.toggleHoverFreq(0)}
					/>
					<Vignette
						className={"frequence_" + this.state.hoverFreq[1]}
						text="4 fois par semaine"
						onClick={() => this.ChoixProgramme("4 fois par semaine")}
						onMouseEnter={() => this.toggleHoverFreq(1)}
						onMouseLeave={() => this.toggleHoverFreq(1)}
					/>
					<Vignette
						className={"frequence_" + this.state.hoverFreq[2]}
						text="+ de 5 fois par semaine"
						onClick={() => this.ChoixProgramme("+ de 5 fois par semaine")}
						onMouseEnter={() => this.toggleHoverFreq(2)}
						onMouseLeave={() => this.toggleHoverFreq(2)}
					/>
				</div>
			</div>
		);
	}

	render() {
		return this.ChoixFrequence();
	}
}

export default App;
