import React, {useState } from 'react';

const api = {
  key: "f8f287f66e295ecade2b6e1b11931188",
  base: "http://api.openweathermap.org/data/2.5/"
}
function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})
  const procurar = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('');
        console.log(weather)
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

    return `${dia} ${data} ${mes} ${ano}`
  }
  return (
    <div className={
      (typeof weather.main != "undefined") ? (((weather.main.temp - 273.15) > 16) ? 'Appcalor' : 'App') :'App'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Procurar..."
            onChange={e => setQuery(e.target.value)}
            onKeyPress={procurar}
            value={query}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="localizao-box">
              <div className="localizacao">{weather.name}, {weather.sys.country}</div>
              <div className="data">{dateBuilder(new Date())}</div>
            </div>
            <div className="clima-box">
              <div className="temperatura">
               {Math.round(weather.main.temp - 273.15)}°c
              </div>
           </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
