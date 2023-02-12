import Header from "./components/Header";
import Hero from "./components/hero";
import Experince from "./components/experince";
import Work from "./components/Work";
import css from "./styles/app.module.scss";
import { Portfolio } from "./components/portfolio";

 const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header />
    <Hero />
    <Experince />
    <Work/>
    <Portfolio />
  </div>
};

export default App;