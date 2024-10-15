import Image from "next/image";
import GithubImage from "../../public/icons/github-mark.svg";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/flatnote"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src={GithubImage}
          alt="Github icon"
          width={16}
          height={16}
        />
        Github
      </a>
    </footer>
  );
}
