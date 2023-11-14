import axios from "axios";

const temp = "http://localhost:80";


// local vue api axios instance
function localAxios() {
  console.log(temp);
  const instance = axios.create({
    baseURL: temp,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  return instance;
}

export { localAxios };
