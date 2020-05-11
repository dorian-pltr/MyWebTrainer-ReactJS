/* Ce composant permet l'affichage et la gestion des boutons de navigation */

import React, { Component } from "react";

class Fullbody extends Component {
	xxx = () => {
		//-----
	};

	render() {
		return (
			<div>
				<h4>Laissez vous guider - étape 3/3</h4>
				<h5>Je crée mon programme d'entrainement</h5>
				<div>
					<p>
						Le format d'entrainement proposé par votre coach est le FullBody. Ce format se compose de deux
						programmes d'entrainement à réaliser selon votre disponibilité.
						<br />
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
					</p>
				</div>
				<div id="fullbody">
					<div id="fullbody_A">
						<h5 className="center">Programme A</h5>
						<b>Exercices poly-articulaires</b>
						<p>Ischio-jambiers</p>
						<select name="ischio-jambiers" id="ischio-jambiers-select">
							<option value=""></option>
							<option value="xx">xx</option>
						</select>
						<p>Quadriceps</p>
						<p>Pectoraux</p>
						<p>Dorsaux</p>
						<b>Exercices mono-articulaires</b>
						<p>Epaules</p>
						<p>Biceps</p>
						<p>Triceps</p>
						<p>Abdos/lombaires</p>
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
}

export default Fullbody;
