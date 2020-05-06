/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import Button from "./Button";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			hoverFew: [false, false, false],
			hover: false,
			frequencyChosen: "empty",
			programChosen: "empty",
			programDescription: "empty",
			step1of4: true,
			step2of4: false,
			step3of4: false,
		};
	}

	// Méthode pour gérer la souris sur plusierus "buttons"
	toggleHoverFew(i) {
		let hoverFewCopy = this.state.hoverFew;
		hoverFewCopy[i] = !hoverFewCopy[i];
		this.setState({ hoverFew: hoverFewCopy });
	}
	// Méthode pour gérer la souris sur un "button"
	toggleHover() {
		let hoverCopy = !this.state.hover;
		this.setState({ hover: hoverCopy });
	}

	// Méthode pour afficher le panel de choix de fréquence d'entrainement
	FrequencyChoose() {
		// eslint-disable-next-line no-unused-vars
		return (
			<div>
				<h4>Laissez vous guider - étape 1/4</h4>
				<h5>Je choisi ma fréquence d'entrainement</h5>
				<div id="frequencyChoose">
					<Button
						className={"button_" + this.state.hoverFew[0]}
						text="1 à 3 fois par semaine"
						onClick={() => this.ProgramsList("1 à 3 fois par semaine")}
						onMouseEnter={() => this.toggleHoverFew(0)}
						onMouseLeave={() => this.toggleHoverFew(0)}
					/>
					<Button
						className={"button_" + this.state.hoverFew[1]}
						text="4 fois par semaine"
						onClick={() => this.ProgramsList("4 fois par semaine")}
						onMouseEnter={() => this.toggleHoverFew(1)}
						onMouseLeave={() => this.toggleHoverFew(1)}
					/>
					<Button
						className={"button_" + this.state.hoverFew[2]}
						text="+ de 5 fois par semaine"
						onClick={() => this.ProgramsList("+ de 5 fois par semaine")}
						onMouseEnter={() => this.toggleHoverFew(2)}
						onMouseLeave={() => this.toggleHoverFew(2)}
					/>
				</div>
			</div>
		);
	}

	/* Méthode contenant les types de programmes d'entrainement, retourne le programme
	et sa description selon le choix de l'user à la méthode ProgramComfirm */
	ProgramsList(frequency) {
		this.setState({ frequencyChosen: frequency });
		switch (frequency) {
			case "1 à 3 fois par semaine":
				this.setState({
					programChosen: "FullBody",
					programDescription: "entrainer tout vos muscles à chaque séances",
				});
				break;
			case "4 fois par semaine":
				this.setState({
					programChosen: "HalfBody",
					programDescription:
						"dédier deux séances d'entrainement aux muscles du haut de votre corps, et deux séances au bas de votre corps",
				});
				break;
			case "+ de 5 fois par semaine":
				this.setState({
					programChosen: "Split",
					programDescription: "entrainer un groupe musculaire différent à chaque séance",
				});
				break;
			default:
		}
		this.setState({ step1of4: false, step2of4: true, hoverFew: [false, false, false] });
	}

	// Méthode permettant d'afficher la page de confirmation du type de programme
	ProgramComfirm() {
		let programDescripton = this.state.programDescription;
		let frequencyChosen = this.state.frequencyChosen;
		return (
			<div>
				<h4>Laissez vous guider - étape 2/4</h4>
				<h5>Je confirme mon format d'entrainement</h5>
				<p>
					Vous avez choisi de vous entrainer {frequencyChosen}, votre coach vous recommande un programme de type{" "}
					<b>{this.state.programChosen}</b>.<br />
					Ce programme consiste à {programDescripton}.
				</p>
				<div id="programComfirm">
					<Button
						className={"button_" + this.state.hoverFew[0]}
						text="Retour"
						onClick={() => this.setState({ step1of4: true, step2of4: false, hoverFew: [false, false, false] })}
						onMouseEnter={() => this.toggleHoverFew(0)}
						onMouseLeave={() => this.toggleHoverFew(0)}
					/>
					<Button
						className={"button_" + this.state.hoverFew[1]}
						text="Je construis mon programme"
						onClick={() => this.setState({ step2of4: false, step3of4: true })}
						onMouseEnter={() => this.toggleHoverFew(1)}
						onMouseLeave={() => this.toggleHoverFew(1)}
					/>
				</div>
			</div>
		);
	}

	// Méthode pour afficher la page de création du programme personnalisé
	ProgramCreation() {
		return (
			<div>
				<h4>Laissez vous guider - étape 3/4</h4>
				<h5>Je crée mon programme d'entrainement</h5>
				<div id="choixProgramme">
					<p>
						Le format d'entrainement proposé par votre coach est le {this.state.programChosen} <br />
					</p>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.state.step1of4 ? this.FrequencyChoose() : null}
				{this.state.step2of4 ? this.ProgramComfirm() : null}
				{this.state.step3of4 ? this.ProgramCreation() : null}
			</div>
		);
	}
}

export default App;
