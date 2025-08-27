// Импортируем SVG как React-компоненты через SVGR (`?react`)
import Logo from '../logo.svg?react';

export type IconId = 'logo';

export const iconRegistry: Record<IconId, React.FC<React.SVGProps<SVGSVGElement>>> = {
  logo: Logo,
};
