// Импортируем SVG как React-компоненты через SVGR (`?react`)
import Home from './assets/home.svg?react';
import Plus from './assets/plus.svg?react';
import Minus from './assets/minus.svg?react';

export type IconId = 'home' | 'plus' | 'minus';

export const iconRegistry: Record<IconId, React.FC<React.SVGProps<SVGSVGElement>>> = {
  home: Home,
  plus: Plus,
  minus: Minus,
};
