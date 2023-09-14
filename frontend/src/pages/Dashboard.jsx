import { useState, useEffect } from "react";

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

  const [userState, setUserState] = useState(() => {
    const userData = JSON.parse(localStorage.getItem(`${user.email}`));
    return (
      userData || {
        name: user.name,
        email: user.email,
        password: user.password,
        checkPassword: user.checkPassword,
        transactions: user.transactions,
      }
    );
  });

  let transactions = userState.transactions;

  useEffect(() => {
    localStorage.setItem(`${user.email}`, JSON.stringify(userState));
  }, [userState, user]);

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
        userState={userState}
        setUserState={setUserState}
      />
    </div>
  );
};

export default Dashboard;
