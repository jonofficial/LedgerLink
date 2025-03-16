'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

export default function VerifyPage() {
  const [policyNumber, setPolicyNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    // Implement blockchain verification logic here
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Verify Insurance</CardTitle>
          <CardDescription>
            Enter the policy number to verify insurance status on the blockchain
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="policyNumber">Policy Number</Label>
              <Input
                id="policyNumber"
                placeholder="Enter policy number"
                value={policyNumber}
                onChange={(e) => setPolicyNumber(e.target.value)}
              />
            </div>
            <Button 
              className="w-full" 
              onClick={handleVerify}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying
                </>
              ) : (
                'Verify Insurance'
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}