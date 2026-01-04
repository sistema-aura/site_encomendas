import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyADKtlqJ-_Cb-ty1rT6gTjLw6BX5gA5JnY",
  authDomain: "encomendas-aura.firebaseapp.com",
  projectId: "encomendas-aura",
  storageBucket: "encomendas-aura.firebasestorage.app",
  messagingSenderId: "552913969297",
  appId: "1:552913969297:web:f863b73e3d0caeeafddf30",
  databaseURL: "https://encomendas-aura-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, push };
