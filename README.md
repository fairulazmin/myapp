## Docker
### Docker file
1. Create docker ignore file, name it **.dockerignore**
2. Inside *.dockerignore* write:
   ```docker
   node_modules/
   ```
3. Create docker file, name it **Dockerfile**
4. Inside *Dockerfile* write
   ```docker
   FROM node:18.19.0-alpine3.17
   RUN addgroup app && adduser -S -G app app
   RUN mkdir /app && chown app:app /app
   USER app
   WORKDIR /app
   RUN mkdir data
   COPY package*.json .
   RUN npm install
   COPY . .
   EXPOSE 3000
   CMD [“npm”, “start”]
   ```
5. Create docker file, name it **Dockerfile.prod**
6. Inside *Dockerfile.prod* write
   ```docker
   # Step 1: Build stage
   FROM node:18.19.0-alpine3.17 AS build-stage

   WORKDIR /app
   RUN mkdir data
   COPY package*.json ./
   RUN npm install
   COPY . .
   ENV REACT_APP_API_URL:http://localhost:3000
   RUN npm run build

   # STEP 2: Production
   FROM nginx:1.12-alphine
   COPY --from=build-stage /app/build /usr/share/nginx/html
   EXPOSE 80
   ENTRYPOINT ["nginx", "-g", "daemon-off;"]
   ```
7. Create docker compose file, name it **docker-compose.yml**
8. Inside *docker-compose.yml* write
   ``` yml
   version: “3.8”
   services:
     web:
       build: ./frontend
       ports:
         - 3000:3000
     api:
       build: ./backend
       ports:
         - 3001:3001
       environment:
         - DB_URL: mongodb://
       volumes:
         - ./backend:/app
     db: 
       image: mongo:4.0-xenial
       ports:
         - 27017:27017
       volumes:
         - vidly: /data/db
     volumes:
       vidly:
   ```
9. Create docker compose file, name it **docker-compose.prod.yml**
10. Inside *docker-compose.prod.yml* write
   ``` yml
   version: “3.8”
   services:
     web:
       build:
         context: ./frontend
         dockerfile: Dockerfile.prod
       image: vidly_web:1
       ports:
         - 80:80
       restart: unless-stopped
     api:
       build: ./backend
       image: vidly_api:1
       ports:
         - 3001:3001
       environment:
         - DB_URL: mongodb://
       restart: unless-stopped
     db: 
       image: mongo:4.0-xenial
       ports:
         - 27017:27017
       volumes:
         - vidly: /data/db
       restart: unless-stopped
     volumes:
       vidly:
   ```

#### Docker Commands
| Commands|  |
| ------------ | ------------- |
| docker build -t <image_name> | Build an Image from a Dockerfile |
| docker rmi <image_name> | Delete an Image |
| docker images | List local images |
| docker image prune | Remove all unused images |
| docker run --name <container_name> <image_name> | Create and run a container from an image, with a custom name |
| docker run -p <host_port>:<container_port> <image_name> | Run a container with and publish a container’s port(s) to the host |
| docker run -d <image_name> | Run a container in the background |
| docker start *or* stop <container name *or* id> | Start or stop an existing container |
| docker rm <container_name> | Remove a stopped container |
| docker exec -it <container_name> sh | Open a shell inside a running container |
| docker logs -f <container_name> | Fetch and follow the logs of a container |
| docker ps | List currently running containers |
| docker ps --all | List all docker containers (running and stopped) |
| docker compose up | Create and start containers |
| docker compose down | Stop and remove containers, networks |

#### Docker Image Command
| Commands|  |
| ------------ | ------------- |
| build | Build an image from a Dockerfile |
| history | Show the history of an image|
| import | Import the contents from a tarball to create a filesystem image |
| inspect | Display detailed information on one or more images |
| load | Load an image from a tar archive or STDIN |
| ls | List images |
| prune | Remove unused images |
| pull | Download an image from a registry |
| push	| Upload an image to a registry |
| rm	|Remove one or more images |
| save	| Save one or more images to a tar archive (streamed to STDOUT by default) |
| tag | Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE |

#### Docker Container Command
| Commands|  |
| ------------ | ------------- |
| attach | Attach local standard input, output, and error streams to a running container |
| commit | Create a new image from a container's changes |
| cp | Copy files/folders between a container and the local filesystem |
| create | Create a new container |
| diff | Inspect changes to files or directories on a container's filesystem |
| exec | Execute a command in a running container |
| export | Export a container's filesystem as a tar archive |
| inspect | Display detailed information on one or more containers |
| kill | Kill one or more running containers |
| logs | Fetch the logs of a container |
| ls | List containers |
| pause | Pause all processes within one or more containers |
| port | List port mappings or a specific mapping for the container |
| prune | Remove all stopped containers |
| rename | Rename a container |
| restart | Restart one or more containers |
| rm | Remove one or more containers |
| run | Create and run a new container from an image |
| start | Start one or more stopped containers|
| stats | Display a live stream of container(s) resource usage statistics |
| stop | Stop one or more running containers |
| top | Display the running processes of a container |
| unpause | Unpause all processes within one or more containers |
| update | Update configuration of one or more containers |
| wait | Block until one or more containers stop, then print their exit codes |

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

## Font
[app/(marketing)/page.tsx](https://github.com/AntonioErdeljac/next13-trello/blob/master/app/(marketing)/page.tsx)

#### Local Font
```tsx
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

const MarketingPage = () => {
  return (
      <div className={cn(
        "flex items-center justify-center flex-col",
        headingFont.className,
      )}>
        No 1 task managment
      </div>
  )
}
```

#### Google Font
```tsx
import { Poppins } from "next/font/google";

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

const MarketingPage = () => {
  return (
    <div className={cn(
      "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
      textFont.className,
    )}>
      Collaborate, manage projects, and reach new productivity peaks.
    </div>
  )
}
```

## Metadata
[config/site.ts](https://github.com/AntonioErdeljac/next13-trello/blob/master/config/site.ts)
```tsx
export const siteConfig = {
  name: "Taskify",
  description: "Collaborate, manage projects, and reach new productivity peaks",
};
```

[app/layout.tsx](https://github.com/AntonioErdeljac/next13-trello/blob/master/app/layout.tsx)
```tsx
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg"
    }
  ]
}
```

## Display JSON
```tsx
<pre>{JSON.stringify(data, null, 2)}</pre>
```
