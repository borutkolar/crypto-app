import MarketRow from "./components/MarketRow";
import { Market } from "./interfaces";

const currencies: Market[] = [
  { name: "Bitcoin", token: "BTC" },
  { name: "Ethereum", token: "ETH" },
  { name: "Litecoin", token: "LTC" },
  { name: "Ripple", token: "XRP" },
  { name: "Bitcoin Cash", token: "BCH" },
];

function App() {
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
      <p>Crypto App</p>
      {currencies.map((item, index) => (
        <MarketRow key={index} market={item} />
      ))}
    </div>
  );
}

export default App;
