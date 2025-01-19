import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="tw-mx-auto tw-flex tw-max-w-[1024px] tw-flex-col tw-px-4">{children}</div>;
}
