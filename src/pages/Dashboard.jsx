import { useState, useEffect } from "react";
import {
  AddTransactionModal,
  HeaderUser,
  TransactionsList,
  TransactionsResume,
} from "../utils/components";
import { handleResume } from "../utils/functions";
import "../styles/Dashboard.css";

const Dashboard = ({ user, setDataAuth }) => {
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
  const [inflow, setInflow] = useState(0);
  const [outflow, setOutflow] = useState(0);
  const [total, setTotal] = useState(0);
  const [type, setType] = useState("retirada");
  const [btnE, setBtnE] = useState({ background: "#b9b9b9" });
  const [btnO, setBtnO] = useState({ background: "#FF576B" });
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(`${user.email}`, JSON.stringify(userState));
    handleResume(userState, setInflow, setOutflow, setTotal);
  }, [userState, user]);

  return (
    <div className="container-dashboard">
      <HeaderUser user={user} setDataAuth={setDataAuth} />

      <main className="container-transactions-components">
        <TransactionsList
          transactions={transactions}
          setDataTransaction={setDataTransaction}
          setToGoEdit={setToGoEdit}
          setShowModal={setShowModal}
          setModalType={setModalType}
          setType={setType}
          setValue={setValue}
          setCategory={setCategory}
          setDate={setDate}
          setDescription={setDescription}
          setBtnE={setBtnE}
          setBtnO={setBtnO}
          setUserState={setUserState}
        />
        <TransactionsResume
          setShowModal={setShowModal}
          setUserState={setUserState}
          setModalType={setModalType}
          setToGoEdit={setToGoEdit}
          inflow={inflow}
          outflow={outflow}
          total={total}
          setType={setType}
          setValue={setValue}
          setCategory={setCategory}
          setDate={setDate}
          setDescription={setDescription}
        />
      </main>

      <AddTransactionModal
        showModal={showModal}
        setShowModal={setShowModal}
        userState={userState}
        setUserState={setUserState}
        toGoEdit={toGoEdit}
        setToGoEdit={setToGoEdit}
        dataTransaction={dataTransaction}
        modalType={modalType}
        setModalType={setModalType}
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
        transactions={transactions}
      />
    </div>
  );
};

export default Dashboard;
