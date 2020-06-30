/* eslint-disable no-case-declarations */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import Button from "./Button";
import ExercicesChoice from "./ExercicesChoice";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			hoverFew: [false, false, false],
			hover: false,
			frequencyChosen: "",
			programChosen: "",
			programDescription: "",
			step1of4: true,
			step2of4: false,
			step3of4: false,
			fbExercicesA: ["", "", "", "", "", "", "", ""],
			fbExercicesB: ["", "", "", "", "", "", "", ""],
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

	handleExerciceChoice(programmName, muscleName, exerciceName) {
		console.log(programmName, muscleName, exerciceName);
		if (programmName === "fullbodyA") {
			console.log("uh");
			if (muscleName === "hamstringA") {
				let exercice = this.state.fbExercicesA;
				exercice[0] = exerciceName;
				this.setState({ fbExercicesA: exercice });
				console.log("uh-uh");
			}
		}
	}

	// Méthode pour afficher le panel de choix de fréquence d'entrainement
	FrequencyChoose() {
		// eslint-disable-next-line no-unused-vars
		return (
			<div>
				<h4>Laissez vous guider - étape 1/3</h4>
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
					programDescription:
						"entrainer tout vos muscles à chaque séances. Il est idéal pour les débutants et pour les sportifs avec un emploi du temps chargé.",
				});
				break;
			case "4 fois par semaine":
				this.setState({
					programChosen: "HalfBody",
					programDescription:
						"dédier deux séances d'entrainement aux muscles du haut de votre corps, et deux séances au bas de votre corps. C'est le meilleur compromis pour les sportifs intermédiaires.",
				});
				break;
			case "+ de 5 fois par semaine":
				this.setState({
					programChosen: "Split",
					programDescription:
						"entrainer un groupe musculaire différent à chaque séance. Il est idéal pour les sportifs avancés, mais aussi pour les sportifs avec beaucoup de temps libre.",
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
				<h4>Laissez vous guider - étape 2/3</h4>
				<h5>Je confirme mon format d'entrainement</h5>
				<p>
					Vous avez choisi de vous entrainer {frequencyChosen}, votre coach vous recommande un programme de type{" "}
					<b>{this.state.programChosen}</b>.<br />
					Ce programme consiste à {programDescripton}
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
				{this.state.programChosen === "FullBody" && this.fullbodyProgram()}
				{this.state.programChosen === "HalfBody" && this.halfbodyProgram()}
				{this.state.programChosen === "Split" && this.splitProgram()}
			</div>
		);
	}

	fullbodyProgram() {
		return (
			<div>
				<h4>Laissez vous guider - étape 3/3</h4>
				<h5>Je crée mon programme d'entrainement</h5>
				<div>
					<p>
						Le format d'entrainement proposé par votre coach est le FullBody. Ce format se compose de deux
						programmes d'entrainement à réaliser selon votre disponibilité.
					</p>
					<ul>
						<li>
							Si vous vous entrainez une fois par semaine, vous devrez réaliser le programme A la première semaine,
							puis le programme B l'autre semaine.
						</li>
						<br />
						<li>
							Dans le cas ou vous vous entraineriez deux fois par semaine, vous feriez les programmes A et B chaque
							semaine.
						</li>
						<br />
						<li>
							Enfin, pour les plus motivés qui souhaitent s'entrainer trois fois par semaine, vous feriez les
							programmes A-B-A la première semaine et les programmes B-A-B la deuxième semaine.
						</li>
						<br />
					</ul>
					<h5>Assez parlé, créons votre programme d'entrainement!</h5>
				</div>
				<div id="fullbody">
					<div id="fullbody_A">
						<h5 className="center">Programme A</h5>
						<p>Ischio-jambiers</p>
						<ExercicesChoice
							muscleName="hamstringA"
							defaultValue={this.state.fbExercicesA[0]}
							onChange={() =>
								this.handleExerciceChoice({
									programmName: "fullbodyA",
									muscleName: "hamstringA",
									exerciceName: "test",
								})
							}
						/>
						<p>Quadriceps et fessiers</p>
						<ExercicesChoice muscleName="quadricepsA" />
						<p>Pectoraux</p>
						<ExercicesChoice muscleName="chestA" />
						<p>Dorsaux</p>
						<ExercicesChoice muscleName="backA" />
						<p>Epaules</p>
						<ExercicesChoice muscleName="shouldersA" />
						<p>Biceps</p>
						<ExercicesChoice muscleName="bicepsA" />
						<p>Triceps</p>
						<ExercicesChoice muscleName="tricepsA" />
						<p>Abdos</p>
						<ExercicesChoice muscleName="absA" />
					</div>
					<div id="fullbody_B">
						<h5 className="center">Programme B</h5>
						<p>
							Et nulla velit amet consectetur cillum incididunt cupidatat sunt. Laboris in dolor dolor adipisicing
							labore aute occaecat exercitation proident pariatur irure nisi. Voluptate sint ea qui do enim anim
							commodo aliquip laboris quis ad exercitation. Duis officia magna voluptate tempor magna magna velit
							pariatur adipisicing excepteur Lorem dolore. Do consequat ex Lorem aute aliqua proident consectetur qui
							non. Sunt occaecat magna excepteur ad anim sit. Anim nulla Lorem incididunt qui cillum incididunt.
							Occaecat mollit elit nisi mollit pariatur commodo irure Lorem adipisicing est nisi officia culpa
							officia. Minim exercitation sunt esse do deserunt dolore commodo qui ut mollit et ex pariatur. Lorem et
							nulla cillum nisi cupidatat cillum. Non duis proident sunt ullamco elit dolor amet. Nulla id esse in eu
							laborum deserunt ex magna nulla. Magna exercitation qui cupidatat magna.
						</p>
					</div>
				</div>
			</div>
		);
	}

	halfbodyProgram() {
		return <em>Créer mon programme Halfbody, en cours de développement...</em>;
	}

	splitProgram() {
		return <em>Créer mon programme Split, en cours de développement...</em>;
	}

	render() {
		return (
			<div>
				{this.state.step1of4 && this.FrequencyChoose()}
				{this.state.step2of4 && this.ProgramComfirm()}
				{this.state.step3of4 && this.ProgramCreation()}
			</div>
		);
	}
}

export default App;
