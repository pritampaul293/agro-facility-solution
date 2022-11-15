import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";

const initializeAuthenticaiton = () => {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
};
export default initializeAuthenticaiton;

