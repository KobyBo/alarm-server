/// <reference path="../../../types/react-sound.d.ts"/>
import * as React from "react";
import "react-mdl/extra/material";
import "react-mdl/extra/material.css";
import { Layout, Header, HeaderRow, Drawer, Content, Grid, Cell, Button } from "react-mdl";
import Sound from "react-sound";

const BUTTON_LABELS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface AppProps { }

interface AppState {
	shouldPlayClickSound: boolean
}

export default class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);

		this.__renderInsertAlarmCode = this.__renderInsertAlarmCode.bind(this);
		this.__handleCodeButtonClick = this.__handleCodeButtonClick.bind(this);

		this.state = {
			shouldPlayClickSound: false
		};
	}

	render() {
		return (
			<Layout>
				<Header>
					<HeaderRow title="Alarm">
					</HeaderRow>
				</Header>

				<Content style={{display: "flex", alignItems: "stretch"}}>
					{this.__renderInsertAlarmCode()}
					{this.state.shouldPlayClickSound && <Sound 
															url="./multimedia_button_click_010.mp3"
															playStatus={Sound.status.PLAYING}
															onFinishedPlaying={() => this.setState({shouldPlayClickSound: false})} />}
				</Content>
			</Layout>
		)
	}

	__renderInsertAlarmCode() {
		const buttons = BUTTON_LABELS.map((label) => {
			return (
				<div className="inner-grid" key={label}>
					<Button 
						key={"codeButton" + label} 
						className="inner-square" 
						raised ripple accent 
						onClick={() => this.__handleCodeButtonClick(label)}>
						{label}
					</Button>
				</div>
			);
		});

		return (
			<div className="outer-square">
				{buttons}
			</div>
		);
	}

	__handleCodeButtonClick(label: number) {
		console.log("Clicked " + label);
		this.setState({shouldPlayClickSound: true});
	}
}