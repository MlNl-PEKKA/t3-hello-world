import { useHomeContext } from "~/context/homeContext";

const HomeComponent = () => {
  return (
    <section className="border-2 border-white p-10">
      Wrapper 1
      <Wrapper2 />
    </section>
  );
};

export default HomeComponent;

const Wrapper2 = () => {
  return (
    <section className="border-2 border-white p-10">
      Wrapper 2
      <Wrapper3 />
      <Wrapper4 />
    </section>
  );
};

const Wrapper3 = () => {
  return (
    <section className="border-2 border-white p-10">
      Wrapper 3
      <FormWrapper1 />
      <FormWrapper2 />
    </section>
  );
};

const Wrapper4 = () => {
  return (
    <section className="border-2 border-white p-10">
      Wrapper 4
      <FormWrapper3 />
      <FormWrapper4 />
    </section>
  );
};

const FormWrapper1 = () => {
  const { setFormVal1 } = useHomeContext();
  return (
    <section className="p-10">
      <input
        aria-label="Form 1"
        className="border-2 border-white bg-black"
        onChange={(e) => setFormVal1(e.target.value)}
      />
    </section>
  );
};

const FormWrapper2 = () => {
  const { setFormVal2 } = useHomeContext();
  return (
    <section className="p-10">
      <input
        aria-label="Form 1"
        className="border-2 border-white bg-black"
        onChange={(e) => setFormVal2(e.target.value)}
      />
    </section>
  );
};

const FormWrapper3 = () => {
  const { formVal1 } = useHomeContext();
  return <section className="p-10">Form value 1 : {formVal1}</section>;
};

const FormWrapper4 = () => {
  const { formVal2 } = useHomeContext();
  return <section className="p-10">Form value 2 : {formVal2}</section>;
};
