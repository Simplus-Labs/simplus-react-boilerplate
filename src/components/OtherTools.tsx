import { Button } from '@/components/ui/button';
import { CaretRight } from '@phosphor-icons/react';
import simplusLogo from '../../public/Simplus.svg';

export default function OtherTools(): JSX.Element {
  return (
    <div className="w-full lg:w-64 py-2 lg:p-3 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="font-bold">Other tools</div>
        <Button variant="outline" className="border-primary font-medium">
          See more <CaretRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <ul className="flex flex-col gap-4">
        <li>
          <a
            href="https://github.com/Simplus-Labs"
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 items-center underline transition-colors hover:text-primary text-foreground"
          >
            <img src={simplusLogo} alt="Simplus logo" className="h-6" /> Simplus Labs
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Simplus-Labs"
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 items-center underline transition-colors hover:text-primary text-foreground"
          >
            <img src={simplusLogo} alt="Simplus logo" className="h-6" /> Simplus Labs
          </a>
        </li>
      </ul>
    </div>
  );
}
