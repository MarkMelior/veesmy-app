import { Navbar } from '@/widgets/Navbar/client';

interface INavbarLayout {
  children: React.ReactNode
}

const NavbarLayout = ({ children }: INavbarLayout) => (
  <>
    {children}
    <Navbar />
  </>
);

export default NavbarLayout;
