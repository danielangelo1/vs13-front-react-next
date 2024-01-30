"use client";

import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Desculpa, não encontramos essa página :/
      </h2>
      <Link href="/">
        <p className="text-lg text-blue-600 hover:text-blue-800 hover:underline">
          Voltar
        </p>
      </Link>
    </div>
  );
};

export default Error;
