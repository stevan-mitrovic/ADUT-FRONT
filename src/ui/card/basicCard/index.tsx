import { FC } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

interface Props {
  children: any;
  className?: string;
}

/**
 * Basic Card component container.
 *
 * @param {Object} props - Component properties
 * @param {any} props.children - Children for the component.
 * @param {string} props.className - Class name for additional styling of the component.
 * @returns {JSX.Element} The rendered BasicCard component.
 */
const BasicCard: FC<Props> = ({ children, className = "" }: Props) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default BasicCard;
