export interface ISetting {
  title: string;
  id: string;
  isSelected?: boolean;

  [key: string]: string | boolean;
}
