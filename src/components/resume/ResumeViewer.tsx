"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Home, Maximize2, Sparkles } from "lucide-react";

type ResumeViewerProps = {
  previewUrl: string;
};

export default function ResumeViewer({ previewUrl }: ResumeViewerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    setIsFullScreen(searchParams.get("view") === "full");
  }, [searchParams]);

  const handleOpenChange = (nextOpen: boolean) => {
    setIsFullScreen(nextOpen);

    if (nextOpen) {
      router.replace(`${pathname}?view=full`, { scroll: false });
      return;
    }

    router.replace(pathname, { scroll: false });
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <section className="overflow-hidden rounded-3xl border border-border/60 bg-background/85 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.2)] backdrop-blur">
        <div className="flex items-center gap-3 border-b border-border/60 px-5 py-4 sm:px-6">
          <Badge
            variant="secondary"
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
          >
            Resume Preview
          </Badge>
          <p className="hidden text-sm text-muted-foreground sm:block">
            Clean embedded view, optimized for focus and readability.
          </p>

          <Dialog open={isFullScreen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="ml-auto rounded-full border-border/60 bg-background/80"
              >
                <Maximize2 className="mr-2 h-4 w-4" />
                Maximize
              </Button>
            </DialogTrigger>

            <DialogContent className="left-0 top-0 z-[60] h-screen w-screen max-w-none translate-x-0 translate-y-0 rounded-none border-0 bg-background p-0 shadow-none data-[state=open]:slide-in-from-top-0 data-[state=closed]:slide-out-to-top-0 sm:rounded-none">
              <DialogHeader className="flex-row items-center justify-between border-b border-border/60 px-5 py-4 sm:px-6">
                <DialogTitle className="flex items-center gap-2 text-base font-semibold">
                   <Link
                  href="/"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Go to home page"
                >
                  <Home className="h-4 w-4" />
                </Link>
                  <FileText className="h-4 w-4 text-primary" />
                  Resume Preview
                </DialogTitle>

               
              </DialogHeader>

              <div className="h-[calc(100vh-4rem)] bg-muted/20 p-3 sm:p-4">
                <div className="h-full overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm">
                  <iframe
                    src={previewUrl}
                    title="Resume preview"
                    className="h-full w-full bg-background"
                    loading="lazy"
                    allow="autoplay"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-muted/20 p-3 sm:p-4">
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm">
            <div className="flex items-center gap-2 border-b border-border/60 bg-muted/30 px-4 py-3">
              <FileText className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Resume</span>
              <span className="ml-auto text-xs text-muted-foreground">
                Scroll to read
              </span>
            </div>

            <iframe
              src={previewUrl}
              title="Resume preview"
              className="h-[82vh] w-full bg-background md:h-[88vh]"
              loading="lazy"
              allow="autoplay"
            />
          </div>
        </div>
      </section>
    </div>
  );
}