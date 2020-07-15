import { GameState } from "csgo-gsi-types";

export interface GameStateMessage {
  type: "gsi";
  gameState: GameState;
}
export interface AppState {
  gameInDemoMode: boolean;
  demoPlaying: boolean;
  demoPath: string | null;
  volume: number;
  safezoneX: number;
  safezoneY: number;
}
export interface GameStateChangeMessage extends AppState {
  type: "change";
}
export type Message = GameStateMessage | GameStateChangeMessage;
