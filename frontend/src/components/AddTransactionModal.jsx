import { useState } from "react";
import "../styles/AddTransactionModal.css";

const AddTransactionModal = ({ showModal, setShowModal }) => {
  const [type, setType] = useState("");
  const [btnE, setBtnE] = useState({});
  const [btnO, setBtnO] = useState({});

  const handleType = (type) => {
    setType(type);

    if (type === "entrada") {
      setBtnE({ background: "#3A9FF1" });
      setBtnO({ background: "#b9b9b9" });
    } else if (type === "retirada") {
      setBtnE({ background: "#b9b9b9" });
      setBtnO({ background: "#FF576B" });
    }
  };

  const colorEntries = () => {};

  console.log(type);

  return (
    <>
      {showModal && (
        <div className="external-modal-container">
          <div className="internal-modal-container">
            <div className="modal-container-title">
              <h1>Adicionar Registro</h1>
              <button onClick={() => setShowModal(false)}></button>
            </div>

            <div className="modal-container-buttons">
              <button
                value={type}
                name="entrada"
                onClick={() => handleType("entrada")}
                style={btnE}
              >
                Entrada
              </button>
              <button
                value={type}
                name="retirada"
                onClick={() => handleType("retirada")}
                style={btnO}
              >
                Saída
              </button>
            </div>

            <form>
              <label>
                <span>Valor</span>
                <input
                  className="input-modal"
                  type="number"
                  name="value"
                  min="1"
                />
              </label>

              <label>
                <span>Categoria</span>
                <select className="input-modal" name="category">
                  <option value="Alimentação">Alimentação</option>
                  <option value="Assinaturas e Serviços">
                    Assinaturas e Serviços
                  </option>
                  <option value="Casa">Casa</option>
                  <option value="Compras">Compras</option>
                  <option value="Cuidados pessoais">Cuidados pessoais</option>
                  <option value="Educação">Educação</option>
                </select>
              </label>

              <label>
                <span>Data</span>
                <input className="input-modal" type="date" name="date" />
              </label>

              <label>
                <span>Descrição</span>
                <input className="input-modal" type="text" name="description" />
              </label>

              <label>
                <input
                  className="input-submit-modal"
                  type="submit"
                  value="Confirmar"
                />
              </label>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTransactionModal;
