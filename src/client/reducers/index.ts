import { Action } from "redux";

enum AlarmState { on, off }

interface State {
	alarmState: AlarmState,
}

const initialState: State = {
	alarmState: AlarmState.on
};

export default function reducers (state: State = initialState, action: Action): State {
	return state;
};