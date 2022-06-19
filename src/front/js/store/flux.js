

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			isLoggedIn: false,
			accessToken: null,
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
					process.env.BACKEND_URL + "/api/login",
					post
				)

					.then((response) => response.json())
					.then((result) => {
						console.log('result from actions', result)
						setStore({
							user: result?.user,
							accessToken: result?.access_token,
							isLoggedIn: true,
						})

						localStorage.setItem("Token", getStore().accessToken)
						localStorage.setItem("User", getStore().user.email)

						console.log("info del user", getStore().user)
					})
					.catch((error) => console.log("error", error));
			},

			logout: () => {

				setStore({
					user: null,
					isLoggedIn: false,
					accessToken: null,
				})

				localStorage.removeItem("Token")
				localStorage.removeItem("User")

			},

			checklogin: () => {

				if (localStorage.getItem("Token") && localStorage.getItem("User"))
					setStore({
						user: localStorage.getItem("User"),
						isLoggedIn: true,
					})

			},

			getUserInformation: (id) => {
				console.log("getUserInformation");
				const store = getStore();

				fetch(
					process.env.BACKEND_URL + "/api/login/" + id, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					})
					.then((response) => response.json())
					.then((result) => {
						setStore({ user: result.results });
						console.log ("USER ==== ", store.user)
					})
					.catch((error) => console.log("error", error));

					if (localStorage.getItem("Token") && localStorage.getItem("User"))
					setStore({
						user: localStorage.getItem("User"),
						isLoggedIn: true,
					})
			},



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
