import { CMS_NAME } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mb-3">
        Ametov's Blog
      </h1>
      <h5 className="mb-8 text-3xl md:text-5xl  tracking-tighter leading-tight">
        Short and simple articles on web development.
      </h5>
    </section>
  );
}
