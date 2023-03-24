import Form from "../components/Form";

import jsonForm from "../db";
import db from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { renderFormElement } from "../utils/renderFormElements";
import Spinner from "../components/Spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

const EncuestaForm = () => {
  const [formInfo, setFormInfo] = useState({
    loading: null,
    isSurveyCreated: null,
  });
  const navigate = useNavigate();
  const handleSubmit = async (formData) => {
    try {
      setFormInfo({ loading: true });
      const docRef = await addDoc(collection(db, "encuesta"), formData);
      setFormInfo({
        loading: false,
        isSurveyCreated: (
          <Modal
            title="Encuesta creada corréctamente"
            description="Tu encuesta fué almacenada en nuestra base de datos"
            labelButton="Ver encuestas"
            onClickButton={() => navigate("/encuestas")}
          />
        ),
      });
    } catch (e) {
      <Modal
        title="Encuesta no creada"
        description="Ocurrió un error al crear tu encuesta"
        labelButton="Intentar nuevamente"
        onClickButton={() => window.location.reload()}
      />;
    }
  };
  return (
    <div className="container">
      {formInfo.loading && <Spinner />}
      {formInfo.isSurveyCreated}
      <h1>Encuesta</h1>
      <Form onSubmit={handleSubmit}>
        {jsonForm.items.map((item) => renderFormElement(item))}
      </Form>
    </div>
  );
};
export default EncuestaForm;
