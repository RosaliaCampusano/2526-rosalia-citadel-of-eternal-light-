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
      <div className="h-full w-full items-center justify-center pt-8 pl-20">
        {data !== null ? handlerScreen(screen, data!) : ""}
      </div>
    </>
  );
}

const handlerScreen = (screen: NavigationScreen, data: CitadelItem) => {
  switch (screen) {
    case NavigationScreen.Location:
      return <Location title={data.name} location={data.location} />;
    case NavigationScreen.Defense:
      return <Defenses defense={data.defenses} />;
    case NavigationScreen.History:
      return <History history={data.history} />;
    case NavigationScreen.Inhabitants:
      return <Inhabitants data={data.inhabitants} />;
    case NavigationScreen.Resources:
      return <Resources resource={data.resources} />;
  }
};

export default App;
