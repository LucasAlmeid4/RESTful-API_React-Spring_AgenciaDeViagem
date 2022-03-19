import Forms from "./Forms/Forms";
import "./SectionFormsCss.css";
import Banner from "./Banner";

function SectionForms() {
  return (
    <section className="text-center">
      <h1 className="mt-4">Área de cadastro</h1>
      <hr />
      <Banner />
      <Forms></Forms>
    </section>
  );
}

export default SectionForms;
