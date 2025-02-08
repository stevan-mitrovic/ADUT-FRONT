import { FC } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import clsx from "clsx";

type Link = {
  title: string;
  href: string;
};

interface Props {
  links: Link[];
};

/**
 * Breadcrumbs component for navigation.
 *
 * @param {Object} props - Component properties
 * @param {Array<{ title: string, href: string }>} props.links - Array of breadcrumb items.
 * @returns {JSX.Element} The rendered Breadcrumbs component.
 */
const Breadcrumbs: FC<Props> = ({ links = [] }: Props) => {
  return (
    <nav className={styles.breadcrumbs} aria-label="breadcrumb">
      <ul>
        {links.map((link, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            {link.href.length > 0 ? (
              <Link
                href={link.href}
                className={clsx(
                  styles.breadcrumbContent,
                  styles.breadcrumbLink
                )}
              >
                {link.title}
              </Link>
            ) : (
              <span
                className={clsx(
                  styles.breadcrumbContent,
                  styles.breadcrumbText
                )}
              >
                {link.title}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
