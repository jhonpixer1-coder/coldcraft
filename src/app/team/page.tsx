import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import TeamCards from "@/components/team-cards";

export const metadata: Metadata = {
  title: "Team | Cold Craft Engineering Ltd.",
  description: "Meet the Cold Craft Engineering team and connect with our people.",
};

export default function TeamPage() {
  return (
    <>
      <SiteHeader activePage="Team" />
      <TeamCards />
      <SiteFooter />
    </>
  );
}
