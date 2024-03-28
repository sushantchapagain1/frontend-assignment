import { CartIcon, HomeIcon, LockIcon, PlantBucketIcon } from './icons';

const links = [
  { href: '/', icon: HomeIcon },
  { href: '/plants', icon: PlantBucketIcon },
  { href: '/cart', icon: CartIcon },
  { href: '/list', icon: LockIcon },
] as const;

function SideNav() {
  return <div>SideNav</div>;
}

export default SideNav;
