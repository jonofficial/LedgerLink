'use client';

import { useState } from 'react';
import Gun from 'gun';
import { useWallet } from '@/components/providers/wallet-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

const gun = Gun();

interface Claim {
  policyNumber: string;
  claimType: string;
  description: string;
  timestamp: string;
}

export default function ClaimPage() {
  const { address } = useWallet();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    policyNumber: '',
    claimType: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmitClaim = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!address) {
      toast({
        title: 'Wallet Required',
        description: 'Please connect your wallet to submit a claim.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    const newClaim: Claim = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    try {
      // Save claim to Gun DB under user's wallet address
      gun.get('claims').get(address).set(newClaim);

      toast({
        title: 'Claim Submitted',
        description: 'Your claim has been successfully submitted.',
      });

      // Reset form
      setFormData({
        policyNumber: '',
        claimType: '',
        description: '',
      });
    } catch (error) {
      console.error('Error saving claim:', error);
      toast({
        title: 'Submission Failed',
        description: 'An error occurred while submitting the claim.',
        variant: 'destructive',
      });
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Submit Insurance Claim</CardTitle>
            <CardDescription>
              File a new insurance claim for processing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitClaim} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="policyNumber">Policy Number</Label>
                <Input
                  id="policyNumber"
                  placeholder="Enter your policy number"
                  required
                  value={formData.policyNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="claimType">Claim Type</Label>
                <Input
                  id="claimType"
                  placeholder="e.g., Health, Car, or Crop"
                  required
                  value={formData.claimType}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Claim Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your claim in detail"
                  className="min-h-[100px]"
                  required
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading || !address}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Claim
                  </>
                ) : (
                  'Submit Claim'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
