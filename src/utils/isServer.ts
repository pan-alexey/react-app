const isServer = (): boolean => {
  return typeof process !== 'undefined' && process.release.name === 'node';
};

export default isServer;
