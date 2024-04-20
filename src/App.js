import "./App.css";

const LoginPrompt = () => {
  const handleSubmit = () => {
    // TO DO
  };

  return (
    <div className="LoginPrompt">
      <div className="login-form-box">
        <h1>
          <span className="thick fancy">WHS</span>
          <span>Messaging</span>
        </h1>
        <form action="" method="get" onSubmit={(e) => e.preventDefault()}>
          <div className="login-input-wrp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="user-icon"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="25"
              height="25"
            >
              <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-4,21.164v-2.164c0-.552.449-1,1-1h6c.551,0,1,.448,1,1v2.164c-1.226.537-2.578.836-4,.836s-2.774-.299-4-.836Zm10-1.169v-.995c0-1.654-1.346-3-3-3h-6c-1.654,0-3,1.346-3,3v.995c-2.427-1.826-4-4.73-4-7.995C2,6.486,6.486,2,12,2s10,4.486,10,10c0,3.264-1.573,6.169-4,7.995Zm-6-13.995c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z" />
            </svg>
            <input type="text" placeholder="Usuário" />
          </div>
          <div className="login-input-wrp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="password-icon"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="25"
              height="25"
            >
              <path d="m22 0h-2.172a2.978 2.978 0 0 0 -2.121.879l-8.361 8.36a7.537 7.537 0 1 0 5.415 5.415l1.239-1.239v-2.415h3v-3h2.414l1.707-1.707a2.983 2.983 0 0 0 .879-2.122v-2.171a2 2 0 0 0 -2-2zm0 4.171a1 1 0 0 1 -.293.708l-1.121 1.121h-3.586v3h-3v3.585l-1.545 1.545a5.64 5.64 0 0 1 .545 2.37 5.5 5.5 0 1 1 -5.5-5.5 4.236 4.236 0 0 1 2.369.544l9.252-9.251a1.009 1.009 0 0 1 .707-.293h2.172zm-17 13.829a1 1 0 1 0 1-1 1 1 0 0 0 -1 1z" />
            </svg>
            <input type="password" placeholder="Senha" />
          </div>
          <small className="bold">
            Não possui uma conta?
            <br />
            <a href="/new-account">Obtenha uma aqui!</a>
          </small>
          <button className="login-btn" onClick={handleSubmit}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <>
      <LoginPrompt />
      <p>asdas</p>
    </>
  );
}
