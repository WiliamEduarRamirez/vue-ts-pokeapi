const sleep = (timer: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timer);
  });
};

export default sleep;
