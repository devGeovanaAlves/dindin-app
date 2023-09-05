import "../styles/TransactionsResume.css";

const TransactionsResume = ({ transactions, toCurrencyStyle }) => {
  return (
    <div>
      <table className="table-transactions-resume">
        <thead className="container-header-table-resume">
          <tr>
            <th className="header-title">Resumo</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="container-body-table-resume">
          <tr>
            <td className="entries-title">Entradas</td>
            <td className="entries-value">R$ 200,00</td>
          </tr>

          <tr>
            <td className="outputs-title">Saídas</td>
            <td className="outputs-value">R$ 70,50</td>
          </tr>
        </tbody>

        <tfoot className="container-footer-table-resume">
          <tr>
            <td className="total-title">Saldo</td>
            <td className="total-value">R$ 129,50</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TransactionsResume;
