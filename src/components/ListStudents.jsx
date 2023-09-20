import { useState, useEffect } from "react";
import { getStudents } from "../services/api";

const ListStudents = () => {
	// état pour stocker les données de l'API
	const [students, setStudents] = useState([]);

	// exécuter la requête HTTP au premier affichage du composant
	useEffect(() => {
		// récupérer les étudiants à partir de l'API
		getStudents().then((values) => setStudents(values.data));
	}, []);

	return (
		<>
			<h2>Liste des étudiants</h2>

			{students.map((value) => (
				<p>
					{value.firstname} {value.lastname}
				</p>
			))}
		</>
	);
};

export default ListStudents;
