import Layout from "@/layouts/Layout";
import dynamic from "next/dynamic";

const PortfolioIsotope = dynamic(
  () => import("@/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Page = () => {
  return (
    <Layout>
      <div className="jara_tm_portfolio_page">
        <div className="jara_tm_portfolio">
          <div className="container">
            <PortfolioIsotope />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Page;
