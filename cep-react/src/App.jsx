import { useState } from "react";

export default function BuscarCep() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");

  const buscar = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    setEndereco(
      `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`,
    );
  };
  return (
    <form onSubmit={buscar}>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button type="submit">Buscar</button>
      <p>{endereco}</p>
    </form>
  );
}
