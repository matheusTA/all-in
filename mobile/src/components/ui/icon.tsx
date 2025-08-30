import { SvgProps } from 'react-native-svg';
import { useUnistyles } from 'react-native-unistyles';
import EyeIcon from '../../../assets/icons/eye.svg';
import EyeCloseIcon from '../../../assets/icons/eye-close.svg';
import DollarIcon from '../../../assets/icons/dollar.svg';
import AtSignIcon from '../../../assets/icons/at-sign.svg';
import LockIcon from '../../../assets/icons/lock.svg';
import BellIcon from '../../../assets/icons/bell.svg';
import PlusIcon from '../../../assets/icons/plus.svg';
import ArrowUpDownIcon from '../../../assets/icons/arrow-up-down.svg';
import ChevronsRightIcon from '../../../assets/icons/chevrons-right.svg';
import MinusIcon from '../../../assets/icons/minus.svg';
import ClubIcon from '../../../assets/icons/club.svg';
import SpadeIcon from '../../../assets/icons/spade.svg';
import { ThemeColors } from '../../config/theme';

const icons = {
  eye: EyeIcon,
  eyeClose: EyeCloseIcon,
  dollar: DollarIcon,
  atSign: AtSignIcon,
  lock: LockIcon,
  bell: BellIcon,
  plus: PlusIcon,
  arrowUpDown: ArrowUpDownIcon,
  chevronsRight: ChevronsRightIcon,
  minus: MinusIcon,
  club: ClubIcon,
  spade: SpadeIcon,
};

export type IconName = keyof typeof icons;

interface IconProps extends SvgProps {
  name: IconName;
  size?: number;
  color?: ThemeColors;
}

export function Icon({ name, size = 16, color, ...props }: IconProps) {
  const { theme } = useUnistyles();
  const iconColor = color ? theme.colors[color] : '#000';
  const Component = icons[name];

  if (!Component) {
    throw new Error(`Icon ${name} not found`);
  }

  return <Component height={size} width={size} color={iconColor} {...props} />;
}
