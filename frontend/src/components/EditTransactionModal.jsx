// import { useEffect, useState } from "react";
// import "../styles/AddTransactionModal.css";

// const EditTransactionModal = ({
//   user,
//   userState,
//   setUserState,
//   dataTransaction,
//   modalType,
//   setModalType,
//   showEditModal,
//   showModal,
//   setShowModal,
//   setShowEditModal,
//   type,
//   value,
//   category,
//   date,
//   description,
//   setBtnE,
//   setBtnO,
//   btnE,
//   btnO,
//   setType,
//   setValue,
//   setCategory,
//   setDate,
//   setDescription,
//   remove,
// }) => {
//   const setId = () => {
//     if (type === "entrada")
//       return `E${Math.floor(Math.random() * 100) + date.replace("-", "")}`;
//     if (type === "retirada")
//       return `S${Math.floor(Math.random() * 100) + date.replace("-", "")}`;
//   };

//   const findDay = () => {
//     const dayWeek = new Date(date).getDay();
//     const days = [
//       "Domingo",
//       "Segunda",
//       "Terça",
//       "Quarta",
//       "Quinta",
//       "Sexta",
//       "Sábado",
//       "Domingo",
//     ];

//     return days[dayWeek + 1];
//   };

//   useEffect(() => {
//     if (type === "entrada") {
//       setBtnE({ background: "#3A9FF1" });
//       setBtnO({ background: "#b9b9b9" });
//     } else if (type === "retirada") {
//       setBtnE({ background: "#b9b9b9" });
//       setBtnO({ background: "#FF576B" });
//     }
//   }, [type]);

//   const dateFormat = () => {
//     let newDate = new Date(date);

//     return newDate.toLocaleDateString("pt-BR", { timeZone: "UTC" });
//   };

//   const handleSubmitEdit = (event) => {
//     event.preventDefault();

//     remove(dataTransaction);

//     const newTransaction = {
//       id: setId(),
//       type,
//       value,
//       category,
//       dateFormat: dateFormat(),
//       date,
//       day: findDay(),
//       description,
//     };

//     setUserState((prevUserState) => ({
//       ...prevUserState,
//       transactions: [...prevUserState.transactions, newTransaction],
//     }));

//     setShowEditModal(false);
//   };

//   return (
//     <>
//       {showEditModal && (
//         <div className="external-modal-container">
//           <div className="internal-modal-container">
//             <div className="modal-container-title">
//               <h1>{modalType} Registro</h1>
//               <button onClick={() => setShowEditModal(false)}></button>
//             </div>

//             <div className="modal-container-buttons">
//               <button
//                 value={type}
//                 name="entrada"
//                 onClick={() => setType("entrada")}
//                 style={btnE}
//               >
//                 Entrada
//               </button>
//               <button
//                 value={type}
//                 name="retirada"
//                 onClick={() => setType("retirada")}
//                 style={btnO}
//               >
//                 Saída
//               </button>
//             </div>

//             <form onSubmit={handleSubmitEdit}>
//               <label>
//                 <span>Valor</span>
//                 <input
//                   className="input-modal"
//                   type="number"
//                   name="value"
//                   step="0.01"
//                   min="0.01"
//                   value={value}
//                   onChange={(event) => setValue(event.target.value)}
//                   required
//                 />
//               </label>

//               <label>
//                 <span>Categoria</span>
//                 <select
//                   className="input-modal"
//                   name="category"
//                   value={category}
//                   onChange={(event) => setCategory(event.target.value)}
//                   required
//                 >
//                   <option value="-">
//                     ------------------- Selecione uma opção -------------------
//                   </option>
//                   <option value="Alimentação">Alimentação</option>
//                   <option value="Assinaturas e Serviços">
//                     Assinaturas e Serviços
//                   </option>
//                   <option value="Casa">Casa</option>
//                   <option value="Compras">Compras</option>
//                   <option value="Cuidados pessoais">Cuidados pessoais</option>
//                   <option value="Educação">Educação</option>
//                   <option value="Pix">Pix</option>
//                   <option value="Vendas">Vendas</option>
//                   <option value="Outros">Outros</option>
//                 </select>
//               </label>

//               <label>
//                 <span>Data</span>
//                 <input
//                   className="input-modal"
//                   type="date"
//                   name="date"
//                   value={date}
//                   onChange={(event) => setDate(event.target.value)}
//                   required
//                 />
//               </label>

//               <label>
//                 <span>Descrição</span>
//                 <input
//                   className="input-modal"
//                   type="text"
//                   name="description"
//                   value={description}
//                   onChange={(event) => setDescription(event.target.value)}
//                   required
//                 />
//               </label>

//               <label>
//                 <input
//                   className="input-submit-modal"
//                   type="submit"
//                   value="Confirmar"
//                 />
//               </label>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EditTransactionModal;
