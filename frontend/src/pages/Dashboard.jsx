import { useState } from "react";

import AddTransactionModal from "../components/AddTransactionModal";
import Header from "../components/HeaderDashboard";
import TransactionsList from "../components/TransactionsList";
import TransactionsResume from "../components/TransactionsResume";
import "../styles/Dashboard.css";

const Dashboard = ({ user, handleDataAuth }) => {
  const toCurrencyStyle = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const [showModal, setShowModal] = useState(false);

  const transactions = user.transactions;

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

      <AddTransactionModal
        showModal={showModal}
        setShowModal={setShowModal}
        user={user}
      />
    </div>
  );
};

export default Dashboard;
