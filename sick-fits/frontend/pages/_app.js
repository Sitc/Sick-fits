import App, { Container } from 'next/app'

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Component />
      </Container>
    )
  }
}

export default MyApp;