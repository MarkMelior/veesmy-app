'use client';

import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

import { AppRoutes } from '@/shared/constants';
import { AddOutlineIcon, SettingsOutlineIcon, VeesIcon } from '@/shared/icons';
import { Background, Button, Flex, Layout } from '@/shared/ui';

import styles from './navbar.module.scss';

interface IBaseNavbarItem {
  disabled?: boolean
  icon: React.ReactNode
  title: string
}

type TNavbarItems =
  | (IBaseNavbarItem & { href: AppRoutes, onClick?: never })
  | (IBaseNavbarItem & { href?: never, onClick: () => void });

const navbarItems: TNavbarItems[] = [
  {
    href: AppRoutes.VEES,
    icon: <VeesIcon />,
    title: 'Тренировки',
  },
  {
    icon: <AddOutlineIcon height={28} width={28} />,
    onClick: () => {},
    title: 'Добавить',
  },
  {
    href: AppRoutes.SETTINGS,
    icon: <SettingsOutlineIcon />,
    title: 'Настройки',
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <Flex className={styles.wrapper} gap={16} vertical={true}>
      <Background
        as="nav"
        border="top"
        opacity={true}
        radius="none"
      >
        <Layout className={styles.layout}>
          {navbarItems.map(({ disabled, href, icon, onClick, title }) => (
            <Button
              className={clsx(styles.item, { [styles.active]: href === pathname })}
              disabled={disabled}
              key={title}
              onClick={onClick}
              size="none"
              to={href}
              variant="none"
            >
              <div className={styles.icon}>
                {icon}
              </div>
              {title}
            </Button>
          ))}
        </Layout>
      </Background>
    </Flex>
  );
};
