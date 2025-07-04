// components/Loader.js
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/**
 * Reusable Loader component using react-loading-skeleton
 *
 * @param {Object} props - Component props
 * @param {number|string} [props.height=20] - Height of the skeleton element
 * @param {number} [props.borderRadius=4] - Border radius for skeleton elements
 * @param {string} [props.baseColor='#f0f0f0'] - Base color of the skeleton
 * @param {string} [props.highlightColor='#e0e0e0'] - Highlight color for the shimmer effect
 * @param {string} [props.className=''] - Additional CSS class names
 * @param {...Object} props.props - Additional props passed to the Skeleton component
 *
 * @returns {JSX.Element} Rendered skeleton loader component
 *
 * @example
 * // Circle avatar loading
 * <SkeletonCircle type="circle" height={60} />
 *
 */
const SkeletonCircle = ({
  height = 20,
  borderRadius = 4,
  baseColor = "#f0f0f0",
  highlightColor = "#e0e0e0",
  className = "",
  ...props
}) => {
  return (
    <SkeletonTheme
      baseColor={baseColor}
      highlightColor={highlightColor}
      duration={1.2}
    >
      <div className={className}>
        <Skeleton circle height={height} width={height} {...props} />
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCircle;

/**
 * @fileoverview Reusable Loader circle component
 *
 * This component provides various skeleton loading states.
 * It wraps react-loading-skeleton with predefined layouts and customization options.
 *
 */

// Usage Examples:

/**
 * Circle avatar loading
 * @example
 * <SkeletonCircle height={60} />
 */
