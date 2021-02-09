import React from 'react';

const api = {
  key: "f8f287f66e295ecade2b6e1b11931188",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  
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
    <div className="App" >
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Procurar..."
          />
        </div>
        <div className="localizao-box">
            <div className="localizacao">Criciuma</div>
            <div className="data">{dateBuilder(new Date())}</div>
        </div>
        <div className="clima-box">
          <div className="temperatura">
            15°c
          </div>
          <div className="clima">Ensolarado</div>
        </div>
      </main>
    </div>
  );
}

export default App;
