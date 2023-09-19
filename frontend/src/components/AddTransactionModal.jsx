import { useEffect } from "react";
import { setId, findDay, dateFormat, remove } from "../utils/functions";
import "../styles/AddTransactionModal.css";

const AddTransactionModal = ({
  showModal,
  setShowModal,
  userState,
  setUserState,
  toGoEdit,
  setToGoEdit,
  dataTransaction,
  modalType,
  setModalType,
  setType,
  type,
  btnE,
  setBtnE,
  btnO,
  setBtnO,
  value,
  setValue,
  category,
  setCategory,
  date,
  setDate,
  description,
  setDescription,
  transactions,
}) => {
  useEffect(() => {
    let localUser = JSON.stringify(userState);
    localStorage.setItem(`${userState.email}`, localUser);
  }, [userState]);

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

    toGoEdit && remove(dataTransaction, transactions, setUserState);

    const newTransaction = {
      id: setId(type, date),
      type,
      value,
      category,
      dateFormat: dateFormat(date),
      date,
      day: findDay(date),
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
    toGoEdit && setShowModal(false);
  };

  const handleClose = () => {
    setToGoEdit(false);
    setShowModal(false);
    setModalType("Adicionar");
  };

  return (
    <>
      {showModal && (
        <div className="external-modal-container">
          <div className="internal-modal-container">
            <div className="modal-container-title">
              <h1>{modalType} Registro</h1>
              <button onClick={() => handleClose()}></button>
            </div>

            <div className="modal-container-buttons">
              <button
                value={type}
                name="entrada"
                onClick={() => setType("entrada")}
                style={btnE}
              >
                Entrada
              </button>
              <button
                value={type}
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
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  required
                />
              </label>

              <label>
                <span>Categoria</span>
                <select
                  className="input-modal"
                  name="category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  required
                >
                  <option value="-">
                    ------------------- Selecione uma opção -------------------
                  </option>
                  <option value="Alimentação">Alimentação</option>
                  <option value="Assinaturas e Serviços">
                    Assinaturas e Serviços
                  </option>
                  <option value="Casa">Casa</option>
                  <option value="Compras">Compras</option>
                  <option value="Cuidados pessoais">Cuidados pessoais</option>
                  <option value="Educação">Educação</option>
                  <option value="Pix">Pix</option>
                  <option value="Vendas">Vendas</option>
                  <option value="Outros">Outros</option>
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
                  required
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
