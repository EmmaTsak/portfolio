import {
  useEffect,
  useRef,
  useState,
} from 'react';

type TerminalLine = {
  text: string;
  type: 'command' | 'output';
};

const lines: TerminalLine[] = [
  {
    text: '> whoami',
    type: 'command',
  },
  {
    text: 'Emmanouela Tsakalidou',
    type: 'output',
  },
  {
    text: '> role',
    type: 'command',
  },
  {
    text: 'Software Developer',
    type: 'output',
  },
  {
    text: '> focus',
    type: 'command',
  },
  {
    text:
      'Reliable software · Testing · UI/UX',
    type: 'output',
  },
];

export function AboutTerminal() {
  const terminalRef =
    useRef<HTMLDivElement>(null);

  const [started, setStarted] =
    useState(false);

  const [visibleLines, setVisibleLines] =
    useState<string[]>([]);

  const [lineIndex, setLineIndex] =
    useState(0);

  const [characterIndex, setCharacterIndex] =
    useState(0);

  useEffect(() => {
    const terminal = terminalRef.current;

    if (!terminal) return;

    const prefersReducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

    if (prefersReducedMotion) {
      setVisibleLines(
        lines.map((line) => line.text)
      );

      setLineIndex(lines.length);
      setStarted(true);

      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.35,
        }
      );

    observer.observe(terminal);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    if (lineIndex >= lines.length) {
      return;
    }

    const currentLine =
      lines[lineIndex].text;

    if (
      characterIndex <
      currentLine.length
    ) {
      const timeout =
        window.setTimeout(() => {
          setVisibleLines(
            (previous) => {
              const next = [...previous];

              next[lineIndex] =
                currentLine.slice(
                  0,
                  characterIndex + 1
                );

              return next;
            }
          );

          setCharacterIndex(
            (value) => value + 1
          );
        }, 32);

      return () =>
        window.clearTimeout(timeout);
    }

    const delay =
      lines[lineIndex].type ===
      'command'
        ? 180
        : 320;

    const timeout =
      window.setTimeout(() => {
        setLineIndex(
          (value) => value + 1
        );

        setCharacterIndex(0);
      }, delay);

    return () =>
      window.clearTimeout(timeout);
  }, [
    started,
    lineIndex,
    characterIndex,
  ]);

  return (
    <div
      ref={terminalRef}
      className="about-terminal"
    >
      <div
        className="about-terminal__top"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>

      <div className="about-terminal__body">
        {lines.map(
          (line, index) => {
            const text =
              visibleLines[index];

            if (
              text === undefined &&
              index > lineIndex
            ) {
              return null;
            }

            return (
              <div
                key={`${line.text}-${index}`}
                className={
                  line.type ===
                  'command'
                    ? 'about-terminal__command'
                    : 'about-terminal__output'
                }
              >
                {text ?? ''}

                {index === lineIndex &&
                  started &&
                  lineIndex <
                    lines.length && (
                    <span
                      className="about-terminal__cursor"
                      aria-hidden="true"
                    >
                      _
                    </span>
                  )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}