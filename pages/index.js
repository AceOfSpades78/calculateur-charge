import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title="🏋️‍♂️ Calculateur de Charges" description={globalData.blogTitle} />
  
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          GB CALCULATEUR CHARGES</h1>
        <iframe className="iframe" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTuLzKZUTDAdITYJzitJSWRE_TuypxZMobFLfZquMliNZDnmAezF5RUaxQHPpF4A_mBlCN24RqeQTOT/pubhtml?gid=321919635&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
    
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
