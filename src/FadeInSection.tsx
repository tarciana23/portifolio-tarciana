import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const FadeInWrapper = styled.div<{ isVisible: boolean }>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "30px")});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

interface Props {
  children: React.ReactNode;
}

export const FadeInSection = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // só anima 1x
          }
        });
      },
      { threshold: 0.1 }
    );

    if (domRef.current) observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <FadeInWrapper ref={domRef} isVisible={isVisible}>
      {children}
    </FadeInWrapper>
  );
};
