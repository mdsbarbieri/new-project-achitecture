export type INavigation = {
  dispatch(action: (state: any) => any): void;
  navigate(...args: any): void;
  navigate(any): void;
  reset(state: PartialState<State> | State): void;
  goBack(): void;
  isFocused(): boolean;
  canGoBack(): boolean;
  openDrawer(): void;
  toggleDrawer(): void;
  closeDrawer(): void;
  dangerouslyGetParent(): T;
  dangerouslyGetState(): State;
};
export type IRoute = {
  params: any;
};
