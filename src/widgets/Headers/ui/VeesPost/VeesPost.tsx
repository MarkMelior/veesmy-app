import { AppRoutes, NOT_IMPLEMENTED } from '@/shared/constants';
import { ArrowLeftIcon, EditOutlineIcon } from '@/shared/icons';
import { openMessage } from '@/shared/lib/open-message';
import { Button, Header } from '@/shared/ui';

interface IVeesPost {
  title: string
}

export const VeesPost = ({ title }: IVeesPost) => (
  <Header
    description="Завершенная тренировка"
    leftActions={(
      <Button iconOnly={true} to={AppRoutes.MAIN}>
        <ArrowLeftIcon />
      </Button>
    )}
    rightActions={(
      <Button iconOnly={true} onClick={() => openMessage(NOT_IMPLEMENTED)}>
        <EditOutlineIcon />
      </Button>
    )}
    title={title}
  />
);
