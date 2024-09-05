import logo from './logo.svg';
import './App.css';

const conteinerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f0f0f0",
  textAling: "center",
}
const buttonStyle = {
  backgroundColor: 'blue',
  widght: '20px',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  marginTop: '20px',
  fontSize: '16px',
  fontWeight: 'bold'
}
function App() {
  return (
   <div style={conteinerStyle}>
    <h1 style={{color: '#333', fontSize: '24px'}}>
      Estilos de inline em React
    </h1>
    <p style={{color: '#666', maxWidth: '600px'}}>
      Exemplo de estilo inline
    </p>
    <button style={buttonStyle} onClick={() => alert('voce clicou no botão')}>
      Clique aqui 

    </button>

   </div>
  );
}

export default App;
