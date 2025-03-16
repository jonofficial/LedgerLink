'use client';

import { useEffect, useState } from 'react';
import { useWallet } from '@/components/providers/wallet-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatEther } from '@/lib/utils';
import { Wallet, Shield, History } from 'lucide-react';
import Gun from 'gun';

const gun = Gun();

interface InsurancePolicy {
  type: string;
  formData: Record<string, string>;
  timestamp: string;
}

interface Claim {
  policyNumber: string;
  claimType: string;
  description: string;
}

export default function ProfilePage() {
  const { address, balance, disconnect } = useWallet();
  const [policies, setPolicies] = useState<InsurancePolicy[]>([]);
  const [claims, setClaims] = useState<Claim[]>([]);

  useEffect(() => {
    if (address) {
      // Fetch active insurance policies from Gun
      const fetchPolicies = async () => {
        const userPolicies: InsurancePolicy[] = [];
        gun.get('insurances').get(address).map().once((data) => {
          if (data) {
            userPolicies.push(data);
          }
          setPolicies(userPolicies);
        });
      };

      fetchPolicies();

      // Fetch claims history from Gun
      const fetchClaims = async () => {
        const userClaims: Claim[] = [];
        gun.get('claims').get(address).map().once((data) => {
          if (data) {
            userClaims.push(data);
          }
          setClaims(userClaims);
        });
      };

      fetchClaims();
    }
  }, [address]);

  if (!address) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Please connect your wallet</h1>
        <p className="text-muted-foreground">Connect your wallet to view your profile</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wallet className="mr-2 h-5 w-5" />
                Wallet Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><span className="font-medium">Address:</span> {address}</p>
                <p><span className="font-medium">Balance:</span> {formatEther(balance || '0')}</p>
                <Button variant="outline" onClick={disconnect}>Disconnect Wallet</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Active Policies
              </CardTitle>
            </CardHeader>
            <CardContent>
              {policies.length > 0 ? (
                <div className="space-y-4">
                  {policies.map((policy, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <p><span className="font-medium">Type:</span> {policy.type}</p>
                      <p><span className="font-medium">Date Applied:</span> {new Date(policy.timestamp).toLocaleString()}</p>
                      <p><span className="font-medium">Details:</span></p>
                      <ul className="ml-4 list-disc">
                        {Object.entries(policy.formData).map(([key, value]) => (
                          <li key={key}>
                            <span className="font-medium">{key}:</span> {value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No active policies found</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <History className="mr-2 h-5 w-5" />
                Claims History
              </CardTitle>
            </CardHeader>
            <CardContent>
              {claims.length > 0 ? (
                <div className="space-y-4">
                  {claims.map((claim, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <p><span className="font-medium">Policy Number:</span> {claim.policyNumber}</p>
                      <p><span className="font-medium">Claim Type:</span> {claim.claimType}</p>
                      <p><span className="font-medium">Description:</span> {claim.description}</p>
                      {/* <p><span className="font-medium">Date Submitted:</span> {new Date(Number(claim.timestamp)).toLocaleString()}</p> */}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No claims found</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
