import { useState } from "react";

import AddTransactionModal from "../components/AddTransactionModal";
import Header from "../components/HeaderDashboard";
import TransactionsList from "../components/TransactionsList";
import TransactionsResume from "../components/TransactionsResume";
import "../styles/Dashboard.css";

// const transactions = [
//   {
//     id: 1,
//     date: "01/09/21",
//     day: "Quarta",
//     description: "Venda de brigadeiros",
//     category: "Pix",
//     type: "entrada",
//     value: 100,
//   },
//   {
//     id: 2,
//     date: "02/09/21",
//     day: "Quinta",
//     description: "-",
//     category: "Lazer",
//     type: "retirada",
//     value: 58.5,
//   },
//   {
//     id: 3,
//     date: "03/09/21",
//     day: "Sexta",
//     description: "-",
//     category: "Alimentação",
//     type: "retirada",
//     value: 12,
//   },
//   {
//     id: 4,
//     date: "06/09/21",
//     day: "Segunda",
//     description: "Venda dos casadinhos",
//     category: "Pix",
//     type: "entrada",
//     value: 100,
//   },
// ];

const Dashboard = ({ user, handleDataAuth }) => {
  const toCurrencyStyle = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const [showModal, setShowModal] = useState(false);

  const transactions = user.transactions;
  console.log(transactions);

  return (
    <div className="container-dashboard">
      <Header user={user} handleDataAuth={handleDataAuth} />

      <main className="container-transactions-components">
        <TransactionsList
          transactions={transactions}
          toCurrencyStyle={toCurrencyStyle}
        />
        <TransactionsResume setShowModal={setShowModal} />
      </main>

      <AddTransactionModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Dashboard;
