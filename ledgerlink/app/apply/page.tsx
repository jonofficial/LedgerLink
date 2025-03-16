'use client';

import { PinContainer } from '@/components/ui/3d-pin';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, Heart, Wheat, ShieldCheck, Zap, Clock } from 'lucide-react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import Link from 'next/link';

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Choose Your Insurance Coverage
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure your future with blockchain-powered insurance solutions
          </p>
        </div>

        {/* Insurance Cards */}
        <div className="grid md:grid-cols-3 gap-1 mb-16">
          <Link href="/apply/health">
            <div className="group">
              <PinContainer title="Health Insurance" href="/apply/health">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[15rem]">
                  <div className="mx-auto rounded-full p-3 bg-primary/10 dark:bg-primary/20 mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">Health Insurance</h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      Comprehensive health coverage with smart contract verification
                    </span>
                  </div>
                
                </div>
              </PinContainer>
            </div>
          </Link>

          <Link href="/apply/car">
            <div className="group">
              <PinContainer title="Car Insurance" href="/apply/car">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[15rem]">
                  <div className="mx-auto rounded-full p-3 bg-primary/10 dark:bg-primary/20 mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Car className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">Car Insurance</h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      IoT-integrated vehicle coverage with real-time monitoring
                    </span>
                  </div>
                </div>
              </PinContainer>
            </div>
          </Link>

          <Link href="/apply/crop">
            <div className="group">
              <PinContainer title="Crop Insurance" href="/apply/crop">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[15rem]">
                  <div className="mx-auto rounded-full p-3 bg-primary/10 dark:bg-primary/20 mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Wheat className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">Crop Insurance</h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      Weather-indexed protection with automated claim processing
                    </span>
                  </div>
                </div>
              </PinContainer>
            </div>
          </Link>
        </div>

        {/* Features Section */}
        <Card className="border-none bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-primary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold mb-4">Why Choose Our Platform?</CardTitle>
            <CardDescription className="text-base">
              Experience the future of insurance with blockchain technology
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="mx-auto rounded-full p-3 bg-primary/10 dark:bg-primary/20 mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure & Transparent</h3>
                <p className="text-muted-foreground">
                  Blockchain-backed security and complete transparency
                </p>
              </div>

              <div className="text-center group">
                <div className="mx-auto rounded-full p-3 bg-primary/10 dark:bg-primary/20 mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Instant Processing</h3>
                <p className="text-muted-foreground">
                  Quick claim verification and automated payouts
                </p>
              </div>

              <div className="text-center group">
                <div className="mx-auto rounded-full p-3 bg-primary/10 dark:bg-primary/20 mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Coverage</h3>
                <p className="text-muted-foreground">
                  Round-the-clock protection and support
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
