import { firestore } from "./firebase";

const COLLECTION_CHANTIER = "chantiers";

const addChantier = (nom, compatriement, soustitre, titre, images) => {
  let chantier = {
    nom: nom,
    compatriement: compatriement,
    soustitre: soustitre,
    titre: titre,
    images: images,
  };
  firestore
    .collection(COLLECTION_CHANTIER)
    .add(chantier)
    .catch((err) => {
      throw err;
    });
};

const getAllChantiers = () => firestore.collection(COLLECTION_CHANTIER).get();

const getChantierById = (id) =>
  firestore.collection(COLLECTION_CHANTIER).doc(id).get();

export { addChantier, getAllChantiers, getChantierById };
