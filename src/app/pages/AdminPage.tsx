import { useState } from 'react';
import { therapists as initialTherapists } from '../data/therapists';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Plus, Edit, Trash2, Shield } from 'lucide-react';

interface TherapistForm {
  id: string;
  name: string;
  title: string;
  specialties: string;
  bio: string;
  experience: string;
  imageUrl: string;
}

export function AdminPage() {
  const [therapists, setTherapists] = useState(initialTherapists);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<TherapistForm>({
    id: '',
    name: '',
    title: '',
    specialties: '',
    bio: '',
    experience: '',
    imageUrl: ''
  });

  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      title: '',
      specialties: '',
      bio: '',
      experience: '',
      imageUrl: ''
    });
    setEditingId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTherapist = {
      id: editingId || Date.now().toString(),
      name: formData.name,
      title: formData.title,
      specialties: formData.specialties.split(',').map(s => s.trim()),
      bio: formData.bio,
      experience: formData.experience,
      availability: ['Monday 9:00 AM', 'Wednesday 2:00 PM', 'Friday 10:00 AM'],
      imageUrl: formData.imageUrl || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      rating: 4.8,
      reviewCount: 0
    };

    if (editingId) {
      setTherapists(prev => prev.map(t => t.id === editingId ? newTherapist : t));
    } else {
      setTherapists(prev => [...prev, newTherapist]);
    }

    resetForm();
  };

  const handleEdit = (id: string) => {
    const therapist = therapists.find(t => t.id === id);
    if (therapist) {
      setFormData({
        id: therapist.id,
        name: therapist.name,
        title: therapist.title,
        specialties: therapist.specialties.join(', '),
        bio: therapist.bio,
        experience: therapist.experience,
        imageUrl: therapist.imageUrl
      });
      setEditingId(id);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this therapist?')) {
      setTherapists(prev => prev.filter(t => t.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage therapists and appointments</p>
            </div>
          </div>
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-6">
            <p className="text-sm text-destructive">
              <strong>Admin Access:</strong> This page is for authorized administrators only.
              All actions are logged for security purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="manage" className="space-y-8">
            <TabsList className="bg-muted">
              <TabsTrigger value="manage">Manage Therapists</TabsTrigger>
              <TabsTrigger value="add">Add/Edit Therapist</TabsTrigger>
            </TabsList>

            {/* Manage Tab */}
            <TabsContent value="manage" className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Current Therapists</h2>
                  <p className="text-muted-foreground">Total: {therapists.length} therapists</p>
                </div>
                <Button
                  onClick={() => {
                    resetForm();
                    // Switch to add tab by using a tab click simulation
                    document.querySelector<HTMLButtonElement>('[value="add"]')?.click();
                  }}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Therapist
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {therapists.map((therapist) => (
                  <Card key={therapist.id} className="border-border">
                    <CardHeader>
                      <div className="aspect-square overflow-hidden rounded-lg mb-3 bg-muted">
                        <img
                          src={therapist.imageUrl}
                          alt={therapist.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-lg">{therapist.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {therapist.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Specialties</p>
                        <div className="flex flex-wrap gap-1">
                          {therapist.specialties.map((specialty) => (
                            <Badge key={specialty} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => {
                            handleEdit(therapist.id);
                            document.querySelector<HTMLButtonElement>('[value="add"]')?.click();
                          }}
                        >
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          className="flex-1"
                          onClick={() => handleDelete(therapist.id)}
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Add/Edit Tab */}
            <TabsContent value="add">
              <Card className="max-w-2xl mx-auto border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {editingId ? 'Edit Therapist' : 'Add New Therapist'}
                  </CardTitle>
                  <CardDescription>
                    {editingId
                      ? 'Update the therapist information below.'
                      : 'Fill in the details to add a new therapist to the platform.'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Dr. Jane Smith"
                        required
                        className="bg-input-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title">Professional Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Licensed Clinical Psychologist"
                        required
                        className="bg-input-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialties">Specialties (comma-separated) *</Label>
                      <Input
                        id="specialties"
                        value={formData.specialties}
                        onChange={(e) => setFormData(prev => ({ ...prev, specialties: e.target.value }))}
                        placeholder="Anxiety, Depression, Trauma"
                        required
                        className="bg-input-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Biography *</Label>
                      <Textarea
                        id="bio"
                        value={formData.bio}
                        onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                        placeholder="Brief professional biography..."
                        required
                        className="min-h-[120px] bg-input-background resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Input
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                        placeholder="10 years"
                        required
                        className="bg-input-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="imageUrl">Profile Image URL (Optional)</Label>
                      <Input
                        id="imageUrl"
                        type="url"
                        value={formData.imageUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                        placeholder="https://example.com/image.jpg"
                        className="bg-input-background"
                      />
                      <p className="text-xs text-muted-foreground">
                        Leave empty to use default image
                      </p>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                        {editingId ? 'Update Therapist' : 'Add Therapist'}
                      </Button>
                      {editingId && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={resetForm}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
