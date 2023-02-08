import Header from "./components/Header";
import Hero from "./components/hero";
import Experince from "./components/experince";
import css from "./styles/app.module.scss";

 const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header />
    <Hero />
    <Experince />
  </div>
};

export default App;