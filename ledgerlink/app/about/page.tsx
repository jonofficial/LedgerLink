import { AboutHero } from '@/components/about/hero';
import { Innovation } from '@/components/about/innovation';
import { Team } from '@/components/about/team';
import { Timeline } from '@/components/about/timeline';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <Innovation />
      <Timeline />
      <Team />
    </div>
  );
}