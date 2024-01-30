import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Bem-vindo à Crypto Explorer
        </h1>
        <p className="mb-6 text-gray-600">
          Explore dados de criptomoedas em tempo real
        </p>
        <Link href="/server">
          <p className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition-colors">
            Ver Criptomoedas
          </p>
        </Link>
        <Link href="/sobre">
          <p className="mt-6 px-6 py-3 bg-gray-600 text-white rounded-md text-lg hover:bg-gray-700 transition-colors">
            O que é uma CriptoMoeda
          </p>
        </Link>
      </div>
    </div>
  );
}
