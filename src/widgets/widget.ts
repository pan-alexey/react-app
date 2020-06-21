export const widgets: {
  [key: string]: {
    component: string;
    lazy: boolean;
  };
} = {
  header: {
    component: './Header',
    lazy: true,
  },
};

const getComponent = (key: string) => {
  const { component } = widgets[key];

  return require(component).default;
};

export default getComponent;
