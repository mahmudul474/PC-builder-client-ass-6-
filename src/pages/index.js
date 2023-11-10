 
import Layout from '@/components/common/Leyaot/Layout'
import { Inter } from 'next/font/google'
 

export default function Home() {
  return (
 <>
 
 <Layout>
      {/* Featured Products Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Featured Product Cards go here */}
      </section>

      {/* Featured Categories Section */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {/* Featured Category Cards go here */}
      </section>
    </Layout> </>
    
  )
}



