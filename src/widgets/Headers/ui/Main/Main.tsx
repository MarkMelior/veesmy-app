import { ArrowLeftIcon, FilterOutlineIcon } from '@/shared/icons';
import { Badge, Button, Header } from '@/shared/ui';

import { FiltersModal } from '@/features/FiltersModal';
import { SortModal } from '@/features/SortModal';

export const Main = () => (
  <Header
    placement="start"
    rightActions={(
      <>
        <FiltersModal>
          <Button iconOnly={true}>
            <Badge show={true}>
              <FilterOutlineIcon />
            </Badge>
          </Button>
        </FiltersModal>
        <SortModal>
          <Button iconOnly={true}>
            <Badge show={false}>
              <ArrowLeftIcon className="rotate-90" />
            </Badge>
          </Button>
        </SortModal>
      </>
    )}
    title="Все тренировки"
  />
);
