import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { produce } from "immer";

export const useHomeStore = create(
  immer(
    combine(
      { formVal1: "", formVal2: "", deepObj: { obj: { a: true } } },
      (set) => ({
        setFormVal1: (e: string) => set(() => ({ formVal1: e })),
        setFormVal2: (e: string) => set(() => ({ formVal2: e })),
        setFormObj: () =>
          set(
            produce((state) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              state.deepObj.obj.a = !state.deepObj.obj.a;
            }),
          ),
      }),
    ),
  ),
);
