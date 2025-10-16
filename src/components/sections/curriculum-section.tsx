import { BrainCircuit, Music, Rocket, ScreenShare, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Music className="h-8 w-8 text-primary" />,
    title: 'From Practice to Passion',
    description: 'We replace practice boredom with project-based learning. Kids create original songs, remixes, and beats that sound like the music they actually love.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Builds Transferable Skills',
    description: 'Beyond music, students learn technology fluency, creativity, problem-solving, and collaboration—skills that carry into school and future careers.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Structured, Tangible Progress',
    description: 'Guided classes turn fun projects into genuine understanding of rhythm, harmony, and song structure. Every term ends with a professionally produced track.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Safe, Social Collaboration',
    description: 'Small group sessions give kids a chance to collaborate and make friends, using technology in a creative, productive way (not just gaming or scrolling).',
  },
  {
    icon: <ScreenShare className="h-8 w-8 text-primary" />,
    title: 'Parent-Friendly Results',
    description: 'Every term ends with a showcase: playlists, recordings, or performances parents can actually hear, share, and be proud of.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Learn from an Industry Insider',
    description: "Your child will learn from direct experience in the music industry, with a curriculum that's relevant, modern, and aligned with the real-world music landscape.",
  },
];

export default function CurriculumSection() {
  return (
    <section id="curriculum" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">A New Approach to Music Education</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We focus on what keeps kids excited, building skills that last a lifetime.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary/10 p-4">
                  {feature.icon}
                </div>
                <CardTitle>
                  <h3 className="font-headline text-xl">{feature.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
