'use client';

import { getCurrentDateInfo } from '@/shared/lib/utils';

export const CurrentDate = () => {
  const { dayOfMonth, dayOfWeek, monthNumber } = getCurrentDateInfo();

  return <>{`Сегодня ${dayOfWeek} ${dayOfMonth}.${monthNumber}`}</>;
};

export const dynamic = 'force-dynamic';
