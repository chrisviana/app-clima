import React, {useState } from 'react';

const api = {
  key: "f8f287f66e295ecade2b6e1b11931188",
  base: "http://api.openweathermap.org/data/2.5/"
}
function App() {

  const [query, setQuery] = useState('')
  const [clima, setclima] = useState({})
  const procurar = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}clima?q=${query}&APPID=${api.key}`).then(resposta => resposta.json()).then(result => {
        setclima(result)
        setQuery('');
      });
    }
  }
  const dateBuilder = (d) => {
    let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",]
    let dias = ["Segunda","Terça","Quarta","Quinta","Sexta","Sabado","Domingo",]


    let dia = dias[d.getDay()];
    let data = d.getDate();
    let mes = meses[d.getMonth()];
    let ano = d.getFullYear();

    return `${dia}, ${data} de ${mes} de ${ano}`
  }
  return (
    <div className={
      (typeof clima.main != "undefined") ? (((clima.main.temp - 273.15) > 16) ? 'Appcalor' : 'App') :'App'}>
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Procurar..." onChange={e => setQuery(e.target.value)} onKeyPress={procurar} value={query}/>
        </div>
        {(typeof clima.main != "undefined") ? (
          <div>
            <div className="localizao-box">
              <div className="localizacao">{clima.name}, {clima.sys.country}</div>
              <div className="data">{dateBuilder(new Date())}</div>
            </div>
            <div className="clima-box">
              <div className="temperatura">
               {Math.round(clima.main.temp - 273.15)}°c
              </div>
           </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
