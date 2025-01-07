'use client';

import { useEffect, useState } from 'react';

import { ArrowLeftIcon, FilterOutlineIcon } from '@/shared/icons';
import { Badge, Button, Header } from '@/shared/ui';

import { FiltersModal } from '@/features/FiltersModal';
import { SortModal } from '@/features/SortModal';

export const Main = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('home-filters-buttons');

      if (element) {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < 32) {
          setIsDisabled(false);
        }
        else {
          setIsDisabled(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Header
      placement="start"
      rightActions={(
        <>
          <FiltersModal>
            <Button
              color={isDisabled ? 'base' : 'primary'}
              disabled={isDisabled}
              iconOnly={true}
            >
              <Badge show={true}>
                <FilterOutlineIcon />
              </Badge>
            </Button>
          </FiltersModal>
          <SortModal>
            <Button
              color={isDisabled ? 'base' : 'primary'}
              disabled={isDisabled}
              iconOnly={true}
            >
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
};
