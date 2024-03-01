import { stylesWithCssVar } from "@/utils/motion";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

export const StreamlinedExperience = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end end']
    });

    const textX = useTransform(scrollYProgress, [0.1, 0.7], ['100%', '-100%']);

    const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

    const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

    const opacityBorder = useTransform(scrollYProgress, [0.7, 0.71, 0.72], [1, 1, 0])

    const finalTextOpacity = useTransform(scrollYProgress, [0.7, 0.71, 0.72, 0.8, 0.9], [0, 0, 1, 1, 0]);

    const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

    //In Framer Motion's useTransform function, the first array you pass in is the input range, and the second array is the output range.

    //The input range is a set of values that the source (in this case, scrollYProgress) is expected to take. scrollYProgress is a value between 0 and 1 that represents the current scroll position as a fraction of the total scrollable area. So, if you pass in [0.1, 0.7] as the input range, you're saying that you're interested in the scroll positions from 10% to 70% of the total scrollable area.

    //The output range is a set of values that the transformed value should take, corresponding to each value in the input range. For example, if you pass in ['100%', '-100%'] as the output range, you're saying that when the scroll position is at 10% of the total scrollable area, the transformed value should be '100%', and when the scroll position is at 70% of the total scrollable area, the transformed value should be '-100%'.

    //Framer Motion will interpolate the transformed value for scroll positions between the values in the input range. So, if the scroll position is at 40% of the total scrollable area, the transformed value will be '0%', because that's halfway between '100%' and '-100%'.

    //In your code, you're using useTransform to create animations that change based on the scroll position. For example, textX is a value that represents the x position of some text, and it changes from '100%' to '-100%' as the scroll position goes from 10% to 70% of the total scrollable area.


    return (
        <motion.section
            style={stylesWithCssVar({
                opacity: opacitySection,
                '--scale': scale,
                '--opacity-border': opacityBorder,
            })}
            ref={targetRef}
            className="mt-[50vh] flex h-[500vh] items-start justify-start"
        >
            <div className="sticky top-1/2 left-1/2 min-h-[50rem] min-w-[50rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-[#CEF144] before:opacity-[var(--opacity-border)]">
                <motion.p
                    aria-hidden
                    style={{ x: textX, y: "-50%" }}
                    className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[23rem] text-heading"
                >
                    Streamlined Experience.
                </motion.p>
                <motion.p
                    aria-hidden
                    style={{ x: textX, y: "-50%" }}
                    className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] z-[11] text-[23rem] text-transparent [-webkit-text-stroke:1px_var(--color-heading)]"
                >
                    Streamlined Experience.
                </motion.p>

                <motion.p
                    style={{
                        opacity: finalTextOpacity,
                        scale: finalTextScale,
                        y: "-50%",
                        x: "-50%",
                    }}
                    className="absolute left-1/2 top-1/2 text-[8.8rem] leading-tight text-white"
                 >
                    Streamlined
                    <br />
                    Experience.
                </motion.p>
                <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] bg-background opacity-[var(--opacity-border)]" />
                <span className="absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem] border-[#CEF144] opacity-[var(--opacity-border)]" />
            </div>
        </motion.section>
    )
}