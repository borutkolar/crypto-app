import { TimeInterval } from "../models/enums";

export const MAIN_MENU: { text: string; value: TimeInterval }[] = [
  { text: "1H", value: TimeInterval.Hourly },
  { text: "24H", value: TimeInterval.Daily },
  { text: "7D", value: TimeInterval.Weekly },
  { text: "30D", value: TimeInterval.Monthly },
  { text: "12M", value: TimeInterval.Yearly },
];
