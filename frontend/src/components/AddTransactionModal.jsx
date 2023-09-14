import { useEffect, useState } from "react";
import "../styles/AddTransactionModal.css";

const AddTransactionModal = ({
  showModal,
  setShowModal,
  user,
  userState,
  setUserState,
}) => {
  const [type, setType] = useState("");
  const [btnE, setBtnE] = useState({});
  const [btnO, setBtnO] = useState({});
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
  };

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

            <form onSubmit={handleSubmit}>
              <label>
                <span>Valor</span>
                <input
                  className="input-modal"
                  type="number"
                  name="value"
                  step="0.01"
                  min="0.01"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                />
              </label>

              <label>
                <span>Categoria</span>
                <select
                  className="input-modal"
                  name="category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
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
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </label>

              <label>
                <span>Descrição</span>
                <input
                  className="input-modal"
                  type="text"
                  name="description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
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
