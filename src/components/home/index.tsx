import { api } from "~/utils/api";

const HomeComponent = () => {
  const { data, error, isLoading } = api.post.hello.useQuery({ text: "World" });

  return isLoading ? (
    <div>Loading...</div>
  ) : data ? (
    <div>{data.greeting}</div>
  ) : (
    <div>{`Something went wrong. (${error.message})`}</div>
  );
};

export default HomeComponent;
