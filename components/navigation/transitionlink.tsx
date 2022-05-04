import Link from "next/link";
import { useRouter } from "next/router";
import { FC, MouseEvent, ReactNode } from "react";

interface TransitionLinkProps {
  href: string;
  children: ReactNode | ReactNode[];
}

const TransitionLink: FC<TransitionLinkProps> = ({ href, children }) => {
  const router = useRouter();

  const transition = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    router.events.emit("routeChangeStart");
    setTimeout(() => {
      router.push(href);
    }, 1200);
  };

  return (
    <a href={href} onClick={transition}>
      {children}
    </a>
  );
};

export default TransitionLink;
