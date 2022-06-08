// CSS
import styles from "./Register.module.css";

// Hooks
import { useState, useEffect } from "react";

const Register = () => {
  // States
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // when submiting the form, setError is empty
    setError("")

    const user = {
      displayName: displayName,
      email: email,
      password: password
    }

    // Validating password
    if (password !== confirmPassword){
      setError("As senhas não conferem.")
      return
    }

    console.log(user)


  };

  return (
    <div className={styles.register}>
      <h1>Realize seu cadastro</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário..."
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Email do usuário..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha...."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme asua senha...."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button className="btn">Cadastrar</button>
        {/* render the error */}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
