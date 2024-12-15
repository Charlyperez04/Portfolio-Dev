import { keyframes } from "@emotion/react";
import { ReactNode } from "react";
import { Reveal, RevealProps } from "react-awesome-reveal";

type Direction = "up" | "down" | "left" | "right";

const createAnimation = (direction: Direction) => {
  switch (direction) {
    case "up":
      return keyframes`
        from {
          opacity: 0;
          transform: translate3d(0, 100px, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      `;
    case "down":
      return keyframes`
        from {
          opacity: 0;
          transform: translate3d(0, -100px, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      `;
    case "left":
      return keyframes`
        from {
          opacity: 0;
          transform: translate3d(100px, 0, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      `;
    case "right":
      return keyframes`
        from {
          opacity: 0;
          transform: translate3d(-100px, 0, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      `;
    default:
      return keyframes`
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      `;
  }
};

interface CustomAnimationProps extends RevealProps {
  children: ReactNode;
  direction?: Direction;
}

function Animation({
  children,
  direction = "right",
  ...animationProps
}: CustomAnimationProps) {
  const animation = createAnimation(direction);

  return (
    <Reveal keyframes={animation} {...animationProps}>
      {children}
    </Reveal>
  );
}

export default Animation;
