import { Button } from '@/components/ui/button';
import { CaretRight } from '@phosphor-icons/react';
import toolsData from '../../toolsData.json';

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
        {toolsData.map((tool) => (
          <li key={tool.name}>
            <a
              href={tool.url}
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 items-center underline transition-colors hover:text-primary text-foreground"
            >
              <img src={tool.logo} alt={`${tool.name} logo`} className="h-6" /> {tool.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
