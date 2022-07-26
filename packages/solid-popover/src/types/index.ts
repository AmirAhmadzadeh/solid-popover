import { JSX } from "solid-js/jsx-runtime";

export type ContentLocation = {
  top: number;
  left: number;
};

export type BoundaryViolations = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};

export type PopoverState = {
  childRect: ClientRect;
  popoverRect: ClientRect;
  parentRect: ClientRect;
  boundaryRect: ClientRect;
  position?: PopoverPosition;
  align?: PopoverAlign;
  spacing: number;
  nudgedLeft: number;
  nudgedTop: number;
  boundaryInset: number;
  violations: BoundaryViolations;
  hasViolations: boolean;
};

export type ContentRenderer = (popoverState: PopoverState) => JSX.Element;
export type ContentLocationGetter = (
  popoverState: PopoverState
) => ContentLocation;

export type PopoverPosition = "left" | "right" | "top" | "bottom";
export type PopoverAlign = "start" | "center" | "end";

export type UseArrowContainerProps = {
  childRect: ClientRect;
  popoverRect: ClientRect;
  position?: PopoverPosition;
  arrowSize: number;
  arrowColor: string;
};

export type ArrowContainerProps = UseArrowContainerProps & {
  children: JSX.Element;
  className?: string;
  style?: JSX.CSSProperties;
  arrowStyle?: JSX.CSSProperties;
  arrowClassName?: string;
};

export type PopoverProps = {
  isOpen: boolean;
  children: JSX.Element;
  content: ContentRenderer | JSX.Element;
  positions?: PopoverPosition[];
  align?: PopoverAlign;
  reposition?: boolean;
  ref?: HTMLElement;
  containerClassName?: string;
  parentElement?: HTMLElement;
  containerStyle?: Partial<CSSStyleDeclaration>;
  contentLocation?: ContentLocationGetter | ContentLocation;
  boundaryElement?: HTMLElement;
  boundaryInset?: number;
  boundaryTolerance?: number;
  onClickOutside?: (e: MouseEvent) => void;
  spacing?: number;
};

export type PositionPopoverProps = {
  positionIndex?: number;
  childRect?: DOMRect;
  parentRect?: DOMRect;
  boundaryRect: DOMRect;
  contentLocation?: ContentLocationGetter | ContentLocation;
  //parentRectAdjusted?: DomRect;
};

export type GetNewPopoverRectProps = {
  position: PopoverPosition;
  reposition: boolean;
  align: PopoverAlign;
  childRect: ClientRect;
  popoverRect: ClientRect;
  boundaryRect: ClientRect;
  spacing: number;
};

export type PositionPopover = (props?: PositionPopoverProps) => void;

//export type PopoverRefs = {
//popoverRef: HTMLDivElement;
//scoutRef: HTMLDivElement;
//};

//export type UsePopoverResult = {
//positionPopover: PositionPopover;
//popoverRef: HTMLDivElement;
//scoutRef: MutableRefObject<HTMLDivElement>;
//};

//export interface UseArrowContainerResult {
//arrowStyle: CSSProperties;
//arrowContainerStyle: CSSProperties;
//}

//export const usePopover: (props: UsePopoverProps) => UsePopoverResult;
//export const useArrowContainer: (
//props: UseArrowContainerProps
//) => UseArrowContainerResult;

//export const Popover: Component<ParentProps<PopoverProps>>;
//export const ArrowContainer: FC<ArrowContainerProps>;
