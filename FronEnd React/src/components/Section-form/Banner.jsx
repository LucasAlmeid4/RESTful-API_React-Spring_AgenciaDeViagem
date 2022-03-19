import React from "react";

export default function banner() {
  return (
    <>
      <div className="banner">
        <p>
          Caro cliente, tendo criado a conta ou não, aqui podera nós dar mais
          informações...
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="btn-warning rounded"
          >
            Mais informações 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-info-circle ms-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </button>
        </p>
      </div>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Informativo{" "}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Caro cliente, tendo criado a conta ou não, aqui podera nós dar
              mais informações assim você pode conferir os destinos mais
              rapidamente e até reservar para colegas. Poderemos ligar e enviar
              e-mail com promoções. Isso diminui a burocracia obrigatoria do
              login e nós dá a chance de lhe oferecer atualizações dos preços e
              destinos.
              <br />
              <strong>
                Os canais de contato(telefone, email) serão guardados para
                eventual contato e a palavra-passe substitui a senha de acesso
                que teria ao se cadastrar, ao entrar em contato conosco iremos
                confirmar esses dados em atendimentos fora da plataforma.
              </strong>
              <br />
              Recomendamos prestar muita atenção pois qualquer eventual erro só podera ser alterado via telefone ou pessoalmente em uma de nossas unidades
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
