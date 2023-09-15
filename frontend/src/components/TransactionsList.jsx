import "../styles/TransactionsList.css";
import EditIcon from "../assets/edit-icon.svg";
import RemoveIcon from "../assets/remove-icon.svg";

const TransactionsList = ({
  transactions,
  toCurrencyStyle,
  catchDataTransaction,
  setToGoEdit,
  setShowModal,
  setModalType,
  remove,
  setType,
  setValue,
  setCategory,
  setDate,
  setDescription,
  setBtnE,
  setBtnO,
}) => {
  const handleEdit = (data) => {
    setType(data.type);
    setValue(data.value);
    setCategory(data.category);
    setDate(data.date);
    setDescription(data.description);

    if (data.type === "entrada") {
      setBtnE({ background: "#3A9FF1" });
      setBtnO({ background: "#b9b9b9" });
    } else if (data.type === "retirada") {
      setBtnE({ background: "#b9b9b9" });
      setBtnO({ background: "#FF576B" });
    }

    catchDataTransaction(data);
    setToGoEdit(true);
    setShowModal(true);
    setModalType("Editar");
  };

  return (
    <div className="wrapper-table">
      <table className="table-transactions-list">
        <thead className="container-header-table">
          <tr>
            <th className=" header-column">Data</th>
            <th className=" header-column">Dia da semana</th>
            <th className=" header-column">Descrição</th>
            <th className=" header-column">Categoria</th>
            <th className=" header-column">Valor</th>
            <th className=" header-column"></th>
          </tr>
        </thead>

        <tbody className="container-body-table">
          {transactions.map((transaction) => {
            let colorValue =
              transaction.type === "entrada"
                ? { color: "#7B61FF", fontWeight: "700" }
                : { color: "#FA8C10", fontWeight: "700" };
            return (
              <tr key={transaction.id} className="container-line">
                <td className="line-date">{transaction.dateFormat}</td>
                <td>{transaction.day} </td>
                <td>{transaction.description} </td>
                <td>{transaction.category} </td>
                <td style={colorValue}>
                  {toCurrencyStyle(parseInt(transaction.value))}{" "}
                </td>
                <td className="buttons-line">
                  <button onClick={() => handleEdit(transaction)}>
                    <img
                      className="edit-icon"
                      src={EditIcon}
                      alt="Editar registro"
                    />
                  </button>

                  <button onClick={() => remove(transaction)}>
                    <img
                      className="remove-icon"
                      src={RemoveIcon}
                      alt="Excluir registro"
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsList;
