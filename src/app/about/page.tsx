import Container from "@/components/Container";

interface Link {
  name: string;
  link?: string;
}

const skills: Link[] = [
  { name: "Java" },
  { name: "Scala" },
  {
    name: "Javascript",
    link: "https://github.com/ameyanaik11?utf8=%E2%9C%93&tab=repositories&q=&type=public&language=javascript",
  },
  { name: "TypeScript" },
  { name: "UNIX Shell" },
  { name: "C" },
  { name: "Python" },
  { name: "PHP" },
  {
    name: "AWS",
    link: "https://blog.ameyanaik.com/tag/aws/",
  },
];

const links: Link[] = [
  // { name: "Resume", link: "https://ameyanaik.com/resume" },
  { name: "Resume (PDF)", link: "https://go.ameyanaik.com/resume" },
  { name: "Github", link: "https://github.com/ameyanaik11" },
];

export default function About() {
  return (
    <div className="mb-16 space-y-6 leading-loose">
      <Container className="mb-8 md:mb-16">
        {/* <div className="mb-8 md:mb-16"> */}
        <h1 className="my-10 text-6xl font-bold lg:text-7xl">Ameya Naik</h1>
        <p>
          <strong>Fullstack Software Engineer</strong> with 10+ years of
          experience. I am love to build scalable and reliable systems, and love
          Robotics and AI.
        </p>

        <div className="flex flex-col gap-5">
          <p>
            {links.map(({ name, link = "#" }) => (
              <a
                className="mr-4 text-blue-600"
                href={link}
                key={name}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {name}
              </a>
            ))}
          </p>

          <p>
            Skills & stacks:{" "}
            {skills.map(({ name, link }) =>
              link ? (
                <a
                  className="mr-4 inline-block text-blue-600"
                  href={link}
                  key={name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {name}
                </a>
              ) : (
                <span className="mr-4 inline-block" key={name}>
                  {name}
                </span>
              )
            )}
          </p>
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
}
