import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { AlternatingReveal } from "@/components/ui/alternating-reveal";

export function ResumePage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-8 max-w-5xl mx-auto w-full min-h-screen flex flex-col items-center">
      <AlternatingReveal className="w-full flex flex-col items-center">
        <div className="flex justify-between w-full max-w-4xl mb-8 items-center">
          <h1 className="text-2xl font-bold">Resume</h1>
          <Button asChild variant="premium">
            <a href="/resume.pdf" download="Shahrul_Saifuddin_Resume.pdf">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </a>
          </Button>
        </div>

        <div className="w-full max-w-4xl aspect-[1/1.4] bg-white rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="/resume.pdf"
            className="w-full h-full"
            title="Resume PDF"
          >
            <p className="p-8 text-black">
              Your browser does not support PDFs.{" "}
              <a href="/resume.pdf">Download the PDF</a>.
            </p>
          </iframe>
        </div>
      </AlternatingReveal>
    </div>
  );
}
