export const widgets: {
  [key: string]: {
    component: string;
  };
} = {
  header: {
    component: './Header',
  },
};

const getComponent = (key: string) => {
  const { component } = widgets[key];

  return require(component).default;
};

export default getComponent;
