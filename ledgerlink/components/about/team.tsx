import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Team() {
  const team = [
    {
      name: "J M Tarun",
      role: "Blockchain Developer & Team Lead",
      image: "https://i.postimg.cc/1tWFm6t0/jm-tarun.jpg",
      bio: "Blockchain enthusiast with expertise in smart contract development and distributed systems."
    },
    {
      name: "A Harsha Kumar",
      role: "IoT Specialist",
      image: "https://i.postimg.cc/qRYcTYjX/harshakutapaiya.jpg",
      bio: "Expert in IoT integration and Raspberry Pi development for real-time data systems."
    },
    {
      name: "N Saran",
      role: "Frontend Developer",
      image: "https://i.postimg.cc/zvgGsRRG/saranphoto.jpg",
      bio: "Passionate about creating intuitive and responsive user interfaces."
    },
    {
      name: "S Jonathan Harrison",
      role: "Backend Developer",
      image: "https://i.postimg.cc/DZ1NRvwK/jonathan.jpg",
      bio: "Specialized in scalable backend architecture and API development."
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated group of innovators working to revolutionize the insurance industry
            through technology.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}