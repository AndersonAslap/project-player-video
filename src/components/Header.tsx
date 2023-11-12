import { useAppSelector } from "../store";
import { useCurrentLesson } from "../store/slices/player";

export function Header() {
  
  const { currentModule, currentLesson } = useCurrentLesson();
  const isCourseLoading = useAppSelector(state => state.player.isLoading);

  return (
    <>
    {
      isCourseLoading 
      ? (
        <div className="animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
        </div>
      ) 
      : (
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
          <span className="text-sm text-zinc-400">Módulo "{currentModule?.title}"</span>
        </div>
      )
    }
    </>
  )
}