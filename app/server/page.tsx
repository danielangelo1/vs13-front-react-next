import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface Coins {
  id: string;
  symbol: string;
  name: string;
}

const getCoins = async (): Promise<Coins[]> => {
  const API_URL = "https://api.coingecko.com/api/v3/coins/list";

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error na requisiçao", error);
    return [];
  }
};

const Server = async () => {
  const coins = await getCoins();
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Cripto Moedas
      </h1>
      <main className="p-4 flex flex-wrap justify-center">
        {coins.map((coin) => (
          <Link
            key={coin.id}
            href={`/server/${coin.id}`}
            className="m-4 w-60 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-4">
              <h2 className="text-xl font-bold text-white">{coin.name}</h2>
              <p className="text-gray-400">{coin.symbol.toUpperCase()}</p>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
};

export default Server;
