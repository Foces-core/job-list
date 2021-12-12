import {firestore} from './firebase';
import { collection, getDocs } from "firebase/firestore";

const getFruits = async () => {
    const querySnapshot = await getDocs(collection(firestore, "fruits"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
});

}

export {getFruits }