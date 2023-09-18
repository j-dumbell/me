import React from 'react'

export const About: React.FC = () => (
  <section className="mx-auto  max-w-screen-lg my-20">
    <h2 className="text-2xl font-semibold text-slate-200 my-7">About me</h2>
    <div>
      <div>
        <div>
          <p>
            Hello! My name is James. I'm a master of mathematics turned software
            engineer with over 5 years experience.
          </p>

          <p>
            I've been lucky to have worked across a variety of stacks. Here's a
            few technologies I'm proficient in:
          </p>
        </div>
        <ul className="list-disc">
          <li>Golang</li>
          <li>Typescript</li>
          <li>Scala</li>
          <li>Python</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>React</li>
          <li>Apache Spark</li>
          <li>Postgres / MySql</li>
          <li>Snowflake</li>
          <li>DynamoDB</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <img src="src/assets/images/me.png" alt="James Dumbell" />
    </div>
  </section>
)
