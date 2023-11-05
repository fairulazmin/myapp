export type SourceType = {
  source: string;
  value: number;
  distribution:
    | "Normal"
    | "T-distribution"
    | "Rectangular"
    | "U-shaped"
    | "Triangular";
  type: "A" | "B";
  divisor: number | "√3" | "√2" | "√6";
  ui: number;
  ci: number;
  vi: number | "∞";
};
