// ルートレイアウトへimportされるcomponent
import React from 'react'
import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout( props ){
  return(
    <React.Fragment>
      <Header></Header>
        <main>{ props.children }</main>
      <Footer></Footer>
    </React.Fragment>
  )
}
