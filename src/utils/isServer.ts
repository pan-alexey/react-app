const isServer = (): boolean => {
  return typeof module !== 'undefined' && module.exports && typeof window === 'undefined';
};

export default isServer;
