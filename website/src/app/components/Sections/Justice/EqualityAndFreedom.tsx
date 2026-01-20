import { FerrisWheel, LoaderPinwheel } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { MarkdownProvider, useIntlayer } from 'react-intlayer';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card, CardContent } from '../../ui/card';

const NUM_SPARKS = 12; // more sparks
const SPARKS: { x: string; y: string }[] = Array.from({ length: NUM_SPARKS }, () => ({
  x: `${Math.random() * 40 - 20}px`,
  y: `${Math.random() * 40 - 20}px`,
}));

const EqualityAndFreedom = ({ className = '' }: { className?: string }) => {
  const content = useIntlayer(`justice-section`);

  const grid = useRef<HTMLDivElement>(null);
  const pinHome = useRef<HTMLDivElement>(null);
  const pinFly = useRef<HTMLDivElement>(null);
  const ferrisRow = useRef<HTMLDivElement>(null);
  const ferrisIcon = useRef<SVGSVGElement>(null);
  const sparks = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let phase: 'wait' | 'go' | 'back' = 'wait';
    let t0 = performance.now();

    let sx = 0,
      sy = 0,
      ex = 0,
      ey = 0;

    const WAIT = 2000;
    const MOVE = 700;
    const HIT = 180;

    const easeIn = (p: number) => p * p * 1.5; // simple easing for acceleration

    const loop = (t: number) => {
      if (!grid.current || !pinHome.current || !pinFly.current || !ferrisIcon.current) {
        raf = requestAnimationFrame(loop);
        return;
      }

      if (phase === 'wait' && t - t0 > WAIT) {
        const pinRect = pinHome.current.getBoundingClientRect();
        const ferrisRect = ferrisIcon.current.getBoundingClientRect();
        const gridRect = grid.current.getBoundingClientRect();

        const pinCenterX = pinRect.left + pinRect.width / 2;
        const pinCenterY = pinRect.top + pinRect.height / 2;

        const ferrisCenterX = ferrisRect.left + ferrisRect.width / 2;
        const ferrisCenterY = ferrisRect.top + ferrisRect.height / 2;

        sx = 0;
        sy = 0;
        ex = ferrisCenterX - pinCenterX;
        ey = ferrisCenterY - pinCenterY;

        pinFly.current.style.left = `${pinRect.left - gridRect.left}px`;
        pinFly.current.style.top = `${pinRect.top - gridRect.top}px`;
        pinFly.current.style.display = 'block';
        pinHome.current.style.visibility = 'hidden';

        phase = 'go';
        t0 = t;
      }

      if (phase === 'go') {
        let p = Math.min((t - t0) / MOVE, 1);
        p = easeIn(p); // apply acceleration easing
        move(pinFly.current, p, sx, sy, ex, ey);

        if (p >= 1) {
          impact();
          phase = 'back';
          t0 = t + HIT;
        }
      }

      if (phase === 'back' && t > t0) {
        let p = Math.min((t - t0) / MOVE, 1);
        p = 1 - Math.pow(1 - p, 2); // ease out back
        move(pinFly.current, p, ex, ey, sx, sy);

        if (p >= 1) {
          pinFly.current.style.display = 'none';
          pinHome.current.style.visibility = 'visible';
          phase = 'wait';
          t0 = t;
        }
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const impact = () => {
    // Sparks
    sparks.current?.querySelectorAll('i').forEach((s) => {
      s.classList.remove('animate-spark');
      void s.offsetWidth;
      s.classList.add('animate-spark');
    });

    // FerrisWheel shake + squash
    ferrisRow.current?.classList.remove('animate-shake');
    void ferrisRow.current?.offsetWidth;
    ferrisRow.current?.classList.add('animate-shake');

    // Loader squash/stretch
    const loader = pinFly.current;
    loader?.classList.remove('scale-x-110', 'scale-y-90');
    void loader?.offsetWidth;
    loader?.classList.add('scale-x-110', 'scale-y-90');
    setTimeout(() => {
      loader?.classList.remove('scale-x-110', 'scale-y-90');
    }, 150);

    // FerrisWheel slight squash
    ferrisIcon.current?.classList.remove('scale-90');
    ferrisIcon.current?.getBoundingClientRect();
    ferrisIcon.current?.classList.add('scale-90');
    setTimeout(() => {
      ferrisIcon.current?.classList.remove('scale-90');
    }, 150);
  };

  return (
    <MarkdownProvider renderMarkdown={(md) => <Markdown remarkPlugins={[remarkGfm]}>{md}</Markdown>}>
      <div ref={grid} className={`grid md:grid-cols-2 gap-6 sm:gap-8 relative ${className}`}>
        {/* flying overlay */}
        <div ref={pinFly} className='absolute hidden z-[9999] pointer-events-none'>
          <LoaderPinwheel size={40} className='text-blue-600 animate-spinSlow transition-transform duration-150' />
        </div>

        {/* LEFT */}
        <Card className='bg-white/90 bg-gradient-to-b sm:bg-gradient-to-t from-green-100 to-green-50 backdrop-blur-sm shadow-xl border-0'>
          <CardContent className='px-8 pt-0 pb-2'>
            <article className='prose-custom-all'>
              <div className='text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3'>
                <div ref={pinHome}>
                  <LoaderPinwheel size={40} className='text-blue-600 mt-7 animate-spinSlow' />
                </div>
                {content.equality.title}
              </div>
              <strong>
                <em>{content.equality.subtitle}</em>
              </strong>
              {content.equality.description}
            </article>
          </CardContent>
        </Card>

        {/* RIGHT */}
        <Card className='bg-white/90 backdrop-blur-sm bg-gradient-to-t sm:bg-gradient-to-t from-green-100 to-green-50 shadow-xl border-0'>
          <CardContent className='px-8 pt-0 pb-2'>
            <article className='prose-custom-all'>
              <div ref={ferrisRow} className='text-2xl font-bold text-purple-900 mb-4 flex items-center gap-3 relative'>
                <FerrisWheel
                  ref={ferrisIcon}
                  size={40}
                  className='text-purple-600 mt-6 relative z-10 transition-transform duration-150'
                />

                {/* sparks */}
                <div ref={sparks} className='absolute left-0 top-0 pointer-events-none'>
                  {SPARKS.map((s, i) => (
                    <i
                      key={i}
                      style={{ ['--x' as any]: s.x, ['--y' as any]: s.y }}
                      className='absolute w-1.5 h-1.5 rounded-full bg-yellow-300
                      shadow-[0_0_8px_2px_rgba(255,220,120,0.95)] opacity-0'
                    />
                  ))}
                </div>

                {content.freedom.title}
              </div>
              <strong>
                <em>{content.freedom.subtitle}</em>
              </strong>
              {content.freedom.description}
            </article>
          </CardContent>
        </Card>
      </div>
    </MarkdownProvider>
  );
};

export default EqualityAndFreedom;

/* helpers */
function move(el: HTMLElement, p: number, sx: number, sy: number, ex: number, ey: number) {
  const curve = Math.sin(p * Math.PI) * -60;
  el.style.transform = `translate(${sx + (ex - sx) * p}px, ${sy + (ey - sy) * p + curve}px)`;
}
