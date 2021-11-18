import React from "react"
import { Link } from "gatsby"
import Navigation from "../Navigation/Navigation"
// import Logo from "../../images/logo.svg"
import Logo from "../../images/htour.png"
import Back from "../../images/back.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Wrapper, Content, LeftHeader } from "./Header.styles"

const Header = () => {
  const { site, menu } = useMenuQuery()

  return (
    <Wrapper>
      <Content>
        <LeftHeader>
          <a href="https://zhi-wp.netlify.app/">
            <img src={Back} alt="back" />
          </a>
          <a href="https://zhi-wp.netlify.app/">
            <span>Portfolio</span>
          </a>

          <Link to="/">
            <img src={Logo} alt={site.siteMetadata.title} />
          </Link>
        </LeftHeader>
        <Navigation menu={menu.menuItems.nodes} />
      </Content>
    </Wrapper>
  )
}

export default Header
