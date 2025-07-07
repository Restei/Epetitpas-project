import './App.css';
function ConnectPage() {

  const storedData = JSON.parse(localStorage.getItem('data'));
  console.log(storedData.datas);

  return (
    <div class = "container">
        <ul>
            <li>Nom de la personne: {storedData.datas.name}</li>
            <li>Email de la personne: {storedData.datas.email}</li>
            <li>Id de la personne: {storedData.datas.id}</li>
        </ul>
    </div>
  );
}

export default ConnectPage;
