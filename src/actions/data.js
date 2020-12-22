import axios from "axios";

export function requestDataFromApi() {
  return (dispatch) => {
    return axios
      .get(
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
      )
      .then((res) => dispatch({ type: "GET_DATA", payload: res.data }))
      .catch((err) => {
        console.log(err);
      });
  };
}
