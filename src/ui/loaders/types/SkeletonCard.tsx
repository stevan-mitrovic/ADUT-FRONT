// components/Loader.js
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/**
 * Reusable Loader Card component using react-loading-skeleton
 *
 * @param {Object} props - Component props
 * @param {number} [props.borderRadius=4] - Border radius for skeleton elements
 * @param {string} [props.baseColor='#f0f0f0'] - Base color of the skeleton
 * @param {string} [props.highlightColor='#e0e0e0'] - Highlight color for the shimmer effect
 * @param {string} [props.className=''] - Additional CSS class names
 *
 * @returns {JSX.Element} Rendered skeleton loader component
 *
 * @example
 * // Card with custom colors
 * <SkeletonCard
 *   baseColor="#1f2937"
 *   highlightColor="#374151"
 * />
 *
 */
const SkeletonCard = ({
  borderRadius = 4,
  baseColor = "#f0f0f0",
  highlightColor = "#e0e0e0",
  className = "",
}) => {
  return (
    <SkeletonTheme
      baseColor={baseColor}
      highlightColor={highlightColor}
      duration={1.2}
    >
      <div className={className}>
        <div className={`card-skeleton ${className}`}>
          <Skeleton height={140} borderRadius={borderRadius} />
          <div style={{ padding: "8px 0" }}>
            <Skeleton height={18} width="70%" style={{ marginBottom: "8px" }} />
            <Skeleton count={2} height={16} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCard;

/**
 * @fileoverview Reusable Loader Card component
 *
 * This component provides various skeleton loading states.
 * It wraps react-loading-skeleton with predefined layouts and customization options.
 *
 */

// Usage Examples:

/**
 * Card loading
 * @example
 * <SkeletonCard />
 */
