import { GrammarExercise } from "../models/exercise";

export const mockGrammarExercises: GrammarExercise[] = [
  {
    id: 1,
    type: "fill-paragraph",
    title: "A Rainy Afternoon in the City",
    instructions: "Fill in the blanks with the most appropriate words.",
    grammarPoints: [
      "Adjectives",
      "Noun Usage",
      "Present Simple",
      "Future Probability",
    ],
    level: "B2",
    prosa: [
      {
        id: "p1",
        text: [
          "The weather today is",
          "and the clouds are covering most of the sky. The forecast says it will",
          "in the afternoon, so I should take an umbrella with me.",
        ],
        hint: ["Weather condition", "Action related to rain"],
      },
      {
        id: "p2",
        text: [
          "As I walk down the street, I notice people hurrying to their destinations. A man in a suit is talking on his",
          "while a woman with a red umbrella is checking her",
          "at the bus stop.",
        ],
        hint: ["Electronic device", "Object that shows time"],
      },
      {
        id: "p3",
        text: [
          "I decide to stop by my favorite coffee shop. The warm aroma of",

          "fills the air as I push open the door. The barista greets me with a smile and asks if I want my usual",

          "or if I’d like to try something new today.",
        ],
        hint: ["Hot beverage", "Type of drink"],
      },
      {
        id: "p4",
        text: [
          "While waiting for my drink, I look around. A couple is sitting by the window, sharing a",

          "while whispering to each other. At another table, a student is typing furiously on their",

          "probably finishing an important assignment.",
        ],
        hint: ["Small dessert", "Electronic device"],
      },
      {
        id: "p5",
        text: [
          "I take my coffee and find a seat near the bookshelf. I pull out a book and start reading, letting the sound of",

          "outside create a calming background. Time passes quickly, and soon, the rain stops.",

          "begins to break through the clouds, casting a warm glow on the wet pavement.",
        ],
        hint: ["Sound related to weather", "Celestial object"],
      },
    ],
    answers: {
      p1: ["cloudy", "rain"],
      p2: ["phone", "watch"],
      p3: ["coffee", "latte"],
      p4: ["cake", "laptop"],
      p5: ["raindrops", "sunlight"],
    },
  },

  {
    id: 2,
    type: "fill-sentence",
    title: "Complete the sentences with the correct option",
    instructions: "Select the correct word to complete each sentence.",
    grammarPoints: [
      "Verb Tenses",
      "Modals",
      "Conditionals",
      "Passive Voice",
      "Reported Speech",
      "Relative Clauses",
    ],
    sentences: [
      {
        id: "s1",
        text: "By the end of this year, they _____ in this city for a decade.",
        hint: "Future Perfect of 'live'",
      },
      {
        id: "s2",
        text: "If she _____ more time, she would travel around the world.",
        hint: "Second Conditional",
      },
      {
        id: "s3",
        text: "I _____ my keys while I was running to catch the bus.",
        hint: "Past Simple vs. Past Continuous",
      },
      {
        id: "s4",
        text: "She said she _____ to call me later.",
        hint: "Reported Speech - Future",
      },
      {
        id: "s5",
        text: "You _____ tell anyone about this. It’s a secret!",
        hint: "Modal verb for prohibition",
      },
      {
        id: "s6",
        text: "This book, _____ was published last year, became a bestseller.",
        hint: "Relative Clause",
      },
      {
        id: "s7",
        text: "By the time you arrive, we _____ for more than an hour.",
        hint: "Future Perfect Continuous of 'wait'",
      },
      {
        id: "s8",
        text: "She is used to _____ early in the morning.",
        hint: "Gerund after 'used to'",
      },
      {
        id: "s9",
        text: "A new bridge _____ in the city last year.",
        hint: "Passive Voice - Past Simple",
      },
      {
        id: "s10",
        text: "If she had studied harder, she _____ the exam.",
        hint: "Third Conditional",
      },
      {
        id: "s11",
        text: "He asked me where I _____ from.",
        hint: "Reported Speech - Past",
      },
      {
        id: "s12",
        text: "By next summer, I _____ five marathons.",
        hint: "Future Perfect of 'run'",
      },
    ],
    answers: {
      s1: ["will have lived", "live", "had lived"],
      s2: ["had", "has", "will have"],
      s3: ["dropped", "was dropping", "had dropped"],
      s4: ["was going", "will go", "goes"],
      s5: ["must not", "should not", "can’t"],
      s6: ["which", "that", "who"],
      s7: ["will have been waiting", "are waiting", "waited"],
      s8: ["waking up", "wake up", "woke up"],
      s9: ["was built", "has been built", "built"],
      s10: ["would have passed", "would pass", "will pass"],
      s11: ["came", "come", "was coming"],
      s12: ["will have run", "run", "will run"],
    },
  },
  {
    id: 3,
    title: "Transform the sentences correctly",
    type: "q&a",
    instructions:
      "Use the given words to create a correct sentence. You may need to change verb tenses, add auxiliaries, or modify structures.",
    grammarPoints: [
      "Past Perfect & Past Perfect Continuous",
      "Mixed Conditionals (Second & Third)",
      "Inversion Structures",
    ],
    level: "B2",
    questions: [
      {
        id: 1,
        text: "by the time / he / realize / mistake / they / already / leave.",
        answer: "By the time he realized his mistake, they had already left.",
        type: "textInput",
      },
      {
        id: 2,
        text: "if / she / not forget / the appointment / she / not miss / the meeting.",
        answer:
          "If she hadn’t forgotten the appointment, she wouldn’t have missed the meeting.",
        type: "textInput",
      },
      {
        id: 3,
        text: "hardly / we / arrive / when / the bus / leave.",
        answer: "Hardly had we arrived when the bus left.",
        type: "textInput",
      },
      {
        id: 4,
        text: "I / be / tired / because / I / work / all day.",
        answer: "I was tired because I had been working all day.",
        type: "textInput",
      },
      {
        id: 5,
        text: "only when / she / see / the bill / she / realize / mistake.",
        answer: "Only when she saw the bill did she realize her mistake.",
        type: "textInput",
      },
      {
        id: 6,
        text: "if / he / tell / me earlier / I / help / him.",
        answer: "If he had told me earlier, I would have helped him.",
        type: "textInput",
      },
      {
        id: 7,
        text: "not until / she / read / the letter / she / understand / what happened.",
        answer:
          "Not until she read the letter did she understand what had happened.",
        type: "textInput",
      },
      {
        id: 8,
        text: "by the time / we / reach / home / it / already / start / to rain.",
        answer: "By the time we reached home, it had already started to rain.",
        type: "textInput",
      },
      {
        id: 9,
        text: "if / they / leave / earlier / they / catch / the train.",
        answer: "If they had left earlier, they would have caught the train.",
        type: "textInput",
      },
      {
        id: 10,
        text: "never / I / see / such a terrible storm / until that day.",
        answer: "Never had I seen such a terrible storm until that day.",
        type: "textInput",
      },
      {
        id: 11,
        text: "if / she / not spend / all her money / she / buy / a new phone.",
        answer:
          "If she hadn’t spent all her money, she could have bought a new phone.",
        type: "textInput",
      },
      {
        id: 12,
        text: "seldom / we / witness / such an intense debate.",
        answer: "Seldom have we witnessed such an intense debate.",
        type: "textInput",
      },
      {
        id: 13,
        text: "he / regret / not / tell / the truth / when / he / have / the chance.",
        answer: "He regretted not telling the truth when he had the chance.",
        type: "textInput",
      },
      {
        id: 14,
        text: "had / you / know / about the problem / you / react / differently?",
        answer:
          "Had you known about the problem, would you have reacted differently?",
        type: "textInput",
      },
      {
        id: 15,
        text: "scarcely / they / finish / dinner / when / the lights / go off.",
        answer: "Scarcely had they finished dinner when the lights went off.",
        type: "textInput",
      },
    ],
  },

  {
    id: 4,
    title: "Write the correct question for each answer",
    type: "q&a",
    instructions:
      "Based on the given answer, write a grammatically correct question.",
    grammarPoints: [
      "Present Perfect & Present Perfect Continuous",
      "Indirect Questions",
    ],
    level: "B2",
    questions: [
      {
        id: 1,
        text: "I have lived in London for five years.",
        answer: "How long have you lived in London?",
        type: "textInput",
      },
      {
        id: 2,
        text: "She has been studying for her exam all morning.",
        answer: "What has she been doing all morning?",
        type: "textInput",
      },
      {
        id: 3,
        text: "They have never seen a whale before.",
        answer: "Have they ever seen a whale before?",
        type: "textInput",
      },
      {
        id: 4,
        text: "I have finished my report.",
        answer: "Have you finished your report?",
        type: "textInput",
      },
      {
        id: 5,
        text: "Yes, he has already called me twice today.",
        answer: "Has he called you today?",
        type: "textInput",
      },
      {
        id: 6,
        text: "She has been working here since 2018.",
        answer: "Since when has she been working here?",
        type: "textInput",
      },
      {
        id: 7,
        text: "He has just left the office.",
        answer: "Has he left the office yet?",
        type: "textInput",
      },
      {
        id: 8,
        text: "I was wondering where she has gone.",
        answer: "Where has she gone?",
        type: "textInput",
      },
      {
        id: 9,
        text: "We have been waiting for over an hour.",
        answer: "How long have you been waiting?",
        type: "textInput",
      },
      {
        id: 10,
        text: "They haven’t spoken to each other since last year.",
        answer: "How long haven’t they spoken to each other?",
        type: "textInput",
      },
      {
        id: 11,
        text: "No, I haven’t met her before.",
        answer: "Have you met her before?",
        type: "textInput",
      },
      {
        id: 12,
        text: "He has visited Japan three times.",
        answer: "How many times has he visited Japan?",
        type: "textInput",
      },
      {
        id: 13,
        text: "I have just received an email from him.",
        answer: "Have you received an email from him?",
        type: "textInput",
      },
      {
        id: 14,
        text: "I have been working on this project all day.",
        answer: "What have you been working on all day?",
        type: "textInput",
      },
      {
        id: 15,
        text: "I was wondering how long they have known each other.",
        answer: "How long have they known each other?",
        type: "textInput",
      },
      {
        id: 16,
        text: "He has been feeling sick since yesterday.",
        answer: "Since when has he been feeling sick?",
        type: "textInput",
      },
    ],
  },
  {
    id: 5,
    title: "Answer the questions correctly",
    type: "q&a",
    instructions: "Write a grammatically correct answer for each question.",
    grammarPoints: ["Future Forms", "Cleft Sentences"],
    level: "B2",
    questions: [
      {
        id: 1,
        text: "What are you going to do this weekend?",
        hint: "visit/family/friends",
        answer: "I'm going to visit my grandparents.",
        type: "textInput",
      },
      {
        id: 2,
        text: "What will you have finished by the end of the day?",
        hint: "work/project/homework",
        answer: "I will have finished my report by the end of the day.",
        type: "textInput",
      },
      {
        id: 3,
        text: "Where will she be working next year?",
        hint: "company/city/country",
        answer: "She will be working in New York next year.",
        type: "textInput",
      },
      {
        id: 4,
        text: "What is it that worries you the most?",
        hint: "exam/future/decision",
        answer: "It’s my final exam that worries me the most.",
        type: "textInput",
      },
      {
        id: 5,
        text: "Who is it that called you last night?",
        hint: "family/friend/boss",
        answer: "It was my brother who called me last night.",
        type: "textInput",
      },
      {
        id: 6,
        text: "What will you have been doing for three hours by the time they arrive?",
        hint: "study/work/wait",
        answer:
          "I will have been studying for three hours by the time they arrive.",
        type: "textInput",
      },
      {
        id: 7,
        text: "What are you going to eat for lunch?",
        hint: "salad/sandwich/pasta",
        answer: "I'm going to have a salad.",
        type: "textInput",
      },
      {
        id: 8,
        text: "When will they have finished the project?",
        hint: "next week/tomorrow/in two days",
        answer: "They will have finished the project by next Monday.",
        type: "textInput",
      },
      {
        id: 9,
        text: "What will you be doing at 7 PM tomorrow?",
        hint: "watch a movie/work/exercise",
        answer: "I will be watching a movie at 7 PM tomorrow.",
        type: "textInput",
      },
      {
        id: 10,
        text: "What is it that made you change your mind?",
        hint: "advice/discussion/situation",
        answer: "It was their advice that made me change my mind.",
        type: "textInput",
      },
      {
        id: 11,
        text: "Who is it that you trust the most?",
        hint: "friend/family/member",
        answer: "It’s my best friend who I trust the most.",
        type: "textInput",
      },
      {
        id: 12,
        text: "What will you have completed by the end of the year?",
        hint: "course/project/certification",
        answer:
          "I will have completed my English course by the end of the year.",
        type: "textInput",
      },
      {
        id: 13,
        text: "Where are you going to travel next summer?",
        hint: "Spain/Italy/Japan",
        answer: "I'm going to travel to Spain next summer.",
        type: "textInput",
      },
      {
        id: 14,
        text: "What will she be doing at this time tomorrow?",
        hint: "work/study/meeting",
        answer: "She will be working at this time tomorrow.",
        type: "textInput",
      },
      {
        id: 15,
        text: "When will you have learned all the grammar topics?",
        hint: "end of course/next month/soon",
        answer:
          "I will have learned all the grammar topics by the end of the course.",
        type: "textInput",
      },
      {
        id: 16,
        text: "What is it that makes you happy?",
        hint: "family/music/travel",
        answer: "It’s spending time with my family that makes me happy.",
        type: "textInput",
      },
    ],
  },
  // 5. Match Exercise
  {
    id: 300,
    type: "match",
    title: "Match the reported speech sentences",
    instructions:
      "Match the direct speech statements with their correct reported speech versions.",
    grammarPoints: ["Reported Speech", "Modals in the Past"],
    level: "B2",
    pairs: [
      {
        id: 1,
        left: '"I will call you later," she said.',
        right: "She said she would call me later.",
      },
      {
        id: 2,
        left: '"I can’t come to the meeting," he told me.',
        right: "He told me he couldn’t come to the meeting.",
      },
      {
        id: 3,
        left: '"You must finish the report by Friday," the manager said.',
        right: "The manager said we had to finish the report by Friday.",
      },
      {
        id: 4,
        left: '"I may go to the party," she said.',
        right: "She said she might go to the party.",
      },
      {
        id: 5,
        left: '"I should have studied more," he admitted.',
        right: "He admitted that he should have studied more.",
      },
      {
        id: 6,
        left: '"They might be late," she said.',
        right: "She said they might be late.",
      },
      {
        id: 7,
        left: '"You mustn’t tell anyone," she warned me.',
        right: "She warned me that I mustn’t tell anyone.",
      },
    ],
  },
  {
    id: 301,
    type: "match",
    title: "Match the sentences with their correct continuation",
    instructions: "Match the sentence beginnings with their logical endings.",
    grammarPoints: ["Conditional Sentences", "Inversions"],
    level: "B2",
    pairs: [
      {
        id: 1,
        left: "Had I known about the delay,",
        right: "I would have taken a different route.",
      },
      {
        id: 2,
        left: "If she had studied more,",
        right: "she would have passed the exam easily.",
      },
      {
        id: 3,
        left: "Were you to accept the job,",
        right: "you would have to relocate to London.",
      },
      {
        id: 4,
        left: "If only I had set an alarm,",
        right: "I wouldn’t have overslept.",
      },
      {
        id: 5,
        left: "Should you need any assistance,",
        right: "please do not hesitate to call me.",
      },
      {
        id: 6,
        left: "Had it not been for the rain,",
        right: "we would have gone hiking.",
      },
      {
        id: 7,
        left: "Were it not for her help,",
        right: "I wouldn’t have finished the project on time.",
      },
    ],
  },
];
