export interface Child {
  id: string
  age: number
}

export interface TripData {
  // Step 1: When
  arrivalDate: Date | undefined
  departureDate: Date | undefined
  
  // Step 2: Who
  adults: number
  children: Child[]
  specialConsiderations: {
    pregnant: boolean
    mobility: boolean
    sensory: boolean
    foodAllergies: string
    firstDisneyTrip: boolean
  }
  
  // Step 3: Where
  selectedParks: string[]
  
  // Step 4: Budget
  budgetTier: 'budget' | 'moderate' | 'deluxe' | 'unlimited' | ''
  hasTickets: boolean
  hasHotel: boolean
  
  // Step 5: Preferences
  tripStyle: 'intense' | 'balanced' | 'relaxed' | ''
  mustDos: string[]
  skipList: string[]
}

export const initialTripData: TripData = {
  arrivalDate: undefined,
  departureDate: undefined,
  adults: 2,
  children: [],
  specialConsiderations: {
    pregnant: false,
    mobility: false,
    sensory: false,
    foodAllergies: '',
    firstDisneyTrip: false,
  },
  selectedParks: [],
  budgetTier: '',
  hasTickets: false,
  hasHotel: false,
  tripStyle: '',
  mustDos: [],
  skipList: [],
}

export const PARKS = [
  { id: 'magic-kingdom', name: 'Magic Kingdom', resort: 'disney', icon: '👑' },
  { id: 'epcot', name: 'EPCOT', resort: 'disney', icon: '🌐' },
  { id: 'hollywood-studios', name: 'Hollywood Studios', resort: 'disney', icon: '🎬' },
  { id: 'animal-kingdom', name: 'Animal Kingdom', resort: 'disney', icon: '🦁' },
  { id: 'universal-studios', name: 'Universal Studios', resort: 'universal', icon: '🎢' },
  { id: 'islands-of-adventure', name: 'Islands of Adventure', resort: 'universal', icon: '🏝️' },
  { id: 'volcano-bay', name: 'Volcano Bay', resort: 'universal', icon: '🌋' },
  { id: 'pool-day', name: 'Pool/Rest Day', resort: 'none', icon: '🏊' },
]

export const MUST_DO_EXPERIENCES = [
  { id: 'meet-mickey', name: 'Meet Mickey Mouse', parks: ['magic-kingdom'] },
  { id: 'space-mountain', name: 'Ride Space Mountain', parks: ['magic-kingdom'] },
  { id: 'seven-dwarfs', name: 'Seven Dwarfs Mine Train', parks: ['magic-kingdom'] },
  { id: 'fireworks', name: 'See Fireworks', parks: ['magic-kingdom', 'epcot'] },
  { id: 'character-dining', name: 'Character Dining', parks: ['any'] },
  { id: 'star-wars', name: 'Star Wars Experiences', parks: ['hollywood-studios'] },
  { id: 'rise-of-resistance', name: 'Rise of the Resistance', parks: ['hollywood-studios'] },
  { id: 'harry-potter', name: 'Harry Potter Experiences', parks: ['universal-studios', 'islands-of-adventure'] },
  { id: 'hagrids', name: "Hagrid's Motorbike Adventure", parks: ['islands-of-adventure'] },
  { id: 'flight-of-passage', name: 'Flight of Passage', parks: ['animal-kingdom'] },
  { id: 'guardians', name: 'Guardians of the Galaxy', parks: ['epcot'] },
  { id: 'world-showcase', name: 'World Showcase', parks: ['epcot'] },
  { id: 'toy-story-land', name: 'Toy Story Land', parks: ['hollywood-studios'] },
  { id: 'safari', name: 'Kilimanjaro Safaris', parks: ['animal-kingdom'] },
  { id: 'velocoaster', name: 'VelociCoaster', parks: ['islands-of-adventure'] },
]

export const SKIP_OPTIONS = [
  { id: 'thrill-rides', name: 'Thrill rides (inversions, big drops)' },
  { id: 'scary', name: 'Scary experiences' },
  { id: 'long-shows', name: 'Long shows' },
  { id: 'water-rides', name: 'Water rides (getting wet)' },
  { id: 'spinning', name: 'Spinning rides' },
  { id: 'dark-rides', name: 'Dark/indoor rides' },
]

export const BUDGET_TIERS = [
  {
    id: 'budget',
    name: 'Budget',
    price: '$150-250/day',
    desc: 'Value resorts, quick service dining, strategic Genie+ use',
  },
  {
    id: 'moderate',
    name: 'Moderate',
    price: '$250-400/day',
    desc: 'Moderate resorts, 1 table service meal per day, Genie+ most days',
  },
  {
    id: 'deluxe',
    name: 'Deluxe',
    price: '$400-600/day',
    desc: 'Deluxe resorts, character dining, full Genie+ experience',
  },
  {
    id: 'unlimited',
    name: 'No Limit',
    price: '$600+/day',
    desc: 'Club level, fireworks dessert parties, VIP tours',
  },
]

export const TRIP_STYLES = [
  {
    id: 'intense',
    name: 'Go Hard',
    desc: 'Rope drop to fireworks. Maximize every minute.',
    icon: '🔥',
  },
  {
    id: 'balanced',
    name: 'Balanced',
    desc: 'Morning parks, afternoon break, evening return.',
    icon: '⚖️',
  },
  {
    id: 'relaxed',
    name: 'Relaxed',
    desc: 'One park per day, plenty of downtime.',
    icon: '😌',
  },
]
