export interface ISettings {
  isSelected: boolean;
  deleteTimeOut: {};
  isDeleteExpiredTodos: {
    title: string;
    value: boolean;
  };
  id?: string;
}

export interface IDeleteExpiredSetting {
  isSelected: boolean;
  title: string;
  id: string;
}
