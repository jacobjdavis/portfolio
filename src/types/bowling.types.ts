export type Roll = number | string;
export interface IFrameProps {
  frame: Frame;
  score: number;
}

export interface IBowlingProps {
  rolls: Roll[];
}

export type Frame = {
  roll1?: number | string;
  roll2?: number | string;
  roll3?: number | string;
};
