import { Link } from "react-router-dom";
import CloseIcon from "../assets/close-icon.svg";

const AddTransactionModal = () => {
  return (
    <div className="external-modal-container">
      <div className="internal-modal-container">
        <div className="modal-container-title" />
        <h1>Adicionar Registro</h1>
        <Link>
          <img src={CloseIcon} alt="Fechar" />
        </Link>
      </div>

      <div className="modal-container-buttons">
        <button>Entrada</button>
        <button>Saída</button>
      </div>

      <form>
        <label>
          <span>Valor</span>
          <input type="number" name="value" min="1" />
        </label>

        <label>
          <span>Categoria</span>
          <select name="category">
            <option value="Alimentação">Alimentação</option>
            <option value="Assinaturas e Serviços">
              Assinaturas e Serviços
            </option>
            <option value="Casa">Casa</option>
            <option value="Compras">Compras</option>
            <option value="Cuidados pessoais">Cuidados pessoais</option>
            <option value="Educação">Educação</option>
          </select>
        </label>

        <label>
          <span>Data</span>
          <input type="date" name="date" />
        </label>

        <label>
          <span>Descrição</span>
          <input type="text" name="description" />
        </label>

        <label>
          <input type="submit" value="Confirmar" />
        </label>
      </form>
    </div>
  );
};

export default AddTransactionModal;
