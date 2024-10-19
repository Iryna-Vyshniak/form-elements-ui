export const BASE_TRANSITION = {
  repeat: Infinity,
  ease: 'linear',
};

export const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};

export const BLUR_VARIANT = {
  hidden: {
    opacity: 0,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
  },
};
