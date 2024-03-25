export const slideIn = (direction, delay) => {
  const distance = direction === "left" || direction === "right" ? "100%" : "80px";

  return {
    hidden: {
      x: direction === "right" ? distance : direction === "left" ? `-${distance}` : 0,
      y: direction === "down" ? distance : direction === "up" ? `-${distance}` : 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: delay,
        ease: [0.6, 0.05, 0.1, 0.9],
      },
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: delay,
        ease: [0.6, 0.05, 0.1, 0.9],
      },
    },
  };
};
