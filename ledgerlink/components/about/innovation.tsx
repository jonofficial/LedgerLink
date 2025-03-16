import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Shield, Link as LinkIcon, Zap, Cloud, Lock } from "lucide-react";

export function Innovation() {
  const innovations = [
    {
      icon: Shield,
      title: "Smart Contract Security",
      description: "Immutable blockchain records ensure tamper-proof verification of insurance policies."
    },
    {
      icon: Cpu,
      title: "IoT Integration",
      description: "Real-time data from Raspberry Pi devices enables automated verification and monitoring."
    },
    {
      icon: LinkIcon,
      title: "Decentralized Network",
      description: "Distributed ledger technology ensures transparency and eliminates single points of failure."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant verification and updates through our advanced blockchain network."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless integration with existing insurance systems through cloud infrastructure."
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Advanced encryption ensures your data remains private and secure."
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Innovations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pioneering the future of insurance verification through cutting-edge technology
            and innovative solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <item.icon className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}