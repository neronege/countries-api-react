import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
//api'den ülke isimlerini , bayrakları,başkentini kullanacağız



const App = () => {
  const [countries , setCountries] = useState([]);
    //api çekerken useEffect içerisinde kullanıyoruz
    //npm i axios
    //get içerisine api linkini koyuyoruz
    //axios'ta then ile gelen datayı json'a dönüştürmeye gerek yok direkt kullanabiliyoruz
    //console.log (response) yaptığımız zaman fetch api'den farklı görünüyor. config: , data: ,header: ,request:, geliyor 
    //bizim kullanmak istediğimiz array data içerisinde dolduğu için setCountries(response.data) olarak data'nın içerisine yazıyoruz
     useEffect(() => {
   axios.get("https://restcountries.eu/rest/v2/all")
   .then(response => setCountries(response.data))
   .catch(error=> console.log([error]));
 }, []);
 //console.log COUNTRIES atayarak gelen verilerin nasıl depolandığını gözlemliyoruz
 
 //dataları setcountries ile birlikte app'miz içerisine aldıktan sonra içeride istediğimiz bilgielere ulaşma yöntemi;
 //countries dizi olduğu için map açıyoruz içindeki her bir ülke için country(bunu biz seçiyoruz) yazıyoruz
 //key={country.key} {country.name} {country.capital} {country.flag}
  return (
    <div className="App">
  {countries.map(country=>{
      return (
        <div key={country.key}>
          <h2>{country.name}</h2>
          <h4>{country.capital}</h4>
        <p>
          <img 
          src={country.flag}
          alt={country.name}
          style={{width: "100px"}}
          />
        </p>
        </div>
      );
    })}
    </div>
  );
}

export default App;
