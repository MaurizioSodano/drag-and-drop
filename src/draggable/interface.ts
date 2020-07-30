//Draggable
export interface Draggable {
  startDragHandler(event: DragEvent): void;
  endDragHandler(event: DragEvent): void;
}

export interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dragDropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}
