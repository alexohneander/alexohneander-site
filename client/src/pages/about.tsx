import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <p>Test</p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Alexohneander | About</title>
