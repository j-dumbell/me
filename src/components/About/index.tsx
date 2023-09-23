import React from 'react'

const skills: string[] = [
  'Golang',
  'Typescript',
  'Scala',
  'Python',
  'Docker',
  'Kubernetes',
  'React',
  'Apache',
  'Postgres',
  'Snowflake',
  'DynamoDB',
  'MongoDB'
]

export const About: React.FC = () => (
  <section className="mx-auto my-20 max-w-screen-lg">
    <h2 className="my-7 text-2xl font-semibold text-slate-200">About me</h2>
    <div className="flex">
      <div className="mr-10">
        <div>
          <p className="mb-3">
            Hello! My name is James. I'm a master of mathematics turned software
            engineer with over 5 years experience.
          </p>

          <p className="mb-3">
            I've been lucky to have worked across a variety of stacks. Here's a
            few technologies I'm proficient in:
          </p>
        </div>
        <ul>
          {skills.map((skill) => (
            <li
              key={skill}
              className="before:mr-4 before:text-cyan-500 before:content-['▹']"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <img
        className="max-w-sm"
        src="src/assets/images/me.png"
        alt="James Dumbell"
      />
    </div>
  </section>
)
