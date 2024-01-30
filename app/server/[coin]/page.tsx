import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ICard {
  id: string;
  symbol: string;
  name: string;
  market_data: {
    current_price: {
      brl: number;
    };
  };
  community_data: {
    facebook_likes: number;
    twitter_followers: number;
    telegram_channel_user_count: number;
  };
  image?: {
    large?: string;
  };
  tickers: {
    trust_score: string;
  }[];
}

const getCoinById = async (id: string): Promise<ICard> => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  return await response.json();
};

const CardPage = async ({ params: { coin } }: { params: { coin: string } }) => {
  const moeda = await getCoinById(coin);

  const trustScoreColors: { [key: string]: string } = {
    green: "text-green-500",
    yellow: "text-yellow-500",
    red: "text-red-500",
  };

  const trustScore =
    moeda.tickers && moeda.tickers.length > 0
      ? moeda.tickers[0].trust_score
      : "unknown";

  const getTrustScoreColor = (score: string) =>
    trustScoreColors[score] || "text-gray-500";

  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
        <div className="md:flex">
          <div className="p-8">
            {moeda.image?.large && (
              <div className="md:flex-shrink-0">
                <Image
                  src={moeda.image.large}
                  alt={moeda.name}
                  width={40}
                  height={40}
                />
              </div>
            )}
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {moeda.name}
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              {moeda.symbol.toUpperCase()}
            </a>
            <p className="mt-2 text-gray-500">
              Preço atual: R$ {moeda.market_data.current_price.brl}
            </p>
          </div>
          <div className="p-8 border-t border-gray-200 md:border-t-0 md:border-l">
            <div className="flex items-center">
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  Facebook Likes: {moeda.community_data.facebook_likes}
                </div>
                <div className="text-sm text-gray-500">
                  Twitter Followers: {moeda.community_data.twitter_followers}
                </div>
                <div className="text-sm text-gray-500">
                  Telegram Users:{" "}
                  {moeda.community_data.telegram_channel_user_count}
                </div>
                <div className="mt-2">
                  Trust Score:{" "}
                  <p className={getTrustScoreColor(trustScore)}>{trustScore}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href="/" className="flex justify-center mt-6">
        <p className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition-colors ">
          Voltar
        </p>
      </Link>
    </>
  );
};

export default CardPage;
