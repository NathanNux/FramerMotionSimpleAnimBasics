import { MotionStyle, MotionValue } from "framer-motion";

/**
 * Unfortunately animating CSS variables requires you to type the styles
 * as any in Framer Motion.
 * To prevent to do typecasting everywhere in the code, I created this small
 * wrapper function that does the casting for us, as well as still checks pretty
 * well that we either input a value motion value, or a string looking like a css
 * variable.
 * @see: https://www.framer.com/motion/component/#%23%23animating-css-variables
 */
type MotionStyleWithCssVar = {
  [K in keyof MotionStyle as K | `--${string}`]:
    | MotionStyle[K]
    | MotionValue<number>
    | MotionValue<string>
    | MotionValue<any>;
};

export const stylesWithCssVar = (styles: MotionStyleWithCssVar) =>
  styles as any;


//Tailwind CSS is a utility-first CSS framework that provides classes for different CSS properties, but it doesn't directly support every possible CSS property or value.

//For example, Tailwind provides utilities for setting the opacity of an element (which can be used to create a transparency effect), but it doesn't provide utilities for animating the transition between different opacity values.

//If you want to animate properties like opacity or use other CSS features that aren't directly supported by Tailwind, you would need to use custom CSS. In the case of your project, the motion.ts utility file is used to enable animating CSS variables with Framer Motion, a popular animation library for React.

//This allows you to animate properties like opacity or other CSS variables in a way that's compatible with the type checking provided by TypeScript, without getting type errors.