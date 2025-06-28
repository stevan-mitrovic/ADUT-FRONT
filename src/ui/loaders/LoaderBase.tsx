import SkeletonText from "./types/SkeletonText";
import SkeletonCircle from "./types/SkeletonCircle";
import SkeletonCard from "./types/SkeletonCard";


/**
 * @typedef {Object} SkeletonLoaderProps
 * @property {number} [count] - Number of skeleton elements to render
 * @property {number|string} [height] - Height of the skeleton element
 * @property {number|string} [width] - Width of the skeleton element
 * @property {number} [borderRadius] - Border radius for skeleton elements
 * @property {string} [baseColor] - Base color of the skeleton
 * @property {string} [highlightColor] - Highlight color for the shimmer effect
 * @property {string} [className] - Additional CSS class names
 */

type LoaderProps = {
  count?: number;
  height?: number;
  width?: string;
  borderRadius?: number;
  baseColor?: string;
  highlightColor?: string;
  className?: string;
};

/**
 * Loader Component
 * A wrapper for the SkeletonLoader component with predefined variants for common use cases.
 *
 * @param {SkeletonLoaderProps} props - The properties object for the Loader component.
 * @returns {JSX.Element} - The rendered Loader component.
 */
const Loader = (props: LoaderProps) => <SkeletonText {...props} />;

/**
 * Text skeleton variant for loading text content.
 *
 * @param {SkeletonLoaderProps} props - The properties object for the Loader component.
 * @returns {JSX.Element} - The rendered Text skeleton.
 *
 * @example
 * <Loader.Text count={3} height={24} />
 */
Loader.Text = (props: LoaderProps) => <SkeletonText {...props} />;

/**
 * Circle skeleton variant for loading circular avatars or profile pictures.
 *
 * @param {SkeletonLoaderProps} props - The properties object for the Loader component.
 * @returns {JSX.Element} - The rendered Circle skeleton.
 *
 * @example
 * <Loader.Circle height={60} />
 */
Loader.Circle = (props: LoaderProps) => (
  <SkeletonCircle {...props}/>
);

/**
 * Card skeleton variant for loading card layouts with image and text content.
 *
 * @param {SkeletonLoaderProps} props - The properties object for the Loader component.
 * @returns {JSX.Element} - The rendered Card skeleton.
 *
 * @example
 * <Loader.Card />
 */
Loader.Card = (props: LoaderProps) => <SkeletonCard {...props}/>;




// Display names for better debugging and React DevTools
Loader.displayName = "Loader";
// @ts-ignore
Loader.Text.displayName = "Loader.Text";
// @ts-ignore
Loader.Circle.displayName = "Loader.Circle";
// @ts-ignore
Loader.Card.displayName = "Loader.Card";

export default Loader;

/**
 * @fileoverview Compound Loader component with dot notation access
 *
 * This file provides a compound component pattern for the Loader, allowing
 * developers to use dot notation like Loader.Text, Loader.Circle, etc.
 * Each sub-component is a wrapper around the Loader component
 * with predefined type props.
 *
 * Available Components:
 * - Loader.Text: Text lines skeleton
 * - Loader.Circle: Circular avatar skeleton
 * - Loader.Card: Card layout skeleton
 *
 * All components accept the same props as Loader, with the type
 * automatically set based on the component used.
 *
 * @requires ./Loader
 * @author Your Name
 * @version 1.0.0
 */
