## Scroll top styling

[hooks/use-scroll-top.tsx](https://github.com/AntonioErdeljac/notion-clone-tutorial/blob/master/hooks/use-scroll-top.tsx)

```tsx
import { useState, useEffect } from "react";

export const useScrollTop = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
```


[app/(main)/_components/navbar.tsx](https://github.com/AntonioErdeljac/notion-clone-tutorial/blob/master/app/(marketing)/_components/navbar.tsx)
```tsx
"use client"

import { useScrollTop } from "@/hooks/use-scroll-top";

export const Navbar = () => {
  const scrolled = useScrollTop();

  <div className={cn(
    "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
    scrolled && "border-b shadow-sm"
    )}>
  </div>
}
````

## Icon
[app/(main)/_components/navigation.tsx](https://github.com/AntonioErdeljac/notion-clone-tutorial/blob/master/app/(main)/_components/navigation.tsx)
```tsx
"use client";

import { Search } from "lucide-react";

const search = useSearch();

export const Navigation = () => {
  return (
    <Item
      label="Search"
      icon={Search}
      onClick={search.onOpen}
    />
  )
}
```

[app/(main)/_components/item.tsx](https://github.com/AntonioErdeljac/notion-clone-tutorial/blob/master/app/(main)/_components/item.tsx)
```tsx
"use client";

import { LucideIcon } from "lucide-react";

interface ItemProps {
  label: string;
  onClick?: () => void;
  icon: LucideIcon;
};

export const Item = ({ label, onClick, icon: Icon}: ItemProps) => {
  return (
    <>
      { label }
      <Icon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" onClick={onClick}/>
    </>
  )
}
```

[hooks/use-search.tsx](https://github.com/AntonioErdeljac/notion-clone-tutorial/blob/master/hooks/use-search.tsx)
```tsx
import { create } from "zustand";

type SearchStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
};

export const useSearch = create<SearchStore>((set, get) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  toggle: () => set({ isOpen: !get().isOpen }),
}));
```

## Spinner
[spinner.tsx](https://github.com/AntonioErdeljac/notion-clone-tutorial/blob/master/components/spinner.tsx)
```tsx
import { Loader } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  "text-muted-foreground animate-spin",
  {
    variants: {
      size: {
        default: "h-4 w-4",
        sm: "h-2 w-2",
        lg: "h-6 w-6",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      size: "default",
    },
  },
);

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

export const Spinner = ({
  size,
}: SpinnerProps) => {
  return (
    <Loader className={cn(spinnerVariants({ size }))} />
  );
};
```

[app/(main)/_components/navbar.tsx](https://github.com/AntonioErdeljac/notion-clone-tutorial/blob/master/app/(marketing)/_components/navbar.tsx)
```tsx
"use client";

import { Spinner } from "@/components/spinner";

export const Navbar = () => {
  const { isLoading, setIsLoading } = useState(false);

  return (
    {isLoading && (
      <Spinner />
     )}
  )
}
```
