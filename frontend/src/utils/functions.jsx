/**
 * Resgata dados de componente filho para componente pai.
 * @param  childObj - Objeto que deve ser enviado para componente pai
 * @param state - Estado que deve ser alterado e responsável por transferir dados para o componente pai
 */
export const onDataChange = (childObj, state) => {
  state(childObj);
};

/**
 * Valida se senha digitada em form de login é igual a senha cadastrada.
 * @param {userPass} - Propriedade que contém senha do usuário
 * @param {formPass} - Propriedade que contém senha digitada para login
 * @returns - true se usuário colocar senha correta, e false se não
 */
export const isAuthenticated = ({ userPass, formPass }) => {
  return userPass && formPass && userPass === formPass;
};

/**
 * Formata number para moeda
 * @param value - argumento que deverá ser formatado, deverá ser tipo number.
 * @returns - value em Real: R$ 00,00
 */
export const toCurrencyStyle = (value) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

/**
 *Separa valores das transições em entradas(inFlow), saída (outFlow) e saldo(total)
 * @param {*} user - objeto que contém dados do usuário;
 * @param {*} setInflow - função que altera estado de inFlow, valores de entrada;
 * @param {*} setOutflow  - função que altera estado de outFlow, valores de saída;
 * @param {*} setTotal - função que altera estado de total, saldo.
 */
export const handleResume = (user, setInflow, setOutflow, setTotal) => {
  let countInflow = 0;
  let countOutflow = 0;

  user.transactions.map((transaction) => {
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

/**
 * Gera identificador unico para transação baseado no tipo e data da transação
 * @param {*} type - tipo de transação, formato: "entrada" ou "retirada";
 * @param {*} date - data que transação foi realizada, formato: "YYYY-MM-DD";
 * @returns - se tipo for entrada: "E001202309-19", se tipo for saída: "S002202309-18"
 */
export const setId = (type, date) => {
  if (type === "entrada")
    return `E${Math.floor(Math.random() * 100) + date.replace("-", "")}`;
  if (type === "retirada")
    return `S${Math.floor(Math.random() * 100) + date.replace("-", "")} `;
};

/**
 *Retorna dia da semana da data informada
 * @param {*} date - data que transação foi realizada, formato: "YYYY-MM-DD";
 * @returns - dia da semana: "Segunda"
 */
export const findDay = (date) => {
  const dayWeek = new Date(date).getDay();
  const days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ];

  return days[dayWeek + 1];
};

/**
 * Formata data para dd/mm/aaaa
 * @param {*} date - data que transação foi realizada, formato: "YYYY-MM-DD";
 * @returns - "18/09/2023"
 */
export const dateFormat = (date) => {
  let newDate = new Date(date);

  return newDate.toLocaleDateString("pt-BR", { timeZone: "UTC" });
};

/**
 *Remove transação do array de transações
 * @param {*} data - dados da transação selecionada;
 * @param {*} transactions - array que contém todas as transações do usuário;
 * @param {*} setUserState - função que altera dados do usuário;
 */
export const remove = (data, transactions, setUserState) => {
  let newTransactions = transactions.filter(
    (transaction) => transaction !== data
  );
  setUserState((prevUserState) => ({
    ...prevUserState,
    transactions: newTransactions,
  }));
};

/**
 * Altera estado de selectTransaction para abrir popUp
 * @param {*} transaction  - transação selecionada
 * @param {*} setSelectTransaction - função que altera estado de selectTransaction informando qual transação será deletada;
 */
export const handleDelete = (transaction, setSelectTransaction) => {
  setSelectTransaction(transaction);
};

/**
 *Exclui transação e fecha PopUp
 * @param {*} selectTransaction - informa qual transação será deletada
 * @param {*} transactions -array que contém todas as transações do usuário;
 * @param {*} setUserState - função que altera dados do usuário;
 * @param {*} setSelectTransaction -  - função que altera estado de selectTransaction informando qual transação será deletada;
 */
export const confirmDelete = (
  selectTransaction,
  transactions,
  setUserState,
  setSelectTransaction
) => {
  if (selectTransaction) {
    remove(selectTransaction, transactions, setUserState, () => {
      setSelectTransaction(null);
    });
  }
};
