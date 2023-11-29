import React from "react";
import { create } from "zustand";

const GRAVITY = 9.80665;

interface Data {
  freq: number;
  dev: number;
  sensitivity: number;
  phase?: number;
  uncertainty: number;
}

interface CalibrationCerts {
  sensitivity: { mVg: number; mVms2: number };
  datas: Data[];
  onChangeSensitivity: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
  ) => void;
  onChangeDatas: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
    freq: number,
  ) => void;
  add: () => void;
  remove: (freq: number) => void;
}

const sensitivity = { mVg: 100.1, mVms2: 10.20736 };
const datas = [
  { freq: 0.5, dev: 2.7, sensitivity: 102.8, phase: 7.7, uncertainty: 1.8 },
  { freq: 1, dev: 2.5, sensitivity: 102.6, phase: 3.4, uncertainty: 1.0 },
  { freq: 2, dev: 2.2, sensitivity: 102.3, phase: 1.4, uncertainty: 1.0 },
  { freq: 5, dev: 1.7, sensitivity: 101.8, phase: 0.2, uncertainty: 1.0 },
  { freq: 7, dev: 1.5, sensitivity: 101.6, phase: 0.0, uncertainty: 1.0 },
  { freq: 10, dev: 1.2, sensitivity: 101.3, phase: -0.2, uncertainty: 1.0 },
  { freq: 15, dev: 1.3, sensitivity: 101.4, uncertainty: 1.5 },
  { freq: 30, dev: 0.8, sensitivity: 100.9, uncertainty: 1.5 },
  { freq: 50, dev: 0.5, sensitivity: 100.6, uncertainty: 1.5 },
  { freq: 100, dev: 0.0, sensitivity: 100.1, uncertainty: 1.0 },
  { freq: 300, dev: -0.9, sensitivity: 99.2, uncertainty: 1.0 },
  { freq: 500, dev: -1.3, sensitivity: 98.8, uncertainty: 1.0 },
  { freq: 1000, dev: -1.8, sensitivity: 98.3, uncertainty: 1.0 },
  { freq: 3000, dev: -2.4, sensitivity: 97.7, uncertainty: 2.5 },
  { freq: 5000, dev: -2.2, sensitivity: 97.9, uncertainty: 2.5 },
  { freq: 7000, dev: -1.5, sensitivity: 98.6, uncertainty: 2.5 },
  { freq: 10000, dev: 0.1, sensitivity: 100.2, uncertainty: 2.5 },
];

export const useCountsStore = create<CalibrationCerts>((set) => ({
  // initial state
  sensitivity,
  datas,

  // methods for manipulating state
  onChangeSensitivity: (e, type) => {
    set((state) => {
      const num = Number(e.target.value);
      switch (type) {
        case "mVg":
          return { ...state, sensitivity: { mVg: num, mVms2: num / GRAVITY } };
        case "mVms2":
          return { ...state, sensitivity: { mVg: num * GRAVITY, mVms2: num } };
      }
    });
  },

  // descriptionAction: (e, id) =>
  //   set((state) => {
  //     const todos = [...state.todos];
  //     todos[id] = { ...todos[id], description: e.currentTarget.value };
  //     return { todos };
  //   }),

  onChangeDatas: (e, type, freq) => {
    // set((state) => {
    //   switch (type) {
    //     case "dev":
    //       state.datas.map((data) => {
    //         if (data.freq === freq) {
    //           data.dev = Number(e.target.value);
    //           data.sensitivity =
    //             data.dev * state.sensitivity.mVg * 100 + state.sensitivity.mVg;
    //         }
    //       });
    //       return { datas: state.datas };
    //     case "sensitivity":
    //       state.datas.map((data) => {
    //         if (data.freq === freq) {
    //           data.sensitivity = Number(e.target.value);
    //           data.dev =
    //             (data.sensitivity - state.sensitivity.mVg) /
    //             (state.sensitivity.mVg + 100);
    //         }
    //       });
    //       return { datas: state.datas };
    //   }
    // });
  },
  add: () => {},
  remove: (freq) => {},
}));
