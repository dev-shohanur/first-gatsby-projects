import React from 'react';
import Layout from '../components/Layout';

export default function Home() {

  return (
    <Layout>
      <div className='container' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
        <div>
          <h2>Home</h2>
          <p>This is My Home Page</p>

        </div>
        <img src='/banner.jpeg' alt='banner' style={{ width: '100%' }} />
      </div>
    </Layout>
  )
}