import Header from "../components/HeaderDashboard";
import TransactionsList from "../components/TransactionsList";
import TransactionsResume from "../components/TransactionsResume";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="container-dashboard">
      <Header />

      <main className="container-transactions-components">
        <TransactionsList />
        <TransactionsResume />
      </main>
    </div>
  );
};

export default Dashboard;
