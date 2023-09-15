import { useState, useEffect } from "react";

import AddTransactionModal from "../components/AddTransactionModal";
import Header from "../components/HeaderDashboard";
import TransactionsList from "../components/TransactionsList";
import TransactionsResume from "../components/TransactionsResume";
import "../styles/Dashboard.css";

const Dashboard = ({ user, handleDataAuth }) => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
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

  const remove = (data) => {
    let newTransactions = transactions.filter(
      (transaction) => transaction !== data
    );
    setUserState((prevUserState) => ({
      ...prevUserState,
      transactions: newTransactions,
    }));
  };

  const toCurrencyStyle = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  useEffect(() => {
    localStorage.setItem(`${user.email}`, JSON.stringify(userState));
    handleResume();
  }, [userState, user]);

  const [inflow, setInflow] = useState(0);
  const [outflow, setOutflow] = useState(0);
  const [total, setTotal] = useState(0);

  const handleResume = () => {
    let countInflow = 0;
    let countOutflow = 0;

    userState.transactions.map((transaction) => {
      let valueNumber = parseInt(transaction.value);

      if (transaction.type === "entrada") {
        countInflow += valueNumber;
      } else {
        countOutflow += valueNumber;
      }
    });

    let countTotal = countInflow - countOutflow;

    setInflow(countInflow);
    setOutflow(countOutflow);
    setTotal(countTotal);
  };

  const [type, setType] = useState("retirada");
  const [btnE, setBtnE] = useState({ background: "#b9b9b9" });
  const [btnO, setBtnO] = useState({ background: "#FF576B" });
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

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
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          setModalType={setModalType}
          remove={remove}
          setType={setType}
          setValue={setValue}
          setCategory={setCategory}
          setDate={setDate}
          setDescription={setDescription}
          setBtnE={setBtnE}
          setBtnO={setBtnO}
        />
        <TransactionsResume
          setShowModal={setShowModal}
          userState={userState}
          setUserState={setUserState}
          setModalType={setModalType}
          setToGoEdit={setToGoEdit}
          inflow={inflow}
          outflow={outflow}
          total={total}
          toCurrencyStyle={toCurrencyStyle}
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
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        type={type}
        value={value}
        category={category}
        date={date}
        description={description}
        setBtnE={setBtnE}
        setBtnO={setBtnO}
        btnE={btnE}
        btnO={btnO}
        setType={setType}
        setValue={setValue}
        setCategory={setCategory}
        setDate={setDate}
        setDescription={setDescription}
        remove={remove}
      />
    </div>
  );
};

export default Dashboard;
