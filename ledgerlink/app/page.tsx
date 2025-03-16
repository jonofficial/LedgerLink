'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Cpu, Link as LinkIcon } from 'lucide-react';
import { useWallet } from '@/components/providers/wallet-provider';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { address, connect } = useWallet();
  const router = useRouter();

  const handleGetStarted = () => {
    if (!address) {
      connect();
    } else {
      router.push('/apply');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          Decentralized Insurance Platform
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Secure, transparent, and efficient insurance solutions powered by blockchain technology.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <Shield className="w-10 h-10 mb-4 text-primary" />
            <CardTitle>Insurance Types</CardTitle>
            <CardDescription>
              Health, Car, and Crop insurance solutions on the blockchain
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Cpu className="w-10 h-10 mb-4 text-primary" />
            <CardTitle>Smart Claims</CardTitle>
            <CardDescription>
              Automated claims processing with IoT integration
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <LinkIcon className="w-10 h-10 mb-4 text-primary" />
            <CardTitle>Instant Verification</CardTitle>
            <CardDescription>
              Real-time policy verification and management
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="text-center space-x-4">
        <Button size="lg" onClick={handleGetStarted}>
          {address ? 'Apply for Insurance' : 'Connect Wallet'}
        </Button>
        <Button variant="outline" size="lg" onClick={() => router.push('/claim')}>
          File a Claim
        </Button>
      </div>
    </div>
  );
}