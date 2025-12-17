import { Link } from 'react-router';
import { therapists } from '../data/therapists';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Star, Calendar } from 'lucide-react';

export function TherapistsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Therapists
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of licensed, experienced professionals is here to support you on your journey
            to better mental health.
          </p>
        </div>
      </section>

      {/* Therapists Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapists.map((therapist) => (
              <Card key={therapist.id} className="border-border hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4 bg-muted">
                    <img
                      src={therapist.imageUrl}
                      alt={therapist.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl">{therapist.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {therapist.title}
                  </CardDescription>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 pt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-semibold text-sm">{therapist.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({therapist.reviewCount} reviews)
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Experience */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Experience</p>
                    <p className="font-medium text-foreground">{therapist.experience}</p>
                  </div>

                  {/* Specialties */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {therapist.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {therapist.bio}
                  </p>

                  {/* Book Button */}
                  <Link to={`/book-appointment?therapist=${therapist.id}`} className="block pt-2">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Can't Decide Which Therapist is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground">
            We can help match you with the perfect therapist based on your needs and preferences.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Us for Help
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
