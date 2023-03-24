import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase-config";
import jsonForm from "../../db";

import styles from "./index.module.scss";
import { translateKeys } from "../../utils/translateKeys";
import Survey from "./Survey";

const ListOfSurveys = () => {
  const [surveys, setSurveys] = useState([]);

  const setData = async () => {
    let surveys = await getDocs(collection(db, "encuesta"));
    const dictionary = {};
    jsonForm.items.forEach(({ name, label }) => (dictionary[name] = label));
    surveys = surveys.docs.map((doc) => translateKeys(doc.data(), dictionary));

    setSurveys(surveys);
  };

  useEffect(() => {
    setData();
  }, []);
  return (
    <ul className={styles.accordeonList}>
      {surveys.length > 0 ? (
        surveys.map((survey, i) => <Survey key={i} survey={survey} />)
      ) : (
        <p>Cargando...</p>
      )}
    </ul>
  );
};
export default ListOfSurveys;
