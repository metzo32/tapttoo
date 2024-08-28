import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useScroll } from "framer-motion";

interface Props {
  children: JSX.Element;
  delay?: number;
}

export const ScrollEvent = ({ children }: Props) => {
  const [isSticky, setIsSticky] = useState(false)
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.10 1"], // "뷰포트 최하단 타겟 최상단", "뷰포트 10% 진입 타겟 최상단" -> 애니메이션 트리거 정적 값
  });

  const controls = useAnimation();  //controls 객체를 통해 애니메이션 제어

  useEffect(() => {
    scrollYProgress.onChange((latest) => {  // latest: scrollYProgress의 현재값
      if (latest > 0.1) { // 스크롤 진행도. 0 ~ 1 사이 값으로 표현
        controls.start("visible");
        setIsSticky(true)
      } else {
        controls.start("hidden");
        setIsSticky(false)
      }
    });
  }, [scrollYProgress, controls]);

  return (
    <div ref={ref}>
      <motion.div
        className={`scroll-motion ${isSticky ? 'sticky' : ''}`}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100,},
          visible: { opacity: 1, y: 0,},
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const PopUpBelow = ({ children, delay }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div
        className="title-container"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        // animate="visible"
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const PopUpRight = ({ children, delay }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div
        className="title-container"
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        // animate="visible"
        transition={{ duration: 0.3, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};