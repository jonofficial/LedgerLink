import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, CircleDot } from "lucide-react";

export function Timeline() {
  const milestones = [
    {
      status: "completed",
      title: "Functional Prototype",
      description: "Successfully developed a functional prototype with blockchain integration, showcasing the core functionality of our platform.",
      icon: CheckCircle2
    },
    {
      status: "upcoming",
      title: "IoT Integration Testing",
      description: "Conducting pilot testing of IoT data triggering claims on Peaq testnet, ensuring seamless integration of sensors and blockchain.",
      icon: CircleDot
    },
    {
      status: "upcoming",
      title: "Beta Testing Phase",
      description: "Beta testing with select insurers to gather feedback and refine our platform before official launch.",
      icon: CircleDot
    },
    {
      status: "upcoming",
      title: "Mainnet Launch",
      description: "Launching on the Peaq mainnet in Q2 2025, providing a secure and scalable platform for insurance operations.",
      icon: CircleDot
    },
    {
      status: "upcoming",
      title: "Expansion Phase",
      description: "Actively exploring expansion into health insurance and disaster management, leveraging our technology to address broader insurance needs.",
      icon: CircleDot
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Achievements & Future Roadmap</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our journey from concept to reality, and our vision for the future of insurance verification.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative ${
                index % 2 === 0 ? 'lg:ml-auto lg:pl-16' : 'lg:mr-auto lg:pr-16'
              } lg:w-1/2`}>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:left-0 lg:right-auto">
                  <milestone.icon 
                    className={`w-8 h-8 ${
                      milestone.status === 'completed' 
                        ? 'text-primary' 
                        : 'text-muted-foreground'
                    }`}
                  />
                </div>
                <Card className="relative">
                  <CardContent className="p-6">
                    <Badge variant={milestone.status === 'completed' ? 'default' : 'secondary'} 
                           className="mb-2">
                      {milestone.status === 'completed' ? 'Completed' : 'Upcoming'}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}