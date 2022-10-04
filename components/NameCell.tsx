import Image from 'next/image';
import { sanitiseImageName } from '../lib/helpers';

export default function NameCell({ name }) {
  return (
    <td className="pl-2 pr-3 py-1 flex align-center justify-center">
      <span className="relative w-full h-full block">
        <span className="absolute inset-0 -mt-1">
          <Image
            src={sanitiseImageName(name)}
            width="32px"
            height="32px"
            alt={name}
          />
        </span>
        <span className="ml-10">{name}</span>
      </span>
    </td>
  );
}
