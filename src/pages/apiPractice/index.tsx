import DefaultLayout from "~/layout";

const ApiPractice = () => {
  return <div>KKK</div>;
};

ApiPractice.getLayout = function getLayout(page: JSX.Element) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ApiPractice;
