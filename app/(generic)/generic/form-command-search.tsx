import React from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { ChevronsUpDown, CheckIcon } from "lucide-react";
import { cn, fixedForwardRef } from "@/lib/utils";
import { FormField, FormItem } from "@/components/ui/form";
import { FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandDialog,
  CommandGroup,
} from "@/components/ui/command";
import { X } from "lucide-react";

type FormCommandSearchProps<
  T extends FieldValues,
  P extends FieldPath<T>,
  K extends Record<string, any>,
> = {
  control: Control<T>;
  name: P;
  label: string;
  lists: K[];
  order: Array<keyof K>;
} & React.ComponentPropsWithoutRef<"input">;

const getValues = <T extends Record<string, any>>(
  obj: T,
  order: Array<keyof T>,
) => {
  let name = [];
  for (const x of order) {
    name.push(obj[x]);
  }
  return name.join(", ");
};

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;

export const FormCommandSearch = fixedForwardRef(
  <
    T extends FieldValues,
    P extends FieldPath<T>,
    K extends Record<string, any>,
  >(
    {
      control,
      name,
      label,
      lists,
      order,
      ...props
    }: FormCommandSearchProps<T, P, K>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const [searchInput, setSearchInput] = React.useState("");
    const [hasFocus, setHasFocus] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e) {
          e.preventDefault();
          setOpen((open) => !open);
        }
      };
      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }, []);

    const filteredItem = React.useMemo(() => {
      if (!searchInput) return [];

      const searchWords = searchInput.trim().split(/ +/);
      const re = searchWords.map((i) => new RegExp(`${i}`, "i"));

      return lists
        .map((item) => getValues(item, order))
        .filter((searchKey) => re.every((r) => searchKey.match(r) !== null))
        .slice(0, 5);
    }, [searchInput]);

    // console.log("filteredItem: ", filteredItem);

    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormMessage />
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-[200px] justify-between",
                      !field.value && "text-muted-foreground",
                    )}
                  >
                    {field.value
                      ? languages.find(
                          (language) => language.value === field.value,
                        )?.label
                      : "Select language"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search language..." />
                  <CommandEmpty>No language found.</CommandEmpty>
                  <CommandList>
                    <CommandGroup>
                      {languages.map((language) => (
                        <CommandItem
                          value={language.label}
                          key={language.value}
                          onSelect={(e) => {
                            // form.setValue("language", language.value);
                            console.log(e);
                          }}
                        >
                          <CheckIcon
                            className={cn(
                              "mr-2 h-4 w-4",
                              language.value === field.value
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                          {language.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </FormItem>
        )}
      />
    );
  },
);

//     return (
//       <FormField
//         control={control}
//         name={name}
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>{label}</FormLabel>
//             <FormControl>
//               <Input
//                 {...field}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   setSearchInput(value);
//                 }}
//                 ref={ref}
//                 onFocus={() => setHasFocus(true)}
//                 onBlur={() => setHasFocus(false)}
//                 type="search"
//               />
//             </FormControl>
//             {hasFocus && (
//               <div className="relative">
//                 <Command>
//                   <div className="absolute w-full">
//                     {filteredItem.length !== 0 && (
//                       <CommandList className="border rounded-md bg-background">
//                         {filteredItem.map((item) => (
//                           <div
//                             key={item}
//                             className="w-full hover:bg-secondary"
//                             onSelect={(e) => console.log(e)}
//                             // onClick={() => {
//                             //   console.log(`${item} selected`);
//                             //   setSearchInput(item);
//                             //   field.onChange(item);
//                             // }}
//                           >
//                             <CommandItem>{item}</CommandItem>
//                           </div>
//                         ))}
//                       </CommandList>
//                     )}
//                   </div>
//                 </Command>
//               </div>
//             )}
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//     );
//   },
// );
