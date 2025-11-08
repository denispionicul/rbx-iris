export interface Hovered {
	isHoveredEvent: boolean;
	hovered: () => boolean;
}

export interface Clicked {
	lastClickedTick: number;
	clicked: () => boolean;
}

export interface RightClicked {
	lastRightClickedTick: number;
	rightClicked: () => boolean;
}

export interface DoubleClicked {
	lastClickedTime: number;
	lastClickedPosition: Vector2;
	lastDoubleClickedTick: number;
	doubleClicked: () => boolean;
}

export interface CtrlClicked {
	lastCtrlClickedTick: number;
	ctrlClicked: () => boolean;
}

export type ID = string;

export type Widget = {
	ID: ID;
	type: string;
	lastCycleTick: number;
	trackedEvents: {};
	parentWidget: ParentWidget;

	arguments: {};
	providedArguments: {};

	Instance: GuiObject;
	ZIndex: number;
};

export type ParentWidget = Widget & {
	ChildContainer: GuiObject;
	ZOffset: number;
	ZUpdate: boolean;
};
