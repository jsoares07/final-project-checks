

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URLbase: process.env.BACKEND_URL,
			user: JSON.parse(localStorage.getItem("user")) || {},
			isLoggedIn: JSON.parse(localStorage.getItem("user")) || false,
			token: localStorage.getItem("token") || null,
			favorite: [],
		},
		actions: {

			login: (email, password) => {
				// fetch
				const post = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
						password: password,
					}),
				};

				console.log("info login desde las actions", post);

				fetch(
					process.env.BACKEND_URL + "/api/login/",
					post
				)

					.then((response) => response.json())
					.then((result) => {
						console.log('>>>> result from actions', result)
						setStore({
							user: result?.user,
							token: result?.token,
							isLoggedIn: true,
						})


						localStorage.setItem("user", JSON.stringify(result.user))
						localStorage.setItem("token", result.token)

						console.log("info del user desde local storage---->>>>", JSON.parse(localStorage.getItem("user")))
					})
					.catch((error) => console.log("error", error));
			},

			logout: () => {

				setStore({
					user: null,
					isLoggedIn: false,
					token: null,
				})

				localStorage.removeItem("token")
				localStorage.removeItem("user")
				localStorage.removeItem("user_name")
				localStorage.removeItem("first_name")
				localStorage.removeItem("user_name")
				localStorage.removeItem("city")

			},

		// editUserInformation: () => {

		// 		const store = getStore();

		// 		fetch(
		// 			process.env.BACKEND_URL + "/api/edit-profile/" + user, {
		// 				method: "PUT",
		// 				headers: {
		// 					"Content-Type": "application/json",
		// 					 Accept: "application/json",
		// 				},
		// 				body: JSON.stringify(),
		// 			})
		// 			if (response.ok) {
		// 				alert("The info has been saved");
		// 			  } else {
		// 				alert("The info has NOT been saved");
		// 			  }
		// 	},



			// obtainUserInformation: async () => {
			// 	const response = await fetch(getStore().process.env.BACKEND_URL + "/profile", {
			// 	  headers: {
			// 		"Content-Type": "application/json",
			// 		Accept: "application/json",
			// 		Authorization: `${localStorage.getItem("token")}`,
			// 	  },
			// 	});
			// 	const data = await response.json();
			// 	setStore({ profile: data.results });
			//   },


	

			// loadData: () => {
			// 	fetch(`${URLbase}/api/signup`)
			// 		.then(response => response.json())
			// 		.then(data => setStore({ user: data.results }))
			// 		.catch(error => console.error(error));
			// },



			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},


			addFavorite: item => {
				const store = getStore();
				const validate = store.favorite.includes(item);
				if (store.favorite == [] || !validate) {
					setStore({ favorite: [...store.favorite, item] });
				}
			},

			deleteFavorite: id => {
				const store = getStore();
				const updatedList = [...store.favorite];
				updatedList.splice(id, 1);
				setStore({ favorite: [...updatedList] });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
