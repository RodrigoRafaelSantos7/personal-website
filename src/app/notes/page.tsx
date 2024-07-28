import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.02;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="projects">
        <div className="space-y-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  notes
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  i like to learn
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  i study a lot, write notes, and share them with friends. here
                  are some of my notes from school and personal projects.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
        <div className="space-y-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col space-y-4">
              <div className="space-y-2 pt-12">
                <h2 className="text-sm font-semibold tracking-tighter sm:text-lg">
                  NOVA University Lisbon
                </h2>
                <div className="text-base font-medium underline">
                  <Link href="https://github.com/RodrigoRafaelSantos7/CGI">
                    CGI - Computer Graphics and Interfaces
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="space-y-2 pt-12">
                <h2 className="text-sm font-semibold tracking-tighter sm:text-lg">
                  Crypto
                </h2>
                <div className="text-base font-medium underline"></div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
