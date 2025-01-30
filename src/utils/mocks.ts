/* topics:
Tiempos Verbales:

Present Simple
Present Continuous
Past Simple
Past Continuous
Present Perfect
Present Perfect Continuous
Past Perfect
Past Perfect Continuous
Future Simple
Future Continuous
Future Perfect
Future Perfect Continuous
Modales y Expresiones:

Can, Could, May, Might
Shall, Should, Will, Would
Must, Have to, Need to
Ought to, Dare, Used to
Condicionales:

Zero Conditional
First Conditional
Second Conditional
Third Conditional
Mixed Conditionals
Estructuras Gramaticales:

Comparatives and Superlatives
Passive Voice
Reported Speech
Relative Clauses
Gerunds and Infinitives
Articles: A, An, The
Prepositions (of Time, Place, and Direction)
Vocabulario y Temas de Conversación:

Daily Routines
Travel and Tourism
Work and Careers
Health and Fitness
Technology and Innovation
Environment and Sustainability
Pronombres y Determinantes:

Subject and Object Pronouns
Possessive Pronouns
Reflexive Pronouns
Demonstratives (This, That, These, Those)
Conectores y Cohesión:

Linking Words (and, but, because, so, although)
Transition Words (however, moreover, nevertheless, furthermore)
 */

import { ComprehensionExercise } from "../models/exercise";

export const comprehensionExercises: ComprehensionExercise[] = [
  {
    id: 1,
    level: "A1",
    title: "The Life of Marie Curie",
    topics: ["Past Simple", "Past Perfect"],
    prosa:
      "Marie Curie was born in 1867 in Warsaw, Poland, to a family of educators who valued knowledge and perseverance. From an early age, she showed exceptional talent in mathematics and science, despite living in a time when opportunities for women were severely limited. After moving to Paris to continue her education, she faced immense challenges, including financial difficulties and adapting to a new culture. However, her determination never wavered. In 1898, together with her husband Pierre Curie, she discovered two new elements, radium and polonium. This groundbreaking work not only advanced the field of chemistry but also laid the foundation for future research in radioactivity. Over the years, her discoveries revolutionized medicine, particularly in cancer treatment. In 1903, Marie and Pierre received the Nobel Prize in Physics, making Marie the first woman to achieve such a distinction. After Pierre's tragic death in 1906, she continued their work, later winning a second Nobel Prize, this time in Chemistry, in 1911. She remains the only person to win Nobel Prizes in two different sciences, an achievement that highlights her unparalleled contribution to humanity. Marie's legacy inspires countless scientists to this day, reminding us of the power of perseverance and curiosity.",
    questions: [
      {
        id: 1,
        text: "What two elements did Marie Curie discover?",
        type: "textInput",
        answer: "Radium and Polonium",
      },
      {
        id: 2,
        text: "When was Marie Curie born?",
        type: "multipleChoice",
        options: ["1867", "1870", "1880", "1850"],
        answer: "1867",
      },
    ],
  },
  {
    id: 2,
    level: "A1",
    title: "A Letter to a Friend",
    topics: ["Present Perfect", "Future Simple"],
    prosa:
      "Dear Sarah,\nI hope this letter finds you well and in good spirits. It feels like ages since we last spoke, but I’ve been thinking about you a lot lately. Life has been a whirlwind of events on my end. I’ve just finished my first novel, a project I’ve been working on tirelessly for the past three years. Can you believe it? The publication date is set for next month, and I’m both nervous and excited. The journey has been nothing short of extraordinary, filled with late nights, countless edits, and moments of self-doubt. But it’s finally happening, and I can’t wait to share it with the world. I also wanted to let you know that I’ve planned a small celebration for the launch, and it would mean the world to me if you could be there. Your support has always been a source of strength for me. I’m looking forward to seeing you soon and catching up on everything. Let’s make some new memories together. Best, Emma",
    questions: [
      {
        id: 1,
        text: "What has Emma just finished?",
        type: "textInput",
        answer: "Her first novel",
      },
      {
        id: 2,
        text: "When will Emma's novel be published?",
        type: "multipleChoice",
        options: ["Next week", "Next month", "Next year", "Today"],
        answer: "Next month",
      },
    ],
  },
  {
    id: 3,
    level: "A1",
    title: "A Day at the Beach",
    topics: ["Past Continuous", "Past Perfect Continuous"],
    prosa:
      "It was a bright, sunny afternoon, and the beach was alive with activity. Children were running along the shore, their laughter mingling with the sound of waves crashing against the sand. Some families were enjoying picnics under colorful umbrellas, while others were building intricate sandcastles that seemed to defy gravity. In the distance, surfers were catching waves, their movements synchronized with the rhythm of the ocean. Earlier that morning, before the sun broke through the clouds, the beach had been eerily quiet. Many people had been waiting impatiently for the weather to clear, hoping to make the most of their weekend. The anticipation had been palpable as they watched the horizon, their plans hinging on the appearance of the sun. Now, as the day unfolded, the beach transformed into a vibrant tapestry of human activity, each moment a reminder of the simple joys that nature offers.",
    questions: [
      {
        id: 1,
        text: "What were people doing at the beach?",
        type: "textInput",
        answer: "Swimming and building sandcastles",
      },
      {
        id: 2,
        text: "What had people been waiting for earlier?",
        type: "multipleChoice",
        options: ["Rain", "The sun", "Food", "Waves"],
        answer: "The sun",
      },
    ],
  },
  {
    id: 4,
    level: "A1",

    title: "The Impact of Technology",
    topics: ["Present Simple", "Passive Voice"],
    prosa:
      "Technology is transforming the world in ways we could never have imagined. Every aspect of our daily lives is influenced by innovations that make tasks faster, easier, and more efficient. Smartphones, for instance, are used by billions of people to stay connected, whether through messages, video calls, or social media. Artificial intelligence is being developed to revolutionize industries such as healthcare and education. Doctors now rely on AI-driven tools to diagnose illnesses with unprecedented accuracy, while teachers use digital platforms to create personalized learning experiences for students. However, the rapid pace of technological advancement also raises important ethical questions. How should we manage data privacy? What role should automation play in the workforce? As we navigate these challenges, one thing remains clear: technology has the potential to improve lives on a global scale if used responsibly and thoughtfully.",
    questions: [
      {
        id: 1,
        text: "What is artificial intelligence being developed for?",
        type: "textInput",
        answer: "To improve healthcare and education",
      },
      {
        id: 2,
        text: "How do people stay connected?",
        type: "multipleChoice",
        options: ["Books", "Television", "Smartphones", "Letters"],
        answer: "Smartphones",
      },
    ],
  },
  {
    id: 5,
    level: "A1",

    title: "The Great Debate",
    topics: ["Modals", "Conditionals"],
    prosa:
      "Should governments invest more in renewable energy? This question lies at the heart of one of the most pressing issues of our time: climate change. Many experts argue that immediate action must be taken to reduce carbon emissions and shift away from fossil fuels. If we don’t act now, the consequences for our planet could be catastrophic. Rising sea levels, extreme weather events, and loss of biodiversity are just a few of the potential outcomes. On the other hand, transitioning to renewable energy sources such as solar and wind power requires significant investment and infrastructure changes. Governments must weigh the short-term costs against the long-term benefits. If they prioritize sustainability, future generations will inherit a cleaner, healthier planet. However, if these changes are delayed, the damage could become irreversible, leaving humanity to face a grim future. The choice is ours to make, and the time to act is now.",
    questions: [
      {
        id: 1,
        text: "What do experts argue governments must do?",
        type: "textInput",
        answer: "Invest more in renewable energy",
      },
      {
        id: 2,
        text: "What will happen if we don’t act now?",
        type: "multipleChoice",
        options: [
          "The planet will recover",
          "The damage will be irreversible",
          "Carbon emissions will stop",
          "Nothing will happen",
        ],
        answer: "The damage will be irreversible",
      },
    ],
  },
  {
    id: 6,
    level: "B2",
    title: "An Unexpected Journey",
    topics: ["Mixed Conditionals", "Past Perfect"],
    prosa: `If John had taken the earlier train, he would have avoided the accident. But as life would have it, his usual train was delayed, and he decided to drive instead. The journey began smoothly, with John humming to his favorite tunes on the radio. The sky was clear, and everything seemed perfect for his drive to the city. However, as he approached the highway, traffic came to a standstill. Unbeknownst to John, an accident had occurred just a few miles ahead, and vehicles were backed up for hours.

John had planned his day meticulously. He had been preparing for the meeting for weeks, rehearsing his presentation and perfecting every detail. It was an opportunity to pitch an idea that could revolutionize the company's operations. But with every passing minute spent in traffic, his hopes began to dwindle. He called his assistant to inform the team, but the meeting could not be postponed.

By the time John arrived at the office, the meeting had concluded, and the investors had left. His manager, though sympathetic, expressed disappointment. John couldn't help but reflect on the choices he had made that morning. If he hadn't hit the snooze button, if he had checked the train schedule earlier, and if he had trusted his instincts about public transportation, perhaps the day would have unfolded differently.

The experience left John pondering the unpredictability of life. He learned the hard way that small decisions could have monumental consequences, shaping not just his career but his perspective on planning and adaptability.`,
    questions: [
      {
        id: 1,
        text: "What would John have avoided if he had taken the earlier train?",
        type: "textInput",
        answer: "The accident.",
      },
      {
        id: 2,
        text: "Why was traffic backed up on the highway?",
        type: "textInput",
        answer: "An accident had occurred just a few miles ahead.",
      },
      {
        id: 3,
        text: "What had John been preparing for weeks?",
        type: "textInput",
        answer: "A meeting to pitch an idea to investors.",
      },
      {
        id: 4,
        text: "What did John call his assistant for?",
        type: "multipleChoice",
        options: [
          "To cancel the meeting",
          "To inform the team about the delay",
          "To reschedule the meeting",
          "To ask for directions",
        ],
        answer: "To inform the team about the delay.",
      },
      {
        id: 5,
        text: "How did John feel after missing the meeting?",
        type: "textInput",
        answer: "Disappointed and reflective about his choices.",
      },
      {
        id: 6,
        text: "What lesson did John learn from this experience?",
        type: "textInput",
        answer:
          "Small decisions can have monumental consequences, shaping life and career.",
      },
      {
        id: 7,
        text: "How might John’s day have been different if he trusted public transportation?",
        type: "textInput",
        answer:
          "He might have avoided the accident and made it to the meeting on time.",
      },
    ],
  },
  {
    id: 7,
    level: "B1",
    title: "A Cultural Festival",
    topics: ["Present Perfect", "Comparatives"],
    prosa: `The Lunar New Year has always been more festive than most other celebrations. It marks the beginning of a new year according to the lunar calendar, and its traditions span centuries. In many Asian cultures, this celebration is deeply rooted in family, gratitude, and renewal. Families gather to clean their homes before the festivities begin, a symbolic act meant to sweep away bad luck and welcome good fortune.

Red decorations and lanterns are hung everywhere, and children eagerly anticipate receiving red envelopes filled with money. The envelopes, a sign of luck and prosperity, are cherished by the younger generation. Traditional dishes, such as dumplings, sticky rice cakes, and fish, are served, each with its symbolic meaning of wealth, unity, or abundance.

The festival is not only about food and decorations; it’s also about reflection. People often take this time to visit elders and express gratitude for their guidance and support. Fireworks light up the sky to ward off evil spirits and welcome the new year with a bang. In cities like Beijing, Singapore, and Hanoi, grand parades take place, with lion dances and cultural performances that mesmerize the crowd.

Comparatively, Lunar New Year celebrations are more elaborate and culturally rich than other public holidays. While Christmas in the West often emphasizes gift-giving, the Lunar New Year focuses on relationships and the collective well-being of families and communities.`,
    questions: [
      {
        id: 1,
        text: "What is the symbolic purpose of cleaning homes before the festival?",
        type: "textInput",
        answer: "To sweep away bad luck and welcome good fortune.",
      },
      {
        id: 2,
        text: "Why are red envelopes significant during the Lunar New Year?",
        type: "multipleChoice",
        options: [
          "To decorate the house",
          "To represent luck and prosperity",
          "To pay for food",
          "To write messages",
        ],
        answer: "To represent luck and prosperity.",
      },
      {
        id: 3,
        text: "Name two traditional dishes served during the Lunar New Year.",
        type: "textInput",
        answer: "Dumplings and sticky rice cakes.",
      },
      {
        id: 4,
        text: "How is the Lunar New Year different from Christmas?",
        type: "textInput",
        answer:
          "It focuses on relationships and collective well-being rather than gift-giving.",
      },
      {
        id: 5,
        text: "What do people often do to express gratitude during the festival?",
        type: "textInput",
        answer: "They visit elders and express gratitude for their guidance.",
      },
      {
        id: 6,
        text: "Why are fireworks important in this celebration?",
        type: "textInput",
        answer:
          "To ward off evil spirits and welcome the new year with a bang.",
      },
      {
        id: 7,
        text: "Which cities are mentioned for their grand parades?",
        type: "textInput",
        answer: "Beijing, Singapore, and Hanoi.",
      },
    ],
  },
  {
    id: 8,
    level: "C1",
    title: "Global Warming",
    topics: ["news", "reportedSpeech", "passiveVoice"],
    prosa:
      "Scientists have reported that global temperatures are rising faster than expected, and the consequences of this trend are becoming increasingly visible. From devastating wildfires in Australia to historic floods in Europe, the impacts of climate change are no longer a distant concern—they are happening now. Experts have emphasized that immediate action is required to mitigate the effects of global warming. Policies are being implemented worldwide to reduce greenhouse gas emissions, but progress is slow and uneven.\n\nGovernments in industrialized nations have pledged to achieve net-zero emissions by 2050. However, critics argue that these goals are insufficient given the current rate of warming. Developing countries, which are often the most vulnerable to climate-related disasters, have called for greater support in adapting to the changing environment. Financial aid, technology transfer, and knowledge-sharing are essential for these nations to build resilience.\n\nIn recent conferences, climate activists have made headlines by demanding more accountability from world leaders. Greta Thunberg, a prominent youth activist, stated that 'leaders are not doing enough,' a sentiment echoed by millions of young people around the globe. These activists argue that fossil fuel industries must transition to renewable energy sources more rapidly.\n\nMeanwhile, scientists have observed significant changes in ecosystems. Coral reefs are bleaching at unprecedented rates due to rising ocean temperatures, and Arctic ice is melting at alarming levels. These changes are not only endangering wildlife but also threatening human livelihoods. Coastal communities are particularly at risk as sea levels rise, forcing some to abandon their homes altogether.\n\nReports from the United Nations suggest that every fraction of a degree matters. Limiting warming to 1.5 degrees Celsius above pre-industrial levels could prevent the worst impacts of climate change. But to achieve this, global cooperation and individual actions are vital. Simple measures, such as reducing waste, conserving energy, and planting trees, can collectively make a significant difference. The question remains: will humanity act in time to reverse the damage, or will future generations bear the brunt of our inaction?",
    questions: [
      {
        id: 1,
        text: "What have scientists reported about global temperatures?",
        type: "textInput",
        answer: "They are rising faster than expected.",
        status: "Not Answered",
      },
      {
        id: 2,
        text: "What examples of climate change impacts are mentioned?",
        type: "multipleChoice",
        options: [
          "Wildfires and floods",
          "Earthquakes and tsunamis",
          "Hurricanes and droughts",
          "Volcanoes and landslides",
        ],
        answer: "Wildfires and floods",
        status: "Not Answered",
      },
      {
        id: 3,
        text: "What have governments in industrialized nations pledged to achieve?",
        type: "textInput",
        answer: "Net-zero emissions by 2050.",
        status: "Not Answered",
      },
      {
        id: 4,
        text: "What did Greta Thunberg state about world leaders?",
        type: "textInput",
        status: "Not Answered",

        answer: "That they are not doing enough to address climate change.",
      },
      {
        id: 5,
        text: "Why are coral reefs bleaching at unprecedented rates?",
        type: "textInput",
        answer: "Due to rising ocean temperatures.",
        status: "Not Answered",
      },
      {
        id: 6,
        text: "What actions can individuals take to help combat climate change?",
        type: "multipleChoice",
        options: [
          "Reduce waste, conserve energy, and plant trees",
          "Drive more frequently and use more plastic",
          "Focus only on industrial emissions",
          "Avoid renewable energy sources",
        ],
        status: "Not Answered",
        answer: "Reduce waste, conserve energy, and plant trees",
      },
      {
        id: 7,
        text: "What is the importance of limiting warming to 1.5 degrees Celsius?",
        type: "textInput",
        status: "Not Answered",
        answer: "It could prevent the worst impacts of climate change.",
      },
      {
        id: 8,
        text: "What challenges do developing countries face in adapting to climate change?",
        type: "textInput",
        status: "Not Answered",
        answer:
          "They need financial aid, technology transfer, and knowledge-sharing to build resilience.",
      },
    ],
  },
  {
    id: 10,
    level: "B2",
    title: "Healthy Habits",
    topics: ["imperatives", "presentSimple"],
    prosa: `Drink plenty of water, eat a balanced diet, and get regular exercise. These habits keep your body and mind healthy.`,
    questions: [
      {
        id: 1,
        text: "What habits are mentioned?",
        type: "textInput",
        status: "Not Answered",
        answer: "Drink water, eat a balanced diet, and exercise",
      },
      {
        id: 2,
        text: "What do these habits help with?",
        type: "multipleChoice",
        options: [
          "Improving your career",
          "Keeping your body and mind healthy",
          "Making friends",
          "Sleeping better",
        ],
        status: "Not Answered",
        answer: "Keeping your body and mind healthy",
      },
    ],
  },
];
