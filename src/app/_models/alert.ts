export class Alert
{
  id: string | undefined;
  type: AlertType | undefined;
  message: string | undefined;
  autoClose: boolean | undefined;
  // @ts-ignore
  keepAfterRouteChange: boolean;
  fade: boolean | undefined;
}
export enum AlertType
{
  Success,
  Error,
  Info,
  Warning
}
