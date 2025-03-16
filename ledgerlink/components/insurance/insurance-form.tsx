'use client';

import { useState } from 'react';
import { useWallet } from '@/components/providers/wallet-provider'; // Wallet provider hook
import { Button } from '@/components/ui/button'; // UI button component
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; // UI card components
import { Input } from '@/components/ui/input'; // UI input component
import { Label } from '@/components/ui/label'; // UI label component
import { useToast } from '@/components/ui/use-toast'; // Toast notification hook
import { Loader2 } from 'lucide-react'; // Icon for loader
import { useRouter } from 'next/navigation'; // Next.js router for navigation
import Gun from 'gun'; // Gun database for decentralized data
import { InsuranceField } from '@/lib/insurance/types'; // Types for insurance fields

// Initialize Gun database
const gun = Gun();

interface InsuranceFormProps {
  title: string;
  description: string;
  type: 'health' | 'car' | 'crop';
  fields: InsuranceField[];
}

export function InsuranceForm({ title, description, type, fields }: InsuranceFormProps) {
  const { address } = useWallet(); // Get connected wallet address
  const { toast } = useToast(); // Toast for notifications
  const router = useRouter(); // Router for navigation
  const [loading, setLoading] = useState(false); // State to manage loading
  const [formData, setFormData] = useState<Record<string, string>>({}); // State to manage form data

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!address) {
      // Show toast if wallet is not connected
      toast({
        title: 'Wallet Required',
        description: 'Please connect your wallet to apply for insurance',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true); // Set loading state
    try {
      // Create insurance data object
      const insuranceData = {
        type, // Insurance type (health, car, crop)
        formData, // Form data from user inputs
        address, // Wallet address
        timestamp: new Date().toISOString(), // Current timestamp
      };

      // Save data to Gun database under the 'insurances' node
      gun.get('insurances').get(address).set(insuranceData);

      // Show success toast
      toast({
        title: 'Application Submitted',
        description: 'Your insurance application has been submitted successfully',
      });

      // Navigate to the profile page
      router.push('/profile');
    } catch (error) {
      // Show error toast on failure
      toast({
        title: 'Submission Failed',
        description: 'Failed to submit insurance application. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {fields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.id] || ''}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, [field.id]: e.target.value }))
                    }
                  />
                </div>
              ))}

              <Button type="submit" className="w-full" disabled={loading || !address}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Application
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
