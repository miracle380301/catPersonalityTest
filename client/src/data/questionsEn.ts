export interface Question {
  id: number;
  text: string;
  options: Array<{
    value: string;
    text: string;
    traits: string[];
  }>;
}

export const questionsEn: Question[] = [
  {
    id: 1,
    text: "At gatherings with friends, you are:",
    options: [
      { value: "A", text: "Leading conversations and talking to everyone", traits: ["social", "leadership"] },
      { value: "B", text: "Having deep conversations with close friends only", traits: ["selective", "loyal"] },
      { value: "C", text: "Observing the atmosphere and joining when needed", traits: ["observant", "cautious"] },
      { value: "D", text: "Staying quiet and leaving early", traits: ["independent", "introverted"] }
    ]
  },
  {
    id: 2,
    text: "When entering a new environment, you:",
    options: [
      { value: "A", text: "Approach others first and make friends", traits: ["social", "confident"] },
      { value: "B", text: "Slowly observe surroundings and adapt", traits: ["cautious", "observant"] },
      { value: "C", text: "Stay in a corner until feeling comfortable", traits: ["introverted", "careful"] },
      { value: "D", text: "Quickly assess the situation and act", traits: ["smart", "adaptable"] }
    ]
  },
  {
    id: 3,
    text: "When stressed, your coping method is:",
    options: [
      { value: "A", text: "Meet friends and talk about it", traits: ["social", "expressive"] },
      { value: "B", text: "Think quietly by yourself", traits: ["independent", "introspective"] },
      { value: "C", text: "Immerse yourself in favorite hobbies", traits: ["focused", "creative"] },
      { value: "D", text: "Get plenty of sleep", traits: ["practical", "self-care"] }
    ]
  },
  {
    id: 4,
    text: "Your preferred weekend activity is:",
    options: [
      { value: "A", text: "Active outdoor activities with friends", traits: ["social", "active"] },
      { value: "B", text: "Reading books or watching movies at home", traits: ["calm", "cultured"] },
      { value: "C", text: "Learning new hobbies or skills", traits: ["curious", "ambitious"] },
      { value: "D", text: "Walking in nature or spending time alone", traits: ["independent", "peaceful"] }
    ]
  },
  {
    id: 5,
    text: "When choosing food, your criteria is:",
    options: [
      { value: "A", text: "Eat whatever looks delicious first", traits: ["impulsive", "adventurous"] },
      { value: "B", text: "Choose familiar, safe menu items", traits: ["conservative", "consistent"] },
      { value: "C", text: "Consider nutrition and health", traits: ["practical", "health-conscious"] },
      { value: "D", text: "Choose based on mood and situation", traits: ["thoughtful", "adaptable"] }
    ]
  },
  {
    id: 6,
    text: "When problems arise, your approach is:",
    options: [
      { value: "A", text: "Take immediate action to solve it", traits: ["active", "decisive"] },
      { value: "B", text: "Think carefully before approaching cautiously", traits: ["cautious", "analytical"] },
      { value: "C", text: "Ask others for help", traits: ["collaborative", "humble"] },
      { value: "D", text: "Wait for time to solve it", traits: ["patient", "philosophical"] }
    ]
  },
  {
    id: 7,
    text: "The space where you feel most comfortable is:",
    options: [
      { value: "A", text: "Busy cafes or crowded squares", traits: ["social", "energetic"] },
      { value: "B", text: "Quiet and cozy personal space", traits: ["introverted", "cozy"] },
      { value: "C", text: "Wide outdoor spaces with nature", traits: ["free", "nature-loving"] },
      { value: "D", text: "Well-organized, clean spaces", traits: ["organized", "precise"] }
    ]
  },
  {
    id: 8,
    text: "When receiving a gift, your reaction is:",
    options: [
      { value: "A", text: "Open it immediately with big reactions", traits: ["expressive", "enthusiastic"] },
      { value: "B", text: "Thank them and open it carefully", traits: ["grateful", "careful"] },
      { value: "C", text: "Open it quietly when alone later", traits: ["private", "contemplative"] },
      { value: "D", text: "Express gratitude for their thoughtfulness first", traits: ["considerate", "polite"] }
    ]
  },
  {
    id: 9,
    text: "When meeting new people, you:",
    options: [
      { value: "A", text: "Approach them first in a friendly manner", traits: ["outgoing", "friendly"] },
      { value: "B", text: "Wait for them to approach you first", traits: ["reserved", "cautious"] },
      { value: "C", text: "Respond appropriately based on the situation", traits: ["adaptable", "diplomatic"] },
      { value: "D", text: "Give minimal greetings and keep distance", traits: ["independent", "selective"] }
    ]
  },
  {
    id: 10,
    text: "Your most active time of day is:",
    options: [
      { value: "A", text: "Early morning, when starting the day", traits: ["morning-person", "energetic"] },
      { value: "B", text: "Afternoon, with warm sunshine", traits: ["warm", "comfortable"] },
      { value: "C", text: "Evening, after finishing daily tasks", traits: ["reflective", "social"] },
      { value: "D", text: "Late night, during quiet hours", traits: ["nocturnal", "contemplative"] }
    ]
  },
  {
    id: 11,
    text: "Your criteria for choosing hobby activities:",
    options: [
      { value: "A", text: "Something to do with many people", traits: ["social", "collaborative"] },
      { value: "B", text: "Something enjoyable even alone", traits: ["independent", "self-sufficient"] },
      { value: "C", text: "Something that allows creativity", traits: ["creative", "artistic"] },
      { value: "D", text: "Something practical and helpful", traits: ["practical", "goal-oriented"] }
    ]
  },
  {
    id: 12,
    text: "Your attitude in conflict situations:",
    options: [
      { value: "A", text: "Actively step forward to resolve it", traits: ["assertive", "problem-solver"] },
      { value: "B", text: "Mediate and help reconcile", traits: ["diplomatic", "peacemaker"] },
      { value: "C", text: "Avoid until the situation calms down", traits: ["conflict-avoidant", "peaceful"] },
      { value: "D", text: "Express your opinion clearly", traits: ["honest", "direct"] }
    ]
  }
];