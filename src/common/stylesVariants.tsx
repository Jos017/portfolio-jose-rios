type Sizes = 'default' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type SizesRem =
  | 'default'
  | 'full'
  | '1rem'
  | '2rem'
  | '3rem'
  | '4rem'
  | '5rem'
  | '6rem'
  | '7rem'
  | '8rem'
  | '9rem'
  | '10rem';

const heightVariants: { [key in Sizes]: string } = {
  default: 'h-0',
  sm: 'h-12',
  md: 'h-16',
  lg: 'h-20',
  xl: 'h-24',
  xxl: 'h-26',
};
const maxWidthVariants: { [key in Sizes]: string } = {
  default: 'max-w-none',
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  xxl: 'max-w-screen-2xl',
};

const menuHeightVariants: { [key in Sizes]: string } = {
  default: 'h-fit',
  sm: 'h-[calc(100vh-3rem)]',
  md: 'h-[calc(100vh-4rem)]',
  lg: 'h-[calc(100vh-5rem)]',
  xl: 'h-[calc(100vh-6rem)]',
  xxl: 'h-[calc(100vh-7rem)]',
};
const minSectionHeigthVariants: { [key in SizesRem]: string } = {
  default: 'min-h-fit',
  full: 'min-h-screen',
  '1rem': 'min-h-[calc(100vh-1rem)]',
  '2rem': 'min-h-[calc(100vh-2rem)]',
  '3rem': 'min-h-[calc(100vh-3rem)]',
  '4rem': 'min-h-[calc(100vh-4rem)]',
  '5rem': 'min-h-[calc(100vh-5rem)]',
  '6rem': 'min-h-[calc(100vh-6rem)]',
  '7rem': 'min-h-[calc(100vh-7rem)]',
  '8rem': 'min-h-[calc(100vh-8rem)]',
  '9rem': 'min-h-[calc(100vh-9rem)]',
  '10rem': 'min-h-[calc(100vh-10rem)]',
};
const offsetTopVariants: { [key in Sizes]: string } = {
  default: 'absolute top-0',
  sm: 'absolute top-12',
  md: 'absolute top-16',
  lg: 'absolute top-20',
  xl: 'absolute top-24',
  xxl: 'absolute top-26',
};

export {
  type Sizes,
  type SizesRem,
  heightVariants,
  maxWidthVariants,
  menuHeightVariants,
  minSectionHeigthVariants,
  offsetTopVariants,
};
