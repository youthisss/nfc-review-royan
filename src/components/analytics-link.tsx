"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: string;
  href: string;
};

export function AnalyticsLink({ children, eventName, href, onClick, ...props }: Props) {
  return (
    <a
      href={href}
      onClick={(event) => {
        window.gtag?.("event", eventName, { link_url: href });
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
