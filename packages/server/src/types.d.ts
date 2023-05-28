declare module "@donkeyclip/motorcortex-player" {
  export default class Player {
    constructor(config: any);
    play(): void;
    pause(): void;
    stop(): void;
    seek(time: number): void;
    setVolume(volume: number): void;
    setPlaybackRate(rate: number): void;
    getDuration(): number;
    getCurrentTime(): number;
    getVolume(): number;
    getPlaybackRate(): number;
    getState(): string;
    getDefinition(): any;
    getLiveDefinition(): any;
    exportLiveDefinition(): any;
    exportDefinition(): any;
    changeInitParams(params: any);
  }
}
