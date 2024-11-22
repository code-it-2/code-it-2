import { Note } from "@/types/note";
import NoteList from "../../../../../public/svgs/note-list";
import { Separator } from "@/components/ui/separator";
import GoalMeatballBtn from "./goal-meatball-btn";

interface GoalNoteCardProps {
  note: Note;
}

const GoalNoteCard = ({ note }: GoalNoteCardProps) => {
  return (
    <div className="grid gap-2.5 grid-cols-1 bg-white w-1/2 p-[24px] border-[1px] border-slate-100 rounded-xl">
      <div className="flex justify-between">
        <NoteList />
        <GoalMeatballBtn noteId={note.id} />
      </div>
      <div className="text-slate-800 text-lg">{note.title}</div>
      <Separator className="border-[1px]" />
      <div className="flex text-xs text-slate-700 items-center">
        <div
          className="bg-slate-100 rounded-lg mr-2 flex justify-center items-center px-[3px] py-[2px]
        "
        >
          To do
        </div>
        <div className=" ">{note.todo.title}</div>
      </div>
    </div>
  );
};

export default GoalNoteCard;
