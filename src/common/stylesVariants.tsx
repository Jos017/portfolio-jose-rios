type Sizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const heightVariants: { [key in Sizes]: string } = {
  sm: 'h-12',
  md: 'h-16',
  lg: 'h-20',
  xl: 'h-24',
  xxl: 'h-26',
};
const maxWidthVariants: { [key in Sizes]: string } = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  xxl: 'max-w-screen-2xl',
};
const menuHeightVariants: { [key in Sizes]: string } = {
  sm: 'h-[calc(100vh-3rem)]',
  md: 'h-[calc(100vh-4rem)]',
  lg: 'h-[calc(100vh-5rem)]',
  xl: 'h-[calc(100vh-6rem)]',
  xxl: 'h-[calc(100vh-7rem)]',
};
const offsetTopVariants: { [key in Sizes]: string } = {
  sm: 'absolute top-12',
  md: 'absolute top-16',
  lg: 'absolute top-20',
  xl: 'absolute top-24',
  xxl: 'absolute top-26',
};

export {
  type Sizes,
  heightVariants,
  maxWidthVariants,
  menuHeightVariants,
  offsetTopVariants,
};
