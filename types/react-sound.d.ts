// Type definitions for react-sound 0.8.0
// Project: https://github.com/leoasis/react-sound
// Definitions by: Koby Boyango <https://github.com/KobyBo>
// TypeScript Version: 2.3

declare module "react-sound" {
	import * as React from "react";
	
	enum PlayStatuses {
		PLAYING = "PLAYING",
		STOPPED = "STOPPED",
		PAUSED = "PAUSED"
	}

	interface SoundProps {
		url: string,
		playStatus: PlayStatuses,
		position?: number,
		playFromPosition?: number,
		volume?: number,
		onLoading?: (() => void) | null,
		onLoad?: (() => void) | null,
		onPlaying?: (() => void) | null,
		onPause?: (() => void) | null,
		onResume?: (() => void) | null,
		onStop?: (() => void) | null,
		onFinishedPlaying?: (() => void) | null,
		autoLoad?: boolean,
		loop?: boolean,
	}

	export default class Sound extends React.Component<SoundProps, {}> {
		static status: typeof PlayStatuses;
	}
}