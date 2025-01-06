import { ArrowLeftIcon, FilterOutlineIcon } from '@/shared/icons';
import { Badge, Button, Header } from '@/shared/ui';

export const Main = () => (
  <Header
    placement="start"
    rightActions={(
      <>
        <Button iconOnly={true}>
          <Badge>
            <FilterOutlineIcon />
          </Badge>
        </Button>
        <Button iconOnly={true}>
          <Badge>
            <ArrowLeftIcon className="rotate-90" />
          </Badge>
        </Button>
      </>
    )}
    title="Все тренировки"
  />
);
