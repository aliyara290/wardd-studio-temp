"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

/**
 * A wrapper around Next.js Link component that scrolls to top on navigation
 */
const ScrollToTopLink = ({ href, children, ...props }) => {
  const router = useRouter();

  const handleClick = (e) => {
    // If this is an external link or anchor link, let the browser handle it
    if (href.startsWith('http') || href.startsWith('#')) {
      return;
    }

    e.preventDefault();
    
    // First scroll to top
    window.scrollTo(0, 0);
    
    // Then navigate
    router.push(href);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;