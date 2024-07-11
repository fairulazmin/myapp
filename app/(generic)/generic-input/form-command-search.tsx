import React from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

import { cn, fixedForwardRef } from "@/lib/utils";
import { FormField, FormItem } from "@/components/ui/form";
import { FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandDialog,
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

    const filteredItem = React.useMemo(() => {
      if (!searchInput) return [];

      const searchWords = searchInput.trim().split(/ +/);
      const re = searchWords.map((i) => new RegExp(`${i}`, "i"));

      return lists
        .map((item) => getValues(item, order))
        .filter((searchKey) => re.every((r) => searchKey.match(r) !== null))
        .slice(0, 5);
    }, [searchInput]);

    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                {...field}
                ref={ref}
                onChange={(e) => {
                  const value = e.target.value;
                  setSearchInput(value);
                  field.onChange(value);
                }}
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
                type="search"
              />
            </FormControl>
            {hasFocus && (
              <div className="relative">
                <Command>
                  <div className="absolute w-full">
                    {filteredItem.length !== 0 && (
                      <CommandList className="border rounded-md bg-background">
                        {filteredItem.map((item) => (
                          <div
                            key={item}
                            className="w-full hover:bg-secondary"
                            // onSelect={() => console.log("clicked")}
                            // onClick={() => {
                            //   console.log(`${item} selected`);
                            //   setSearchInput(item);
                            //   field.onChange(item);
                            // }}
                          >
                            <CommandItem>{item}</CommandItem>
                          </div>
                        ))}
                      </CommandList>
                    )}
                  </div>
                </Command>
              </div>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  },
);
