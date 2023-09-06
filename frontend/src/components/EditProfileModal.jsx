import { Link } from "react-router-dom";
import "../styles/EditProfileModal.css";

const EditProfileModal = () => {
  return (
    <div className="external-modal-container">
      <div className="internal-modal-container edit-profile">
        <div className="modal-container-title ">
          <h1>Editar Perfil</h1>
          <Link></Link>
        </div>

        <form>
          <label>
            <span>Nome</span>
            <input className="input-modal" type="text" name="name" />
          </label>

          <label>
            <span>E-mail</span>
            <input className="input-modal" type="e-mail" name="e-mail" />
          </label>

          <label>
            <span>Senha</span>
            <input className="input-modal" type="password" name="password" />
          </label>

          <label>
            <span>Confirmação de senha</span>
            <input className="input-modal" type="password" name="password" />
          </label>

          <label>
            <input
              className="input-submit-modal"
              type="submit"
              value="Confirmar"
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
