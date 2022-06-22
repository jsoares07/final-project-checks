const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      books: [],
      book: [],
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
      // Use getActions to call a function within a fuction
      fetchBooks: () => {
        fetch(process.env.BACKEND_URL + "/api/books", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((promiseResponse) => promiseResponse.json())
          .then((data) => setStore({ books: data.results }));
      },

      fetchBook: (book_id) => {
        console.log("fechtBook");
        const store = getStore();
        fetch(process.env.BACKEND_URL + "/api/book/" + book_id, {
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
        fetch(process.env.BACKEND_URL + "/api/hello")
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
