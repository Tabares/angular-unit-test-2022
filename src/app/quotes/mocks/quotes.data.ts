import { Quote } from '../models/quote';

export const QUOTES: Quote[] = [
  'With great power comes great responsibility.',
  'Heroes are made by the path they choose, not the powers they are graced with.',
  'A true Defender never raises arms against an innocent, no matter how they threaten you.”',
  'The greatest power on Earth is the magnificent power we all of us possess… the power of the human brain!',
  'I’m the best at what I do, what I do just isn’t very nice.”',
  'Hulk smash!',
  'Love is for souls, not bodies.',
  'Just because someone stumbles and loses their path, doesn’t mean they can’t be saved.',
  'All we can do is our best, and sometimes the best we can do is start over.',
  'A victory has more meaning when it is won by the force of your own arms, the ingenuity of your own brain!',
  'No man can win every battle, but no man should fall without a struggle.',
].map((q, i) => ({ id: i + 1, quote: q }));
