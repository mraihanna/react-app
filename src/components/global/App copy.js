import logo from './logo.svg';
import './App.css';
import Header from './components/global/Header';
import Content from './components/global/Content';
import Footer from './components/global/Footer';
import { useEffect, useState, useRef } from 'react';

function App({library}) {
  const inputRef = useRef();
  const headingRef = useRef();
  const [lokasi, setLokasi] = useState('Garut');
  const [lokasi2, setLokasi2] = useState('Bandung');

  useEffect(() => {
    console.log("isi lokasi   = ", lokasi); //useState & useEffect
    console.log("isi lokasi 2 = ", lokasi2); //useState & useEffect
    //useRef()

    console.log("headingRef ", headingRef);
    console.log("headingRef current", headingRef.current);
    headingRef.current.innerHTML = "Test useRef()";
    console.log("Heading ID ", headingRef.current.id);
    console.log("Heading ClassName ", headingRef.current.className);


  }, [lokasi, lokasi2]);

  const onSubmit = ()=> {
    console.log("Button Submit");
  }

  const data = {
    nama: 'Azumi',
    alamat: 'Garut',
    sekolah:{
      nama:'Hampor',
      alamat:'Garut'
    },
  }
  const {
    nama,
    alamat, 
    sekolah: {
      nama:namaSekolah,
      alamat:alamatSekolah,
    },
  } = data;
  
  const array = ['Garut', 'Cianjur', 'Bandung', 'Jakarta'];
  const [satu, dua, ...sisa] = array;
  if(true == false){

    console.log("================================================");
    
    console.log(nama, alamat, namaSekolah, alamatSekolah);
    console.log(array[0]);
    console.log('aray ke satu = ', satu);
    console.log('aray ke dua = ', dua);
    console.log('sisa ', sisa);
    
    console.log("================================================");

  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {/* Mencoba menggunakan props */}
      <h1>Belajar {library}</h1>
      <Header/>
      <button onClick={() => onSubmit()}>Submit</button>
      <button onClick={function () {
        console.log('Submit Button 2');
      }}>Submit 2</button>
      {/* Mencoba menggunakan useState & useEffect */}
      <br></br>
      <hr/>
      <h1>Saya ingin ke {lokasi}</h1>
      <button onClick={() => setLokasi("Cianjur")}>Cianjur</button>
      <button onClick={() => setLokasi("Jambi")}>Jambi</button> 
      
      <br></br>
      
      <h1>Saya ingin ke {lokasi2}</h1>
      <button onClick={() => setLokasi2("Sumedang")}>Sumedang</button>
      <button onClick={() => setLokasi2("Jawa Tengah")}>Jawa Tengah</button> 
      {/* Mencoba Menggunakan useRef() */}
      <br/>
      <hr/>
      <h1>useRef()</h1>
      <h1 id='ini-id' className='ini-class' ref={headingRef} >Saya ingin ke {lokasi2}</h1>

      <input ref={inputRef}/>
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
