import React, { ReactElement } from "react"
import { Layout } from "../components/layout/Layout"
import { Link } from "gatsby"

export default function IndexPage(): ReactElement {
  return (
    <div>
      <Layout title="Conference Buddy">
        <>
          <header>
            <h1 className="display-1">Hello world, this is Conference Buddy</h1>
          </header>
          <section>
            <h2>Pages</h2>
            <nav>
              <ul>
                <li>
                  <Link to="/conference-list">Conference List</Link>
                </li>
              </ul>
            </nav>
          </section>
          <button className="btn btn-secondary">test button</button>
          <section>
            <h2>Colors</h2>
            <ul>
              <li className="text-confbuddy-green">Conference Buddy GREEN</li>
              <div className="bg-confbuddy-green">test</div>
              <li className="text-confbuddy-pink">Conference Buddy PINK</li>
              <div className="bg-confbuddy-pink">test</div>
              <li className="text-primary">Primary</li>
              <div className="bg-primary">test</div>
              <li className="text-secondary">Secondary</li>
              <div className="bg-secondary">test</div>
              <li className="text-success">text-success</li>
              <div className="bg-success">test</div>
              <li className="text-info">text-info</li>
              <div className="bg-info">test</div>
              <li className="text-warning">text-warning</li>
              <div className="bg-warning">test</div>
              <li className="text-danger">text-danger</li>
              <div className="bg-danger">test</div>
              <li className="text-light">text-light</li>
              <div className="bg-light">test</div>
              <li className="text-dark">text-dark</li>
              <div className="bg-dark">test</div>
            </ul>
          </section>
        </>
      </Layout>
    </div>
  )
}
