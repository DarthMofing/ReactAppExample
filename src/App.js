 import React from 'react'
 import Layout from './pages/layout/Layout'
 import Main from './pages/main/Main'

function App() {
  return (
      <React.Fragment>
        <Layout>
          <Main tittle={'Welcome Fella'}></Main>
        </Layout>

      </React.Fragment>
  );
}

export default App;
