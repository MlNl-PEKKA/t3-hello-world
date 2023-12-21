import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { produce } from "immer";

export const useFormVal1 = create(
  immer(
    combine({ formVal1: "" }, (set) => ({
      setFormVal1: (e: string) => set(() => ({ formVal1: e })),
    })),
  ),
);

export const useFormVal2 = create(
  immer(
    combine({ formVal2: "" }, (set) => ({
      setFormVal2: (e: string) => set(() => ({ formVal2: e })),
    })),
  ),
);

export const useDeepObj = create(
  immer(
    combine({ deepObj: { obj: { a: true } } }, (set) => ({
      setFormObj: () =>
        set(
          produce((state) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            state.deepObj.obj.a = !state.deepObj.obj.a;
          }),
        ),
    })),
  ),
);
