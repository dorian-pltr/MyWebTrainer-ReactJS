/* Ce composant permet l'affichage et la gestion des boutons de navigation */

import React, { Component } from "react";
import Vignette from "./Vignette";

class ComfirmFrequency extends Component {
	ComfirmFrequency2() {
		let type = this.props.type;
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
		return (
			<div>
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
		);
	}

	render() {
		return this.ComfirmFrequency2;
	}
}

export default ComfirmFrequency;
