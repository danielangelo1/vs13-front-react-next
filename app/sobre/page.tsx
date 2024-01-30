import Link from "next/link";
import React from "react";

const Sobre = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center py-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Sobre Criptomoedas
            </h1>
            <p className="text-lg text-gray-600">
              Entenda o mundo das moedas digitais
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl text-gray-800 font-bold mb-5">
              O que é uma Criptomoeda?
            </h2>
            <p className="text-gray-600 mb-4">
              Uma criptomoeda é uma forma de moeda digital criada e gerenciada
              por meio do uso de tecnologias de criptografia avançadas. Ao
              contrário das moedas físicas, elas existem apenas em formato
              digital e não têm uma forma física.
            </p>
            <p className="text-gray-600">
              As criptomoedas funcionam usando uma tecnologia chamada
              blockchain, um sistema descentralizado que registra todas as
              transações em uma rede de computadores. A natureza descentralizada
              das criptomoedas as torna teoricamente imunes à interferência ou
              manipulação governamental.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl text-gray-800 font-bold mb-5">
              Por que Criptomoedas são Populares?
            </h2>
            <p className="text-gray-600">
              As criptomoedas são populares por várias razões. Uma das
              principais é a ideia de que elas fornecem liberdade financeira dos
              sistemas monetários tradicionais. Investidores em criptomoedas
              também as veem como o futuro do dinheiro, com potencial de alto
              retorno sobre os investimentos.
            </p>
          </div>
          <Link href="/server">
            <p className="mt-11 px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition-colors">
              Ver Criptomoedas
            </p>
          </Link>
          <Link href="/" className="flex justify-center mt-6">
            <p className="px-6 py-3  bg-gray-600 text-white rounded-md text-lg hover:bg-gray-700 transition-colors ">
              Voltar
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sobre;
