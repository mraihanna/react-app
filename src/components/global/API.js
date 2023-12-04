import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [account, setAccount] = useState(null);
  

  // bisa gini
  // useEffect(() =>{
  //   fetch("https://api.github.com/users/mraihanna")
  //   .then((response) => response.json())
  //   .then((data) => setAccount(data));
  // }, []);
  // sampe sini
  
  // bisa gini juga
  const fetchDataProfile = async () => {
    const data = await fetch("https://api.github.com/users/mraihanna");
    const userProfile = await data.json();

    setAccount(userProfile);
  };

  useEffect(() =>{
    fetchDataProfile();
  }, []);
  // sampe gini juga

  // console.table(account);


  if(!account) return "Loading data ....";

  return (
    <div className="App">
      <h1>Fetching Data</h1>
      <hr/>
      <div>
        <p>Nama {account.name} </p>
        <img src={account.avatar_url} alt='poto profile'></img>
        <p>Lokasi: {account.location} </p>
      </div>
    </div>
  );
}

export default App;
