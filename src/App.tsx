import { useState } from "react";
import MainMenu from "./components/MainMenu";
import MarketRow from "./components/MarketRow";
import { TimeInterval } from "./models/enums";
import { Market } from "./models/interfaces";

const currencies: Market[] = [
  { name: "Bitcoin", token: "BTC" },
  { name: "Ethereum", token: "ETH" },
  { name: "Litecoin", token: "LTC" },
  { name: "Ripple", token: "XRP" },
  { name: "Bitcoin Cash", token: "BCH" },
];

function App() {
  const [timeInterval, setTimeInterval] = useState<TimeInterval>(
    TimeInterval.Daily
  );
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2C%20ethereum%2C%20litecoin%2C%20ripple%2C%20bitcoin-cash&price_change_percentage=1h`
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }, []);

  return (
    <div>
      <p>Market Overview</p>
      <MainMenu
        activeInterval={timeInterval}
        onIntervalChange={setTimeInterval}
      />
      {currencies.map((item, index) => (
        <MarketRow key={index} market={item} />
      ))}
    </div>
  );
}

export default App;
