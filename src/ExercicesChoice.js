// Cette coomposant contient la liste des exercices proposés
import React from "react";

const ExerciceChoice = ({ muscleName, onChange, value }) => {
	let hamstring = ["", "Soulevé de terre", "Soulevé de terre jambes tendues", "Flexion de jambes"];
	let quadriceps = ["", "Squat", "Presse à cuisses", "Fentes", "Squat bulgare", "Extension de jambes"];
	let chest = [
		"",
		"Développé couché à la barre",
		"Développé couché aux haltères",
		"Développé couche à la machine",
		"Dips",
		"Pompes au sol",
	];
	let back = [
		"",
		"Tractions",
		"Tirage vertical",
		"Rowing barre",
		"Rowing haltères",
		"Rowing inversé",
		"Tirage poulie basse",
	];
	let shoulders = [
		"",
		"Développé millitaire",
		"Développé haltères",
		"Rowing menton",
		"Elevations latérales",
		"Elevations postérieures",
		"Facepull",
	];
	let biceps = [
		"",
		"Curl barre",
		"Curl haltère",
		"Curl pupitre",
		"Curl inversé",
		"Curl incliné",
		"Curl à la machine",
	];
	let triceps = [
		"",
		"Barre au front",
		"Extension nuque",
		"Kick back",
		"Extension poulie haute",
		"Développé couché sérré",
	];
	let abs = [
		"",
		"Crunch au sol",
		"Relevés de bassin sur plan incliné",
		"Sit-up",
		"Relevés de genoux",
		"Relevés de jambes",
		"Crunch à la poulie haute",
		"Flexions du buste à la machine",
		"Roue abdominale",
	];
	//let lower_back = ["", "Extensions au banc", "Good morning"];

	let exercices;
	switch (muscleName) {
		case "hamstringA":
		case "hamstringB":
			exercices = hamstring;
			break;

		case "quadricepsA":
		case "quadricepsB":
			exercices = quadriceps;
			break;

		case "chestA":
		case "chestB":
			exercices = chest;
			break;

		case "backA":
		case "backB":
			exercices = back;
			break;

		case "shouldersA":
		case "shouldersB":
			exercices = shoulders;
			break;

		case "bicepsA":
		case "bicepsB":
			exercices = biceps;
			break;

		case "tricepsA":
		case "tricepsB":
			exercices = triceps;
			break;

		case "absA":
		case "absB":
			exercices = abs;
			break;

		default:
			exercices = "x";
			break;
	}

	var select = [];
	for (let i = 0; i < exercices.length; i++) {
		select.push(
			<option value={exercices[i]} key={i}>
				{exercices[i]}
			</option>
		);
	}

	return (
		<div className={muscleName}>
			<select name={muscleName} id={muscleName + "-select"} className="select" value={value} onChange={onChange}>
				{select}
			</select>
		</div>
	);
};
export default ExerciceChoice;
