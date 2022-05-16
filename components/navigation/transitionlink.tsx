import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, MouseEvent, ReactNode } from "react";

interface TransitionLinkProps {
  href: string;
  children: ReactNode | ReactNode[];
  className?: string;
  as?: string;
}

const TransitionLink: FC<TransitionLinkProps> = ({ href, as, children, className }) => {
  const router = useRouter();

  const transition = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    router.events.emit("routeChangeStart");
    setTimeout(() => {
      router.push(href);
    }, 1200);
  };

  return (
    <Link href={href} as={as}>
      <a onClick={transition} style={{ width: "100%", cursor: "pointer !important" }}>
        {children}
      </a>
    </Link>
  );
};

export default TransitionLink;
