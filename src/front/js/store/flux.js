const getState = ({ getStore, getActions, setStore }) => {

  return {
    store: {
      URLbase: process.env.BACKEND_URL,

      user: JSON.parse(localStorage.getItem("user")) || {},
      isLoggedIn: JSON.parse(localStorage.getItem("user")) || false,
      token: localStorage.getItem("token") || null,
      message: null,
      usersbooks: [],
      users: [],
      books: [],
      book: [],
      favorite: [],
      rating: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {


      // USERS

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
          // process.env.BACKEND_URL + "/api/login/",
          "https://3001-heylga-finalproject-bp583guewdt.ws-eu47.gitpod.io" + "/api/login/",
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
          .catch((error) => alert("the password or email are wrong"));
      },

      logout: () => {

        setStore({
          user: null,
          isLoggedIn: false,
          token: null,
        })

        localStorage.removeItem("token")
        localStorage.removeItem("email")
        localStorage.removeItem("user")
        localStorage.removeItem("name")
        localStorage.removeItem("city")

      },

      // editUserInformation: async (user) => {
      //   const id = user.id
      //   const response = await fetch(  
      //   process.env.BACKEND_URL + "/api/edit-profile/" + `${user.id}` ,
      //   {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json",
      //        Accept: "application/json",
      //     },
      //       body: JSON.stringify(user),
      //   })

      //   if (response) {
      //     alert("The info has been saved");
      //   } else {
      //     alert("The info has NOT been saved");
      //   }
      // },

      editUserInformation: (user_id) => {
        const put = {
          method: 'PUT',
          headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user_id),
      };
    
      console.log("info login desde las actions", put);
        
        fetch(process.env.BACKEND_URL + "/api/edit-profile/" + user_id, put)
          .then(response => response.text())
          .then(result =>  console.log('>>>> result from actions', result))
          .catch(error => console.log('error', error));
      },

 
      changePassword: (user_id) => {
        const put = {
          method: 'PUT',
          headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user_id),
      };
    
      console.log("info login desde las actions", put);
        
        fetch(process.env.BACKEND_URL + "/api/security", put)
          .then(response => response.text())
          .then(result =>  console.log('>>>> result from actions', result))
          .catch(error => console.log('error', error));
      },

      addReview: (rating) => {
        const store = getStore();
        // const validate = store.rating.includes(item);
        // if (store.rating == [] || !validate) {
        //   setStore({ rating: [...store.rating, item] });
        // }
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

      // BOOKS
      fetchUsersBooks: () => {
        fetch("https://3001-heylga-finalproject-bp583guewdt.ws-eu47.gitpod.io"+ "/api/booksbyuser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((promiseResponse) => promiseResponse.json())
          .then((data) => setStore({ usersbooks: data.results }));
      },

      // FetchOfferBook: (book_id) => {
      //   fetch(process.env.BACKEND_URL + "api/offerbook" + book_id, post, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       title: title,
      //       author: author,
      //       publisher: publisher,
      //       genre: helloo,
      //       language: helloo,
      //       description: description,
      //       owner_id: owner_id,
      //     }),
      //   })

      //     .then((response) => response.text())
      //     .then((result) => console.log(result))
      //     .catch((error) => console.log("error", error));
      // },

      fetchUsers: () => {
        // fetch(process.env.BACKEND_URL + "/api/users", {
          fetch("https://3001-heylga-finalproject-bp583guewdt.ws-eu47.gitpod.io" + "/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((promiseResponse) => promiseResponse.json())
          .then((data) => setStore({ users: data.results }));
      },
      
      fetchBooks: () => {
        // fetch(process.env.BACKEND_URL + "/api/books", {
          fetch("https://3001-heylga-finalproject-bp583guewdt.ws-eu47.gitpod.io" + "/api/books", 
          {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((promiseResponse) => promiseResponse.json())
          .then((data) => setStore({ books: data.results }));
      },


      fetchUser: (user_id) => {
        console.log("fechtBook");
        const store = getStore();
        fetch("https://3001-heylga-finalproject-bp583guewdt.ws-eu47.gitpod.io" + "/api/user/" + user_id, {

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            setStore({ user: result.results });
            console.log("USER =====", store.user);
          })
          .catch((error) => console.log("error", error));
      },

      fetchBook: (book_id) => {
        console.log("fechtBook");
        const store = getStore();
        fetch("https://3001-heylga-finalproject-bp583guewdt.ws-eu47.gitpod.io" + "/api/book/" + book_id, {

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            setStore({ book: result.results });
            console.log("BOOK =====", store.book);
          })
          .catch((error) => console.log("error", error));
        // .then((promiseResponse) => {
        //   promiseResponse.json();
        //   console.log("resp =", promiseResponse);
        // })
        // .then((data) => setStore({ book: data.results }))
        // .catch((error) =>
        //   console.log("Error loading message from backend", error)
        // );
      },
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        // fetching data from the backend
        fetch("https://3001-heylga-finalproject-bp583guewdt.ws-eu47.gitpod.io" + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
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
      },
    },
  };
};

export default getState;
