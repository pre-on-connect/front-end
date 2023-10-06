import {MouseEvent} from "react";

export interface ReactNodeChildren {
    children: React.ReactNode
}

export type CustomMouseEvent<T = HTMLElement> = MouseEvent<T>;