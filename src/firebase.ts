import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCMlSrWS5msdk22xMUN3zGffjcSavVAnO4",
    authDomain: "orhun-s-calendar.firebaseapp.com",
    databaseURL: "https://orhun-s-calendar-default-rtdb.firebaseio.com",
    projectId: "orhun-s-calendar",
    storageBucket: "orhun-s-calendar.firebasestorage.app",
    messagingSenderId: "118549115001",
    appId: "1:118549115001:web:a6643ec42d81759b18a4a8"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);