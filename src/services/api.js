const getStudents = async () => {
	// configurer la requête HTTP
	const requestInfos = new Request("http://localhost:3000/students", {
		method: "get",
	});

	// exécuter la requête HTTP
	const request = await fetch(requestInfos);

	// récupérer la réponse HTTP
	const response = await request.json();

	// renvoyer la réponse
	return response;
};

export { getStudents };
