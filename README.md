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


[navbar.tsx](https://github.com/AntonioErdeljac/notion-clone-tutorial/blob/master/app/(marketing)/_components/navbar.tsx)
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

[navbar.tsx](https://github.com/AntonioErdeljac/notion-clone-tutorial/blob/master/app/(marketing)/_components/navbar.tsx)
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
