const getState = ({ getStore, getActions, setStore }) => {

  return {

          //STORE (to store information)

    store: {
      // URLbase: process.env.BACKEND_URL,

      user: JSON.parse(localStorage.getItem("user")) || {},
      isLoggedIn: JSON.parse(localStorage.getItem("user")) || false,
      token: localStorage.getItem("token") || null,
      usersbooks: [],
      users: [],
      books: [],
      book: [],
      favorite: [],
      rating: [],
    },


            //ACTIONS (are called via appContext)

    actions: {


      // REGISTRATION (INSIDE /SIGNUP) AND LOGIN USER

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


      // EDIT INFORMATION


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

      

      // FETCH BOOK & BOOKS (GET METHOD)


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



            // FETCH USER & USERS (GET METHOD)

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

    
      fetchUser: (user_id) => {
  
        const store = getStore();
        fetch("https://3001-heylga-finalproject-bp583guewdt.ws-eu47.gitpod.io" + "/api/user/" + user_id, 
        {
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
          // .then(response => response.json())
          // .then(result => console.log(result))
          // .catch(error => console.log('error', error));
      },

  
      addReview: (rating) => {
        const store = getStore();
      },




    },
  };
};

export default getState;
