import { TabType } from "./tab";

export interface TabMenuItem {
  id: TabType;
  imageAlt: string;
  label: string;
  description: string;
}
