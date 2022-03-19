import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClienteAxios from "../../services/ClienteClass";
import Aviso from "./Aviso";
export default function Cliente() {
  const [cliente, setCliente] = useState([]);

  const getCliente = () => {
    ClienteAxios.getCliente()
      .then((response) => {
        setCliente(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCliente();
  }, []);

  return (
    <div>
      <div className="container text-center">
        <h2 className="mt-5">Todos quem você cadastrou</h2>
        <Aviso></Aviso>
      </div>
      {cliente.map((cliente, key) => {
        return (
          <div className="container-fluid cadastros mt-4" key={key}>
            <div className="row">
              <div className="p-4  col-12 col-md-6 ">
                <p>
                  <strong>Usuário: </strong>
                  {cliente.name}
                </p>
                <hr></hr>
                <p>
                  <strong>CPF: </strong>
                  {cliente.cpf}
                </p>
                <hr></hr>
                <p>
                  <strong>E-mail: </strong>
                  {cliente.email}
                </p>
                <hr></hr>
                <p>
                  <strong>Senha: </strong>
                  {cliente.password}
                </p>
                <hr></hr>
              </div>

              <div className="p-4 col-12 col-md-6">
                <p>
                  <strong>CEP: </strong>
                  {cliente.cep}
                </p>
                <hr></hr>
                <p>
                  <strong>Rua: </strong>
                  {cliente.rua}
                </p>
                <hr></hr>
                <p>
                  <strong>Bairro: </strong>
                  {cliente.bairro}
                </p>
                <hr></hr>
                <p>
                  <strong>Cidade: </strong>
                  {cliente.cidade}
                </p>
                <hr></hr>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
