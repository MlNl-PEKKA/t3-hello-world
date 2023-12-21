import { create } from "zustand";
import { combine } from "zustand/middleware";

const useForm1 = create(
  combine({ form: "" }, (set) => ({
    setForm: (e: string) => set({ form: e }),
  })),
);

export default useForm1;
