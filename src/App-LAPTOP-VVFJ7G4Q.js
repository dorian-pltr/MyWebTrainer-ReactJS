/* eslint-disable no-case-declarations */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import Button from "./Button";
import ExercicesChoice from "./ExercicesChoice";
import "./App.css";
import jsPDF from "jspdf";

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
			step4of4: false,
			fbExercicesA: ["", "", "", "", "", "", "", ""],
			fbExercicesB: ["", "", "", "", "", "", "", ""],
		};
		this.fullbodyExerciceChoice = this.fullbodyExerciceChoice.bind(this); // garantir le this dans notre méthode
		this.isProgramCompleted = this.isProgramCompleted.bind(this);
		this.fullBodyPDF = this.fullBodyPDF.bind(this);
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

	// Méthode permettant la création de fichiers PDF
	fullBodyPDF() {
		var doc = new jsPDF("p", "pt");

		doc.text(20, 20, "Mon programme d'entrainement");

		doc.setFont("helvetica");
		doc.setFontType("normal");
		doc.text(20, 200, "FullBody A");

		doc.setFont("helvetica");
		doc.setFontType("normal");
		doc.text(20, 400, "FullBody B");

		doc.save("demo.pdf");
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
				<h4>Laissez vous guider - étape 2/4</h4>
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
						onClick={() => this.setState({ step2of4: false, step3of4: true, hoverFew: [false, false, false] })}
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

	ProgramValidation() {
		return (
			<div>
				<h4>Laissez vous guider - étape 4/4</h4>
				<h5>Je valide mon format d'entrainement</h5>
				<div id="jsx-template">
					<p>
						<b>FullBody A</b>
					</p>
					<table>
						<tr>
							<td>
								<b>Muscles</b>
							</td>
							<td>Ischio-jambiers </td>
							<td>Quadriceps</td>
							<td>Pectoraux</td>
							<td>Dorsaux</td>
							<td>Epaules</td>
							<td>Biceps</td>
							<td>Triceps</td>
							<td>Abdominaux</td>
						</tr>
						<tr>
							<td>
								<b>Exercices</b>
							</td>
							<td>{this.state.fbExercicesA[0]}</td>
							<td>{this.state.fbExercicesA[1]}</td>
							<td>{this.state.fbExercicesA[2]}</td>
							<td>{this.state.fbExercicesA[3]}</td>
							<td>{this.state.fbExercicesA[4]}</td>
							<td>{this.state.fbExercicesA[5]}</td>
							<td>{this.state.fbExercicesA[6]}</td>
							<td>{this.state.fbExercicesA[7]}</td>
						</tr>
					</table>

					<p>
						<b>FullBody B</b>
					</p>
					<table>
						<tr>
							<td>
								<b>Muscles</b>
							</td>
							<td>Ischio-jambiers </td>
							<td>Quadriceps</td>
							<td>Pectoraux</td>
							<td>Dorsaux</td>
							<td>Epaules</td>
							<td>Biceps</td>
							<td>Triceps</td>
							<td>Abdominaux</td>
						</tr>
						<tr>
							<td>
								<b>Exercices</b>
							</td>
							<td>{this.state.fbExercicesB[0]}</td>
							<td>{this.state.fbExercicesB[1]}</td>
							<td>{this.state.fbExercicesB[2]}</td>
							<td>{this.state.fbExercicesB[3]}</td>
							<td>{this.state.fbExercicesB[4]}</td>
							<td>{this.state.fbExercicesB[5]}</td>
							<td>{this.state.fbExercicesB[6]}</td>
							<td>{this.state.fbExercicesB[7]}</td>
						</tr>
						<br></br>
					</table>
				</div>

				<div id="programComfirm">
					<Button
						className={"button_" + this.state.hoverFew[0]}
						text="Retour"
						onClick={() => this.setState({ step3of4: true, step4of4: false, hoverFew: [false, false, false] })}
						onMouseEnter={() => this.toggleHoverFew(0)}
						onMouseLeave={() => this.toggleHoverFew(0)}
					/>
					<Button
						className={"button_" + this.state.hoverFew[1]}
						text="Générer un fichier PDF"
						onClick={this.fullBodyPDF}
						onMouseEnter={() => this.toggleHoverFew(1)}
						onMouseLeave={() => this.toggleHoverFew(1)}
					/>
				</div>
			</div>
		);
	}

	fullbodyProgram() {
		return (
			<div>
				<h4>Laissez vous guider - étape 3/4</h4>
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
						<ExercicesChoice muscleName="hamstringA" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesA[0]}
						<p>Quadriceps et fessiers</p>
						<ExercicesChoice muscleName="quadricepsA" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesA[1]}
						<p>Pectoraux</p>
						<ExercicesChoice muscleName="chestA" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesA[2]}
						<p>Dorsaux</p>
						<ExercicesChoice muscleName="backA" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesA[3]}
						<p>Epaules</p>
						<ExercicesChoice muscleName="shouldersA" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesA[4]}
						<p>Biceps</p>
						<ExercicesChoice muscleName="bicepsA" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesA[5]}
						<p>Triceps</p>
						<ExercicesChoice muscleName="tricepsA" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesA[6]}
						<p>Abdos</p>
						<ExercicesChoice muscleName="absA" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesA[7]}
					</div>
					<div id="fullbody_B">
						<h5 className="center">Programme B</h5>
						<p>Ischio-jambiers</p>
						<ExercicesChoice muscleName="hamstringB" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesB[0]}
						<p>Quadriceps et fessiers</p>
						<ExercicesChoice muscleName="quadricepsB" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesB[1]}
						<p>Pectoraux</p>
						<ExercicesChoice muscleName="chestB" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesB[2]}
						<p>Dorsaux</p>
						<ExercicesChoice muscleName="backB" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesB[3]}
						<p>Epaules</p>
						<ExercicesChoice muscleName="shouldersB" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesB[4]}
						<p>Biceps</p>
						<ExercicesChoice muscleName="bicepsB" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesB[5]}
						<p>Triceps</p>
						<ExercicesChoice muscleName="tricepsB" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesB[6]}
						<p>Abdos</p>
						<ExercicesChoice muscleName="absB" onChange={this.fullbodyExerciceChoice} />
						Vous avez choisi : {this.state.fbExercicesB[7]}
					</div>
				</div>
				<div id="exercicesComfirm">
					<Button
						className={"button_" + this.state.hoverFew[0]}
						text="Retour"
						onClick={() => this.setState({ step2of4: true, step3of4: false, hoverFew: [false, false, false] })}
						onMouseEnter={() => this.toggleHoverFew(0)}
						onMouseLeave={() => this.toggleHoverFew(0)}
					/>
					<Button
						className={"button_" + this.state.hoverFew[1]}
						text="Je valide mon programme"
						onClick={this.isProgramCompleted}
						onMouseEnter={() => this.toggleHoverFew(1)}
						onMouseLeave={() => this.toggleHoverFew(1)}
					/>
				</div>
			</div>
		);
	}

	// Méthode permettant le choix des exercices FullBody
	fullbodyExerciceChoice(event) {
		let exercicesA = this.state.fbExercicesA;
		let exercicesB = this.state.fbExercicesB;

		switch (event.target.name) {
			case "hamstringA":
				exercicesA = this.state.fbExercicesA;
				exercicesA[0] = event.target.value;
				this.setState({ fbExercicesA: exercicesA });
				break;

			case "quadricepsA":
				exercicesA = this.state.fbExercicesA;
				exercicesA[1] = event.target.value;
				this.setState({ fbExercicesA: exercicesA });
				break;

			case "chestA":
				exercicesA = this.state.fbExercicesA;
				exercicesA[2] = event.target.value;
				this.setState({ fbExercicesA: exercicesA });
				break;

			case "backA":
				exercicesA = this.state.fbExercicesA;
				exercicesA[3] = event.target.value;
				this.setState({ fbExercicesA: exercicesA });
				break;

			case "shouldersA":
				exercicesA = this.state.fbExercicesA;
				exercicesA[4] = event.target.value;
				this.setState({ fbExercicesA: exercicesA });
				break;

			case "bicepsA":
				exercicesA = this.state.fbExercicesA;
				exercicesA[5] = event.target.value;
				this.setState({ fbExercicesA: exercicesA });
				break;

			case "tricepsA":
				exercicesA = this.state.fbExercicesA;
				exercicesA[6] = event.target.value;
				this.setState({ fbExercicesA: exercicesA });
				break;

			case "absA":
				exercicesA = this.state.fbExercicesA;
				exercicesA[7] = event.target.value;
				this.setState({ fbExercicesA: exercicesA });
				break;

			case "hamstringB":
				exercicesB = this.state.fbExercicesB;
				exercicesB[0] = event.target.value;
				this.setState({ fbExercicesB: exercicesB });
				break;

			case "quadricepsB":
				exercicesB = this.state.fbExercicesB;
				exercicesB[1] = event.target.value;
				this.setState({ fbExercicesB: exercicesB });
				break;

			case "chestB":
				exercicesB = this.state.fbExercicesB;
				exercicesB[2] = event.target.value;
				this.setState({ fbExercicesB: exercicesB });
				break;

			case "backB":
				exercicesB = this.state.fbExercicesB;
				exercicesB[3] = event.target.value;
				this.setState({ fbExercicesB: exercicesB });
				break;

			case "shouldersB":
				exercicesB = this.state.fbExercicesB;
				exercicesB[4] = event.target.value;
				this.setState({ fbExercicesB: exercicesB });
				break;

			case "bicepsB":
				exercicesB = this.state.fbExercicesB;
				exercicesB[5] = event.target.value;
				this.setState({ fbExercicesB: exercicesB });
				break;

			case "tricepsB":
				exercicesB = this.state.fbExercicesB;
				exercicesB[6] = event.target.value;
				this.setState({ fbExercicesB: exercicesB });
				break;

			case "absB":
				exercicesB = this.state.fbExercicesB;
				exercicesB[7] = event.target.value;
				this.setState({ fbExercicesB: exercicesB });
				break;

			default:
				break;
		}
	}

	halfbodyProgram() {
		return <em>Créer mon programme Halfbody, en cours de développement...</em>;
	}

	splitProgram() {
		return <em>Créer mon programme Split, en cours de développement...</em>;
	}

	isProgramCompleted() {
		for (var i = 0; i < this.state.fbExercicesA.length; i++) {
			if ("" === this.state.fbExercicesA[i]) {
				alert("Veuillez compléter la liste de vos exercices");
				break;
			} else if ("" === this.state.fbExercicesB[i]) {
				alert("Veuillez compléter la liste de vos exercices");
				break;
			} else this.setState({ step3of4: false, step4of4: true, hoverFew: [false, false, false] });
		}
	}

	render() {
		return (
			<div>
				{this.state.step1of4 && this.FrequencyChoose()}
				{this.state.step2of4 && this.ProgramComfirm()}
				{this.state.step3of4 && this.ProgramCreation()}
				{this.state.step4of4 && this.ProgramValidation()}
			</div>
		);
	}
}

export default App;
