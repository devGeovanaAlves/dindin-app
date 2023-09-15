import { useState, useEffect } from "react";

import AddTransactionModal from "../components/AddTransactionModal";
import Header from "../components/HeaderDashboard";
import TransactionsList from "../components/TransactionsList";
import TransactionsResume from "../components/TransactionsResume";
import "../styles/Dashboard.css";

const Dashboard = ({ user, handleDataAuth }) => {
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
  const transactions = userState.transactions;
  const [modalType, setModalType] = useState("Adicionar");
  const [toGoEdit, setToGoEdit] = useState(false);
  const [dataTransaction, setDataTransaction] = useState({});

  const catchDataTransaction = (childObj) => {
    setDataTransaction(childObj);
  };

  const toCurrencyStyle = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

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
          catchDataTransaction={catchDataTransaction}
          setToGoEdit={setToGoEdit}
          setShowModal={setShowModal}
          setModalType={setModalType}
        />
        <TransactionsResume
          setShowModal={setShowModal}
          userState={userState}
          setUserState={setUserState}
          setModalType={setModalType}
          setToGoEdit={setToGoEdit}
        />
      </main>

      <AddTransactionModal
        showModal={showModal}
        setShowModal={setShowModal}
        user={user}
        userState={userState}
        setUserState={setUserState}
        toGoEdit={toGoEdit}
        setToGoEdit={setToGoEdit}
        dataTransaction={dataTransaction}
        modalType={modalType}
        setModalType={setModalType}
      />
    </div>
  );
};

export default Dashboard;
