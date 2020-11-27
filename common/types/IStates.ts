export interface IMeta {
  title: string;
  description: string;
  robots?: string;
  canonical?: string;
  keywords?: string;
  h1?: string;
}

export interface IWidgetHtml {
  html: string;
}

export interface IWidgetPrice {
  price: number;
}

export type WidgetData = IWidgetHtml | IWidgetPrice;

export interface IWidget {
  name: string;
  id: number;
  data: WidgetData;
}

export interface IState {
  meta: IMeta;
  layout: Array<IWidget>;
}
