import { Market } from "../../interfaces";

interface Props {
  market: Market;
}

function MarketRow({ market }: Props) {
  const { name, token } = market;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p>{name}</p>
      <p>{token}</p>
    </div>
  );
}

export default MarketRow;
