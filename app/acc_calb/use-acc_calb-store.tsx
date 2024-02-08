import React from "react";
import { create } from "zustand";

interface Data {
  freq?: number;
  sensitivity?: number;
  dev?: number;
  dB?: number;
  phase?: number;
  uncertainty?: number;
}

interface CalibrationCerts {
  datas: Data[];
  ref: {
    freq?: number;
    value?: number;
    unit?: "mV/g" | "mV/ms-2";
  };
  onChangeDatas: (e: React.ChangeEvent<HTMLInputElement>, idx: number) => void;
  add: () => void;
  remove: (freq: number) => void;
  onChangeRef: (value: number, type: string) => void;
  recalculate: () => void;
}

const datas = [
  {
    freq: 0.5,
    sensitivity: undefined,
    dev: 2.7,
    dB: undefined,
    phase: 7.7,
    uncertainty: 1.8,
  },
  {
    freq: 1,
    sensitivity: undefined,
    dev: 2.5,
    dB: undefined,
    phase: 3.4,
    uncertainty: 1.0,
  },
  {
    freq: 2,
    sensitivity: undefined,
    dev: 2.2,
    dB: undefined,
    phase: 1.4,
    uncertainty: 1.0,
  },
  {
    freq: 5,
    sensitivity: undefined,
    dev: 1.7,
    dB: undefined,
    phase: 0.2,
    uncertainty: 1.0,
  },
  {
    freq: 7,
    sensitivity: undefined,
    dev: 1.5,
    dB: undefined,
    phase: 0.0,
    uncertainty: 1.0,
  },
  {
    freq: 10,
    sensitivity: undefined,
    dev: 1.2,
    dB: undefined,
    phase: -0.2,
    uncertainty: 1.0,
  },
  {
    freq: 15,
    sensitivity: undefined,
    dev: 1.3,
    dB: undefined,
    phase: undefined,
    uncertainty: 1.5,
  },
  {
    freq: 30,
    sensitivity: undefined,
    dev: 0.8,
    dB: undefined,
    phase: undefined,
    uncertainty: 1.5,
  },
  {
    freq: 50,
    sensitivity: undefined,
    dev: 0.5,
    dB: undefined,
    phase: undefined,
    uncertainty: 1.5,
  },
  {
    freq: 100,
    sensitivity: undefined,
    dev: 0.0,
    dB: undefined,
    phase: undefined,
    uncertainty: 1.0,
  },
  {
    freq: 300,
    sensitivity: undefined,
    dev: -0.9,
    dB: undefined,
    phase: undefined,
    uncertainty: 1.0,
  },
  {
    freq: 500,
    sensitivity: undefined,
    dev: -1.3,
    dB: undefined,
    phase: undefined,
    uncertainty: 1.0,
  },
  {
    freq: 1000,
    sensitivity: undefined,
    dev: -1.8,
    dB: undefined,
    phase: undefined,
    uncertainty: 1.0,
  },
  {
    freq: 3000,
    sensitivity: undefined,
    dev: -2.4,
    dB: undefined,
    phase: undefined,
    uncertainty: 2.5,
  },
  {
    freq: 5000,
    sensitivity: undefined,
    dev: -2.2,
    dB: undefined,
    phase: undefined,
    uncertainty: 2.5,
  },
  {
    freq: 7000,
    sensitivity: undefined,
    dev: -1.5,
    dB: undefined,
    phase: undefined,
    uncertainty: 2.5,
  },
  {
    freq: 10000,
    sensitivity: undefined,
    dev: 0.1,
    dB: undefined,
    phase: undefined,
    uncertainty: 2.5,
  },
];

const getValues = (type: string, value: number, ref_sensitivity?: number) => {
  let result;
  if (ref_sensitivity) {
    switch (type) {
      case "dev":
        result = {
          sensitivity: (value * ref_sensitivity) / 100 + ref_sensitivity,
          dev: value,
          dB: 20 * Math.log10(value / 100 + 1),
        };
        break;
      case "sensitivity":
        result = {
          sensitivity: value,
          dev: ((value - ref_sensitivity) / ref_sensitivity) * 100,
          dB: 20 * Math.log10(value / ref_sensitivity),
        };
        break;
      case "dB":
        result = {
          sensitivity: ref_sensitivity * Math.pow(10, value / 20),
          dev: (Math.pow(10, value / 20) - 1) * 100,
          dB: value,
        };
        break;
    }
  }
  switch (type) {
    case "freq":
      result = { freq: value };
      break;
    case "phase":
      result = { phase: value };
      break;
    case "uncertainty":
      result = { uncertainty: value };
      break;
  }

  return result;
};

export const useAccCalbStore = create<CalibrationCerts>((set) => ({
  // initial state
  datas,
  ref: {
    freq: 100,
    value: 99.81,
    unit: "mV/g",
  },

  // methods for manipulating state
  onChangeDatas: (e, idx) =>
    set((state) => {
      const datas = [...state.datas];
      const { name, value } = e.target;
      const { value: ref_sensitivity } = state.ref;
      datas[idx] = {
        ...datas[idx],
        ...getValues(name, Number(value), ref_sensitivity),
      };
      return { datas };
    }),

  add: () =>
    set((state) => {
      return { datas: [...state.datas, {}] };
    }),

  remove: (freq) => {},

  onChangeRef: (value, type) => {
    set((state) => {
      const ref = { ...state.ref, [type]: value };
      return { ref };
    });
  },

  recalculate: () => {
    set((state) => {
      const datas = [...state.datas];
      const newDatas = datas.map((data) => ({
        ...data,
        ...getValues("dev", Number(data.dev), state.ref.value),
      }));
      return { datas: newDatas };
    });
  },
}));
