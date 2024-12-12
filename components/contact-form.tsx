'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Anfrage gesendet',
      description: 'Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.',
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input placeholder="Vorname" required />
        </div>
        <div>
          <Input placeholder="Nachname" required />
        </div>
      </div>
      <div>
        <Input type="email" placeholder="E-Mail" required />
      </div>
      <div>
        <Input placeholder="Telefon" />
      </div>
      <div>
        <Textarea
          placeholder="Ihre Nachricht"
          className="min-h-[150px]"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-[#36bde7] hover:bg-[#2da8d0] text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
      </Button>
    </form>
  );
}