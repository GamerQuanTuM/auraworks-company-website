export const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
      duration: 0.1,
    },
  },
};

export // Link hover animation
const linkVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};
