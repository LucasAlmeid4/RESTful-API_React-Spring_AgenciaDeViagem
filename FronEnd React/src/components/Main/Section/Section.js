import Card from "./Card/Card";
import "./Section.css";

/* eslint-disable jsx-a11y/alt-text */
function Section() {
  return (
    <section class="text-center">
      <h2 class="mb-5">
        <strong>Destinos mais procurados</strong>
      </h2>

      <p className="subtitulo">Opções internacionais:</p>

      <div class="row opcoes-de-destinos">
        <Card
          foto={
            "https://cdn.pixabay.com/photo/2021/07/10/18/37/carousel-6402074_960_720.jpg"
          }
          nome={"Miami"}
          text={
            "Bacon ipsum dolor amet porchetta ball tip tenderloin aliqua. Doner culpa officia quis aliquip qui."
          }
        ></Card>

        <Card
          foto={
            "https://cdn.pixabay.com/photo/2021/08/19/12/53/bremen-6557996_960_720.jpg"
          }
          nome={"Noruega"}
          text={
            "Bacon ipsum dolor amet porchetta ball tip tenderloin aliqua. Doner culpa officia quis aliquip qui."
          }
        ></Card>

        <Card
          foto={
            "https://cdn.pixabay.com/photo/2021/08/02/10/45/cityscape-6516367_960_720.jpg"
          }
          nome={"New York"}
          text={
            "Bacon ipsum dolor amet porchetta ball tip tenderloin aliqua. Doner culpa officia quis aliquip qui."
          }
        ></Card>

        <Card
          foto={
            "https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_960_720.jpg"
          }
          nome={"Portugal"}
          text={
            "Bacon ipsum dolor amet porchetta ball tip tenderloin aliqua. Doner culpa officia quis aliquip qui."
          }
        ></Card>

        </div>


        <p className="subtitulo">Opções nacionais:</p>

        <div class="row opcoes-de-destinos">
        <Card
          foto={
            "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg"
          }
          nome={"Recife"}
          text={
            "Bacon ipsum dolor amet porchetta ball tip tenderloin aliqua. Doner culpa officia quis aliquip qui."
          }
        ></Card>

        <Card
          foto={
            "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg"
          }
          nome={"Natal"}
          text={
            "Bacon ipsum dolor amet porchetta ball tip tenderloin aliqua. Doner culpa officia quis aliquip qui."
          }
        ></Card>

        <Card
          foto={
            "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_960_720.jpg"
          }
          nome={"Rio De janeiro"}
          text={
            "Bacon ipsum dolor amet porchetta ball tip tenderloin aliqua. Doner culpa officia quis aliquip qui."
          }
        ></Card>
        <Card
          foto={
            "https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875_960_720.jpg"
          }
          nome={"Cananeia"}
          text={
            "Bacon ipsum dolor amet porchetta ball tip tenderloin aliqua. Doner culpa officia quis aliquip qui."
          }
        ></Card>
      </div>
    </section>
  );
}

export default Section;
