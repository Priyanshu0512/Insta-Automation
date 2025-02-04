import { Input } from "@/components/ui/input";
import { useKeywords } from "@/hooks/use-automations";
import { useMutationDataState } from "@/hooks/use-mutation-data";
import { useQueryAutomation } from "@/hooks/use-queries";
import { X } from "lucide-react";
import React, { useEffect } from "react";

type Props = {
  id: string;
};

export const Keywords = ({ id }: Props) => {
  const { keyword, onKeyPress, onValueChange, deleteMutation } =
    useKeywords(id);

  const { data } = useQueryAutomation(id);

  const latestVariable: any = useMutationDataState(["add-keyword"]);
  useEffect(() => {}, [latestVariable]);

  return (
    <div className="bg-background-80 flex flex-col gap-y-3 rounded-xl p-3">
      <p className="text-sm text-text-secondary">
        Add words that trigger Automations.
      </p>
      <div className="flex flex-wrap justify-start gap-x-2 items-center">
        {data?.data?.keywords &&
          data?.data?.keywords.length > 0 &&
          data?.data?.keywords.map(
            (word) =>
              word.id !== latestVariable?.variables.id && (
                <div
                  key={word.id}
                  className=" bg-background-90 flex items-center gap-x-2 capitalize text-text-secondary py-1 px-4 rounded-full"
                >
                  <p>{word.word}</p>
                  <X
                    size={20}
                    onClick={() => deleteMutation({ id: word.id })}
                  />
                </div>
              )
          )}
        {latestVariable && latestVariable.status === "pending" && (
          <div className="bg-background-90 flex items-center gap-x-2 capitalize text-text-secondary py-1 px-4 rounded-full">
            {latestVariable.variables.keyword}
          </div>
        )}
        <Input
          placeholder="Add Keyword..."
          style={{
            width: Math.min(Math.max(keyword.length || 10, 2), 50) + "ch",
          }}
          value={keyword}
          className="p-0 bg-transparent ring-0 border-none outline-none"
          onKeyUp={onKeyPress}
          onChange={onValueChange}
        />
      </div>
    </div>
  );
};
