import { Link } from "react-router-dom";
import heroBg from "../components/ui/hero-bg.jpg";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import {
  Heart,
  Shield,
  Clock,
  Users,
  Calendar,
  MessageCircle,
} from "lucide-react";

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ================= HERO / LANDING SECTION ================= */}
      <section
        className="relative py-24 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/5 backdrop-blur-[0px]" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Your Path to Mental Wellness Starts Here
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Connect with professional, licensed therapists who understand your
              journey. Get the support you deserve in a safe, confidential
              environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/therapists">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                >
                  Find a Therapist
                </Button>
              </Link>

              <Link to="/book-appointment">
                <Button size="lg" variant="outline" className="px-8">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Theramint?
            </h2>
            <p className="text-muted-foreground text-lg">
              We're committed to making therapy accessible, comfortable, and
              effective for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>100% Confidential</CardTitle>
                <CardDescription>
                  Your privacy is our top priority. All sessions are completely
                  confidential and secure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Licensed Professionals</CardTitle>
                <CardDescription>
                  All our therapists are licensed, experienced, and carefully
                  vetted for quality care.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Flexible Scheduling</CardTitle>
                <CardDescription>
                  Book sessions that fit your schedule. Evening and weekend
                  appointments available.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Easy Booking</CardTitle>
                <CardDescription>
                  Simple, streamlined booking process. Get started in just a few
                  clicks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Multiple Modalities</CardTitle>
                <CardDescription>
                  In-person, video, or phone sessions available based on your
                  preference.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Personalized Care</CardTitle>
                <CardDescription>
                  Treatment plans tailored to your unique needs, goals, and
                  circumstances.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= SPECIALTIES SECTION ================= */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Areas of Expertise
            </h2>
            <p className="text-muted-foreground text-lg">
              Our therapists specialize in a wide range of mental health areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Anxiety",
              "Depression",
              "Trauma & PTSD",
              "Relationship Issues",
              "Stress Management",
              "Grief & Loss",
              "Life Transitions",
              "Self-Esteem",
              "Family Conflicts",
              "OCD",
              "Bipolar Disorder",
              "Addiction",
            ].map((specialty) => (
              <div
                key={specialty}
                className="bg-white border border-border rounded-lg p-4 text-center hover:border-primary/50 hover:shadow-md transition-all"
              >
                <p className="text-foreground">{specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Take the First Step?
          </h2>
          <p className="text-lg opacity-90">
            Your mental health matters. Connect with a therapist today and start
            your journey towards better wellbeing.
          </p>
          <div className="pt-4">
            <Link to="/book-appointment">
              <Button size="lg" variant="secondary" className="px-8">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
