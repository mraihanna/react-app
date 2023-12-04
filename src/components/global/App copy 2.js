import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nama, setNama] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const form  = event.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());

    console.table(formJSON);
  };

  useEffect(() => {
    if(nama.length < 3 ){
      console.error("Nama Harus Rinci")
    }
  }, [nama]);

  return (
    <div className="App">
      <h1>Form React</h1>
      <hr/>
      <form className='form' onSubmit={onSubmit}>
        <div>
          <label htmlFor='nama'>Nama Siswa</label>
          <input id='nama' name='nama' value={nama} onChange={(e) => setNama(e.target.value)} className='nama' type='text'/>
          <div>Nama Siswa adalah {nama}</div>
          {nama.length < 3 && nama.length > 0 && (
            <div className='error' style={{color:"red"}}>Nama kurang dari 5 karakter</div>
          )}
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
