import type { SVGProps } from 'react';
import { iconRegistry, type IconId } from './registry';

export type IconProps = {
  id: IconId;
  size?: number | string; // px если число
  title?: string;
} & Omit<SVGProps<SVGSVGElement>, 'id'>;

export function Icon({ id, size = 24, title, ...svgProps }: IconProps) {
  const Component = iconRegistry[id];
  const width = typeof size === 'number' ? size : size;
  const height = width;
  return (
    <Component
      width={width}
      height={height}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : 'presentation'}
      {...svgProps}
    >
      {title ? <title>{title}</title> : null}
    </Component>
  );
}
