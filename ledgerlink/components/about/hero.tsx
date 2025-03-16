import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, Server } from "lucide-react";

export function AboutHero() {
  return (
    <div className="relative overflow-hidden bg-background pt-24 pb-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4" variant="secondary">Revolutionizing Insurance</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Securing Trust Through{" "}
            <span className="text-primary">Blockchain Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            InsureChain combines the power of blockchain, IoT, and artificial intelligence
            to create a transparent, secure, and efficient insurance verification system.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <span className="font-medium">Secure</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <span className="font-medium">Private</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <span className="font-medium">Decentralized</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}