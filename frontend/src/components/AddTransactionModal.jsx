import { useEffect, useState } from "react";
import "../styles/AddTransactionModal.css";

const AddTransactionModal = ({
  showModal,
  setShowModal,
  user,
  userState,
  setUserState,
  toGoEdit,
  dataTransaction,
  modalType,
}) => {
  const [type, setType] = useState("retirada");
  const [btnE, setBtnE] = useState({ background: "#b9b9b9" });
  const [btnO, setBtnO] = useState({ background: "#FF576B" });
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(""); // 20 23-09-01
  const [description, setDescription] = useState("");

  useEffect(() => {
    let localUser = JSON.stringify(userState);
    localStorage.setItem(`${userState.email}`, localUser);
  }, [userState]);

  const setId = () => {
    if (type === "entrada") return `E${Math.floor(Math.random() * 100)}`;
    if (type === "retirada") return `S${Math.floor(Math.random() * 100)}`;
  };

  const findDay = () => {
    const dayWeek = new Date(date).getDay();
    const days = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
      "Domingo",
    ];

    return days[dayWeek + 1];
  };

  useEffect(() => {
    if (type === "entrada") {
      setBtnE({ background: "#3A9FF1" });
      setBtnO({ background: "#b9b9b9" });
    } else if (type === "retirada") {
      setBtnE({ background: "#b9b9b9" });
      setBtnO({ background: "#FF576B" });
    }
  }, [type]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: setId(),
      type,
      value,
      category,
      date,
      day: findDay(),
      description,
    };

    setUserState((prevUserState) => ({
      ...prevUserState,
      transactions: [...prevUserState.transactions, newTransaction],
    }));

    setValue("");
    setCategory("");
    setDate("");
    setDescription("");
  };

  return (
    <>
      {showModal && (
        <div className="external-modal-container">
          <div className="internal-modal-container">
            <div className="modal-container-title">
              <h1>{modalType} Registro</h1>
              <button onClick={() => setShowModal(false)}></button>
            </div>

            <div className="modal-container-buttons">
              <button
                value={toGoEdit ? dataTransaction.type : type}
                name="entrada"
                onClick={() => setType("entrada")}
                style={btnE}
              >
                Entrada
              </button>
              <button
                value={toGoEdit ? dataTransaction.type : type}
                name="retirada"
                onClick={() => setType("retirada")}
                style={btnO}
              >
                Saída
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <label>
                <span>Valor</span>
                <input
                  className="input-modal"
                  type="number"
                  name="value"
                  step="0.01"
                  min="0.01"
                  value={toGoEdit ? dataTransaction.value : value}
                  onChange={(event) => setValue(event.target.value)}
                  required
                />
              </label>

              <label>
                <span>Categoria</span>
                <select
                  className="input-modal"
                  name="category"
                  value={toGoEdit ? dataTransaction.category : category}
                  onChange={(event) => setCategory(event.target.value)}
                  required
                >
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
                <input
                  className="input-modal"
                  type="date"
                  name="date"
                  value={toGoEdit ? dataTransaction.date : date}
                  onChange={(event) => setDate(event.target.value)}
                  required
                />
              </label>

              <label>
                <span>Descrição</span>
                <input
                  className="input-modal"
                  type="text"
                  name="description"
                  value={toGoEdit ? dataTransaction.description : description}
                  onChange={(event) => setDescription(event.target.value)}
                  required
                />
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
