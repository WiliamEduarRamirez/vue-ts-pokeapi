const sleep = (timer: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, timer);
  });
};

export default sleep;
