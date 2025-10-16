import CitadelItem from "./interface";
import { useState, useEffect } from "react";
import Navigation from "./helpers/Navigation";
import { NavigationScreen } from "./constants";
import History from "./components/History";
import Defenses from "./components/Defenses";
import Location from "./components/Location";
import Resources from "./components/Resources";
import Inhabitants from "./components/Inhabitants";

function App() {
  const [data, setData] = useState<CitadelItem | null>(null);
  const [screen, setScreen] = useState<NavigationScreen>(
    NavigationScreen.Location,
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/citadel.json");
      const response = await data.json();
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navigation setScreen={setScreen} />
      <>{handlerScreen(screen)}</>
    </>
  );
}

const handlerScreen = (screen: NavigationScreen) => {
  switch (screen) {
    case NavigationScreen.Location:
      return <Location />;
    case NavigationScreen.Defense:
      return <Defenses />;
    case NavigationScreen.History:
      return <History />;
    case NavigationScreen.Inhabitants:
      return <Inhabitants />;
    case NavigationScreen.Resources:
      return <Resources />;
  }
};

export default App;
