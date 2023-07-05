import Header from "../components/Header";
import "./hulk.css";
import hulk from "../imgs/hulk.png";

function App() {
  return (
    <div>
      <Header />
      <div className="divPrincipal">
        <div className="container">
          <div className="textos">
            <p>#1 herói</p>
            <p>Bruce Banner</p>
            <h1>Hulk</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              provident iure aut, quis assumenda fuga delectus illum nihil
              cumque eligendi voluptatibus doloribus minima sint! Nostrum culpa
              repellendus assumenda cumque! Officia?
            </p>
            <div>
              <button>Compare</button>
              <button>Watch Gameplay</button>
            </div>
          </div>
          <div>
            <img src={hulk} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
