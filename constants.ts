import {
  BeakerIcon,
  CartIcon,
  FourSquareIcon,
  HomeIcon,
  LockIcon,
  PlantBucketIcon,
  SquareDownIcon,
} from '@/components/icons/index';

export const HEADER_LINKS = [
  {
    id: 1,
    icon: FourSquareIcon,
  },
  {
    id: 2,
    icon: SquareDownIcon,
  },
  {
    id: 3,
    icon: BeakerIcon,
  },
] as const;

export const SIDE_NAV_LINKS = [
  { href: '/', icon: HomeIcon },
  { href: '/plants', icon: PlantBucketIcon },
  { href: '/cart', icon: CartIcon },
  { href: '/list', icon: LockIcon },
] as const;
