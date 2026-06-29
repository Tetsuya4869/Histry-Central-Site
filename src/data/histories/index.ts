import type { CountryHistory } from './types';
import { japan } from './japan';
import { china } from './china';
import { rome } from './rome';
import { egypt } from './egypt';
import { greece } from './greece';
import { india } from './india';
import { ottoman } from './ottoman';
import { france } from './france';
import { uk } from './uk';
import { usa } from './usa';
import { mesopotamia } from './mesopotamia';
import { persia } from './persia';
import { mongol } from './mongol';
import { korea } from './korea';
import { aztec } from './aztec';
import { inca } from './inca';
import { mali } from './mali';

export const histories: Record<string, CountryHistory> = {
  japan,
  china,
  rome,
  egypt,
  greece,
  india,
  ottoman,
  france,
  uk,
  usa,
  mesopotamia,
  persia,
  mongol,
  korea,
  aztec,
  inca,
  mali,
};

export function getHistory(id: string): CountryHistory | undefined {
  return histories[id];
}

export type { CountryHistory } from './types';
