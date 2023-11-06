const distributionList = [
  "Normal",
  "T-distribution",
  "Rectangular",
  "U-shaped",
  "Triangular",
] as const;
const typeList = ["A", "B"] as const;
const divisorList = ["√2", "√3", "√6"] as const;
const dofList = ["∞"] as const;

export interface Mu {
  title: string;
  value: number;
  distribution: (typeof distributionList)[number];
  type: (typeof typeList)[number];
  divisor: number | (typeof divisorList)[number];
  ui: number;
  ci: number;
  vi: number | (typeof dofList)[number];
}
