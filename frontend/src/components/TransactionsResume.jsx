import { useState } from "react";
import "../styles/TransactionsResume.css";

const TransactionsResume = ({
  setShowModal,
  userState,
  setUserState,
  setModalType,
  setToGoEdit,
  inflow,
  outflow,
  total,
  toCurrencyStyle,
}) => {
  const handleAdd = () => {
    setToGoEdit(false);
    setShowModal(true);
    setModalType("Adicionar");
  };

  return (
    <div className="container-transactions-resume">
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
            <td className="entries-value">{toCurrencyStyle(inflow)}</td>
          </tr>

          <tr>
            <td className="outputs-title">Saídas</td>
            <td className="outputs-value">{toCurrencyStyle(outflow)}</td>
          </tr>
        </tbody>

        <tfoot className="container-footer-table-resume">
          <tr>
            <td className="total-title">Saldo</td>
            <td className="total-value">{toCurrencyStyle(total)}</td>
          </tr>
        </tfoot>
      </table>

      <button onClick={() => handleAdd()}>Adicionar Registro</button>
    </div>
  );
};

export default TransactionsResume;
