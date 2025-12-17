export interface Therapist {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  bio: string;
  experience: string;
  availability: string[];
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

export const therapists: Therapist[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    title: 'Licensed Clinical Psychologist',
    specialties: ['Anxiety', 'Depression', 'Trauma', 'PTSD'],
    bio: 'Dr. Mitchell has over 15 years of experience helping individuals overcome anxiety and trauma. She uses evidence-based approaches including CBT and EMDR.',
    experience: '15 years',
    availability: ['Monday 9:00 AM', 'Wednesday 2:00 PM', 'Friday 10:00 AM'],
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 127
  },
  {
    id: '2',
    name: 'Dr. James Chen',
    title: 'Psychiatrist & Therapist',
    specialties: ['Depression', 'Bipolar Disorder', 'Medication Management'],
    bio: 'Dr. Chen combines medication management with therapeutic approaches to provide comprehensive mental health care.',
    experience: '12 years',
    availability: ['Tuesday 11:00 AM', 'Thursday 3:00 PM', 'Saturday 9:00 AM'],
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 98
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    title: 'Licensed Marriage & Family Therapist',
    specialties: ['Couples Therapy', 'Family Counseling', 'Communication'],
    bio: 'Emma specializes in helping couples and families build stronger relationships through improved communication and understanding.',
    experience: '10 years',
    availability: ['Monday 6:00 PM', 'Wednesday 5:00 PM', 'Friday 4:00 PM'],
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 156
  },
  {
    id: '4',
    name: 'Dr. Michael Thompson',
    title: 'Clinical Psychologist',
    specialties: ['OCD', 'Anxiety Disorders', 'Mindfulness'],
    bio: 'Dr. Thompson integrates mindfulness-based approaches with traditional CBT to help clients manage OCD and anxiety.',
    experience: '18 years',
    availability: ['Tuesday 10:00 AM', 'Thursday 1:00 PM', 'Friday 2:00 PM'],
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 143
  },
  {
    id: '5',
    name: 'Lisa Park',
    title: 'Licensed Professional Counselor',
    specialties: ['Life Transitions', 'Stress Management', 'Self-Esteem'],
    bio: 'Lisa helps individuals navigate major life transitions and develop healthy coping strategies for stress and self-doubt.',
    experience: '8 years',
    availability: ['Monday 3:00 PM', 'Wednesday 11:00 AM', 'Thursday 9:00 AM'],
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: '6',
    name: 'Dr. Robert Williams',
    title: 'Child & Adolescent Psychologist',
    specialties: ['Child Therapy', 'ADHD', 'Behavioral Issues'],
    bio: 'Dr. Williams has dedicated his career to helping children and teens overcome behavioral and emotional challenges.',
    experience: '20 years',
    availability: ['Monday 4:00 PM', 'Tuesday 2:00 PM', 'Friday 11:00 AM'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 201
  }
];
