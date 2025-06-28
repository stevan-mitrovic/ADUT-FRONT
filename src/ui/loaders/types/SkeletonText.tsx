import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/**
 * Reusable Loader component using react-loading-skeleton for different loading states
 *
 * @param {Object} props - Component props
 * @param {number} [props.count=1] - Number of skeleton elements to render
 * @param {number|string} [props.height=20] - Height of the skeleton element
 * @param {number|string} [props.width='100%'] - Width of the skeleton element
 * @param {number} [props.borderRadius=4] - Border radius for skeleton elements
 * @param {string} [props.baseColor='#f0f0f0'] - Base color of the skeleton
 * @param {string} [props.highlightColor='#e0e0e0'] - Highlight color for the shimmer effect
 * @param {string} [props.className=''] - Additional CSS class names
 * @param {...Object} props.props - Additional props passed to the Skeleton component
 *
 * @returns {JSX.Element} Rendered skeleton loader component
 *
 * @example
 * // Basic text loading
 * <SkeletonText count={3} />
 *
 */
const SkeletonText = ({
  count = 1,
  height = 20,
  width = "100%",
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
        <Skeleton
          count={count}
          height={height}
          width={width}
          borderRadius={borderRadius}
          {...props}
        />
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonText;

/**
 * @fileoverview Reusable Loader Text component
 *
 * This component provides skeleton loading states.
 * It wraps react-loading-skeleton with predefined layouts and customization options.
 */

// Usage Examples:

/**
 * Basic text loading
 * @example
 * <SkeletonText count={3} />
 */
