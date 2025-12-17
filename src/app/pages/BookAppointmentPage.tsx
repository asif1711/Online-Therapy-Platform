import { useState } from 'react';
import { therapists } from '../data/therapists';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { Calendar, CheckCircle } from 'lucide-react';

export function BookAppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    therapistId: '',
    appointmentType: '',
    preferredDate: '',
    preferredTime: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        therapistId: '',
        appointmentType: '',
        preferredDate: '',
        preferredTime: '',
        reason: ''
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="max-w-md w-full border-border">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="text-2xl">Appointment Request Sent!</CardTitle>
            <CardDescription className="text-base">
              We've received your appointment request. Our team will contact you within 24 hours
              to confirm your appointment details.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16 px-4 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg text-muted-foreground">
            Take the first step towards better mental health. Fill out the form below and we'll
            get back to you shortly.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Appointment Details</CardTitle>
              <CardDescription>
                Please provide your information and preferences for your therapy session.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Personal Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                      className="bg-input-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      className="bg-input-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                      className="bg-input-background"
                    />
                  </div>
                </div>

                {/* Appointment Preferences */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground">Appointment Preferences</h3>

                  <div className="space-y-2">
                    <Label htmlFor="therapist">Preferred Therapist</Label>
                    <Select value={formData.therapistId} onValueChange={(value) => handleChange('therapistId', value)}>
                      <SelectTrigger className="bg-input-background">
                        <SelectValue placeholder="Select a therapist" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">No Preference</SelectItem>
                        {therapists.map((therapist) => (
                          <SelectItem key={therapist.id} value={therapist.id}>
                            {therapist.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="appointmentType">Appointment Type *</Label>
                    <Select value={formData.appointmentType} onValueChange={(value) => handleChange('appointmentType', value)} required>
                      <SelectTrigger className="bg-input-background">
                        <SelectValue placeholder="Select appointment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">Video Session</SelectItem>
                        <SelectItem value="in-person">In-Person Session</SelectItem>
                        <SelectItem value="phone">Phone Session</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleChange('preferredDate', e.target.value)}
                        required
                        className="bg-input-background"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Select value={formData.preferredTime} onValueChange={(value) => handleChange('preferredTime', value)} required>
                        <SelectTrigger className="bg-input-background">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="13:00">1:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Visit (Optional)</Label>
                    <Textarea
                      id="reason"
                      placeholder="Please briefly describe what you'd like to discuss..."
                      value={formData.reason}
                      onChange={(e) => handleChange('reason', e.target.value)}
                      className="min-h-[120px] bg-input-background resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                    Submit Appointment Request
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
