import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "30042af8ac084e6e8cf0e1746d36318f",
  },
});
