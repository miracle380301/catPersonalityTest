export interface CatType {
  id: string;
  name: string;
  description: string;
  traits: string[];
  compatible: string;
  imageUrl: string;
  emoji: string;
  matchingTraits: string[];
}

export const catTypesEn: CatType[] = [
  {
    id: "social_mainecoon",
    name: "Social Maine Coon",
    description: "You have a lively and friendly personality. You love socializing with people and are good at being the life of the party. Like your large build, you have a big heart and are inclusive, which makes many people like you.",
    traits: ["Sociable", "Friendly", "Leadership", "Inclusive"],
    compatible: "Playful Abyssinian",
    imageUrl: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    emoji: "😸",
    matchingTraits: ["social", "leadership", "friendly", "outgoing", "collaborative"]
  },
  {
    id: "independent_russian",
    name: "Independent Russian Blue",
    description: "You have a quiet and thoughtful personality. You value your alone time and prefer deep relationships. You are prudent and observant, good at understanding situations.",
    traits: ["Prudent", "Independent", "Observant", "Elegant"],
    compatible: "Gentle Persian",
    imageUrl: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    emoji: "😺",
    matchingTraits: ["independent", "introverted", "cautious", "observant", "contemplative"]
  },
  {
    id: "gentle_persian",
    name: "Gentle Persian",
    description: "You have a calm and elegant personality. You love peaceful environments and try to avoid conflicts. You have a soft and warm heart that gives people a sense of stability.",
    traits: ["Gentle", "Elegant", "Peaceful", "Warm"],
    compatible: "Independent Russian Blue",
    imageUrl: "https://images.unsplash.com/photo-1518788053631-40ea80870bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    emoji: "😌",
    matchingTraits: ["calm", "peaceful", "gentle", "conflict-avoidant", "comfortable"]
  },
  {
    id: "playful_abyssinian",
    name: "Playful Abyssinian",
    description: "You are curious and full of energy. You love exploring new things and enjoy adventures. You are active and playful, bringing joy to people around you.",
    traits: ["Lively", "Curious", "Adventurous", "Playful"],
    compatible: "Social Maine Coon",
    imageUrl: "https://images.unsplash.com/photo-1573824266776-f016c09cb1e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    emoji: "😻",
    matchingTraits: ["active", "curious", "adventurous", "energetic", "enthusiastic"]
  },
  {
    id: "mysterious_siamese",
    name: "Mysterious Siamese",
    description: "You have an intelligent and sensitive personality. You think deeply and have your own philosophy. You selectively form relationships with people, but once you open your heart, you are very loyal.",
    traits: ["Intelligent", "Sensitive", "Loyal", "Mysterious"],
    compatible: "Elegant Russian Blue",
    imageUrl: "https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    emoji: "🙀",
    matchingTraits: ["smart", "analytical", "selective", "loyal", "introspective"]
  },
  {
    id: "practical_shorthair",
    name: "Practical British Shorthair",
    description: "You have a realistic and stable personality. You act according to plans and value practicality. You are consistent and reliable, and people around you depend on you.",
    traits: ["Realistic", "Stable", "Planned", "Trustworthy"],
    compatible: "Gentle Persian",
    imageUrl: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    emoji: "😸",
    matchingTraits: ["practical", "organized", "conservative", "reliable", "health-conscious"]
  }
];