import "../styles/TransactionsList.css";
import EditIcon from "../assets/edit-icon.svg";
import RemoveIcon from "../assets/remove-icon.svg";

const transactions = [
  {
    id: 1,
    date: "01/09/21",
    day: "Quarta",
    description: "Venda de brigadeiros",
    category: "Pix",
    type: "entrada",
    value: 100,
  },
  {
    id: 2,
    date: "02/09/21",
    day: "Quinta",
    description: "-",
    category: "Lazer",
    type: "retirada",
    value: 58.5,
  },
  {
    id: 3,
    date: "03/09/21",
    day: "Sexta",
    description: "-",
    category: "Alimentação",
    type: "retirada",
    value: 12,
  },
  {
    id: 4,
    date: "06/09/21",
    day: "Segunda",
    description: "Venda dos casadinhos",
    category: "Pix",
    type: "entrada",
    value: 100,
  },
];

const toCurrencyStyle = (value) => {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

const TransactionsList = () => {
  return (
    <table>
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
              <td className="line-date">{transaction.date} </td>
              <td>{transaction.day} </td>
              <td>{transaction.description} </td>
              <td>{transaction.category} </td>
              <td style={colorValue}>{toCurrencyStyle(transaction.value)} </td>
              <td className="buttons-line">
                <img
                  className="edit-icon"
                  src={EditIcon}
                  alt="Editar registro"
                />
                <img
                  className="remove-icon"
                  src={RemoveIcon}
                  alt="Excluir registro"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionsList;
