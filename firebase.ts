import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDuYfJVp7OOVGvwjwy3vwuCtutTsplkzXM",
	authDomain: "chatgpt-messenger-4dbac.firebaseapp.com",
	projectId: "chatgpt-messenger-4dbac",
	storageBucket: "chatgpt-messenger-4dbac.appspot.com",
	messagingSenderId: "568760721946",
	appId: "1:568760721946:web:8db8b2b8fc25ee830f27a3",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
