//Libraries
import React from "react";
import classes from "./Home.module.scss";

//Components
import Button from "../../Components/UI/Button/Button";

const Home = () => {
  return (
    <div className={classes.Home}>
      <h1 className={classes.Home__title}>Bienvenue sur Ton-Orientation.fr, la plateforme qui t'aide à trouver ta vocation</h1>
      <div className={classes.Home__actions}>
        <Button>Commencer le test de personnalité</Button>
        <Button>Découvrir les métiers du digital</Button>
      </div>
    </div>
  );
}

export default Home;