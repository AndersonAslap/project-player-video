import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

interface Props {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: Props) {
  return (
    <Collapsible.Root className='group'>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} Aulas</span>
        </div>

        <ChevronDown className="m-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          <Lesson title="Aula 1" duration="11:00" />
          <Lesson title="Aula 2" duration="11:00" />
          <Lesson title="Aula 3" duration="11:00" />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}