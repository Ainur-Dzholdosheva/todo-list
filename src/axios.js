import axios from "axios";

const instance = axios.create();
instance.defaults.baseUrl = "https://todo-list-a3037.firebaseio.com/";
export default instance;
