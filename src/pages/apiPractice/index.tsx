import DefaultLayout from "~/layout";
import { api } from "~/utils/api";
import { useForm1 } from "./zustandStore";

const ApiPractice = () => {
  const { data, isLoading, refetch } = api.post.getPosts.useQuery();
  const { form, setForm } = useForm1();
  const { mutate: createForm } = api.post.create.useMutation({
    onSuccess: async () => {
      setForm("");
      await refetch();
    },
  });
  return (
    <div className="flex h-screen w-screen flex-col justify-around">
      <div>
        <h1>Posts</h1>
        <div className="flex flex-col gap-3">
          {(!isLoading && data ? data : []).map((e) => (
            <div>{e.name}</div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <input
          value={form}
          aria-label="Form 1"
          className="border-2 border-white bg-black"
          onChange={(e) => setForm(e.target.value)}
        />
        <button onClick={async () => createForm({ name: form })}>
          Create post
        </button>
      </div>
    </div>
  );
};

ApiPractice.getLayout = function getLayout(page: JSX.Element) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ApiPractice;
