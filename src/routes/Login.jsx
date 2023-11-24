import { useState, useEffect } from 'react';
import "../styles/Login.css";

function Login() {
  const [msgstatus, setMsgstatus] = useState('');
  const [classStatus, setClassStatus] = useState('');

  //hooks
  const [usuarios, setUsuarios] = useState({
    usuario: '',
    senha: '',
  });
  // funções
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setUsuarios({ ...usuarios, [name]: value });
  };

  useEffect(() => {
    if (msgstatus == 'Login realizado com SUCESSO!!') {
      setClassStatus('login-sucesso');
    } else if (msgstatus == 'Usuário e ou Senha incorretos!') {
      setClassStatus('login-erro');
    } else {
      setClassStatus('login');
    }
  }, [msgstatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user;
    try {
      const response = await fetch('http://localhost:5000/usuarios');
      if (response.ok) {
        const users = await response.json();

        //PERCORRENDO TODOS OS USUARIOS QUE ESTIVER NA LISTA DO JSON
        for (let i = 0; i < users.length; i++) {
          const use = users[i];

          //VALIDANDO OS DADOS
          if (use.usuario == usuarios.usuario && use.senha == usuarios.senha) {
            user = use;
            break;
          }
        }

        if (user) {
          sessionStorage.setItem('usuarioLogado', JSON.stringify(user));
          setMsgstatus('Acesso realizado com Sucesso, redirecionando...');

          setTimeout(() => {
            window.location = '/';
          }, 3000);
        } else {
          setMsgstatus('Usuário e ou Senha incorretos, por favor, digite novamente');
          setTimeout(() => {
            setMsgstatus('');
            setUsuarios({
              usuario: '',
              senha: '',
            });
            window.location = '/login';
          }, 3000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <h2 className={classStatus}>{msgstatus}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idUsuario">Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={usuarios.usuario}
            placeholder="Insira seu usuario"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="idSenha">Senha:</label>
          <input
            type="passoword"
            name="senha"
            value={usuarios.senha}
            placeholder="Insira sua senha"
            onChange={handleChange}
          />
        </div>

        <button type="submit">Logar</button>
      </form>
    </>
  );
}

export default Login;
