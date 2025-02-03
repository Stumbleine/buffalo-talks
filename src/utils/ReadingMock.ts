import { ComprehensionExercise } from "../models/exercise";

export const comprehensionExercises: ComprehensionExercise[] = [
  {
    id: 1,
    level: "A1",
    title: "The Life of Marie Curie",
    topics: ["Past Simple", "Past Perfect"],
    prosa: `Marie Curie was born in 1867 in Warsaw, Poland, to a family of educators who valued knowledge and perseverance. From an early age, she showed exceptional talent in mathematics and science, despite living in a time when opportunities for women were severely limited. After moving to Paris to continue her education, she faced immense challenges, including financial difficulties and adapting to a new culture. 
    \nHowever, her determination never wavered. In 1898, together with her husband Pierre Curie, she discovered two new elements, radium and polonium. This groundbreaking work not only advanced the field of chemistry but also laid the foundation for future research in radioactivity. 
    \nOver the years, her discoveries revolutionized medicine, particularly in cancer treatment. In 1903, Marie and Pierre received the Nobel Prize in Physics, making Marie the first woman to achieve such a distinction. After Pierre's tragic death in 1906, she continued their work, later winning a second Nobel Prize, this time in Chemistry, in 1911. 
    \nShe remains the only person to win Nobel Prizes in two different sciences, an achievement that highlights her unparalleled contribution to humanity. Marie's legacy inspires countless scientists to this day, reminding us of the power of perseverance and curiosity.`,
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
    prosa: `Dear Sarah,
    \nI hope this letter finds you well and in good spirits. It feels like ages since we last spoke, but I’ve been thinking about you a lot lately. Life has been a whirlwind of events on my end. I’ve just finished my first novel, a project I’ve been working on tirelessly for the past three years. Can you believe it? The publication date is set for next month, and I’m both nervous and excited. 
    \nThe journey has been nothing short of extraordinary, filled with late nights, countless edits, and moments of self-doubt. But it’s finally happening, and I can’t wait to share it with the world. I also wanted to let you know that I’ve planned a small celebration for the launch, and it would mean the world to me if you could be there. Your support has always been a source of strength for me. I’m looking forward to seeing you soon and catching up on everything. Let’s make some new memories together. Best, Emma`,
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
    prosa: `It was a bright, sunny afternoon, and the beach was alive with activity. Children were running along the shore, their laughter mingling with the sound of waves crashing against the sand. 
    \nSome families were enjoying picnics under colorful umbrellas, while others were building intricate sandcastles that seemed to defy gravity. In the distance, surfers were catching waves, their movements synchronized with the rhythm of the ocean. Earlier that morning, before the sun broke through the clouds, the beach had been eerily quiet. Many people had been waiting impatiently for the weather to clear, hoping to make the most of their weekend. 
    \nThe anticipation had been palpable as they watched the horizon, their plans hinging on the appearance of the sun. Now, as the day unfolded, the beach transformed into a vibrant tapestry of human activity, each moment a reminder of the simple joys that nature offers.`,
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
    prosa: `Technology is transforming the world in ways we could never have imagined. Every aspect of our daily lives is influenced by innovations that make tasks faster, easier, and more efficient. Smartphones, for instance, are used by billions of people to stay connected, whether through messages, video calls, or social media. 
      \nArtificial intelligence is being developed to revolutionize industries such as healthcare and education. Doctors now rely on AI-driven tools to diagnose illnesses with unprecedented accuracy, while teachers use digital platforms to create personalized learning experiences for students. 
      \nHowever, the rapid pace of technological advancement also raises important ethical questions. How should we manage data privacy? What role should automation play in the workforce? As we navigate these challenges, one thing remains clear: technology has the potential to improve lives on a global scale if used responsibly and thoughtfully.`,
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
    prosa: `Should governments invest more in renewable energy? This question lies at the heart of one of the most pressing issues of our time: climate change. Many experts argue that immediate action must be taken to reduce carbon emissions and shift away from fossil fuels. If we don’t act now, the consequences for our planet could be catastrophic. Rising sea levels, extreme weather events, and loss of biodiversity are just a few of the potential outcomes.
    \nOn the other hand, transitioning to renewable energy sources such as solar and wind power requires significant investment and infrastructure changes. Governments must weigh the short-term costs against the long-term benefits. If they prioritize sustainability, future generations will inherit a cleaner, healthier planet. However, if these changes are delayed, the damage could become irreversible, leaving humanity to face a grim future. The choice is ours to make, and the time to act is now.`,
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
\nJohn had planned his day meticulously. He had been preparing for the meeting for weeks, rehearsing his presentation and perfecting every detail. It was an opportunity to pitch an idea that could revolutionize the company's operations. But with every passing minute spent in traffic, his hopes began to dwindle. He called his assistant to inform the team, but the meeting could not be postponed.
\nBy the time John arrived at the office, the meeting had concluded, and the investors had left. His manager, though sympathetic, expressed disappointment. John couldn't help but reflect on the choices he had made that morning. If he hadn't hit the snooze button, if he had checked the train schedule earlier, and if he had trusted his instincts about public transportation, perhaps the day would have unfolded differently.
\nThe experience left John pondering the unpredictability of life. He learned the hard way that small decisions could have monumental consequences, shaping not just his career but his perspective on planning and adaptability.`,
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
    prosa: `Scientists have reported that global temperatures are rising faster than expected, and the consequences of this trend are becoming increasingly visible. From devastating wildfires in Australia to historic floods in Europe, the impacts of climate change are no longer a distant concern—they are happening now. Experts have emphasized that immediate action is required to mitigate the effects of global warming. Policies are being implemented worldwide to reduce greenhouse gas emissions, but progress is slow and uneven.
    \nGovernments in industrialized nations have pledged to achieve net-zero emissions by 2050. However, critics argue that these goals are insufficient given the current rate of warming. Developing countries, which are often the most vulnerable to climate-related disasters, have called for greater support in adapting to the changing environment. Financial aid, technology transfer, and knowledge-sharing are essential for these nations to build resilience.
    \nIn recent conferences, climate activists have made headlines by demanding more accountability from world leaders. Greta Thunberg, a prominent youth activist, stated that 'leaders are not doing enough,' a sentiment echoed by millions of young people around the globe. These activists argue that fossil fuel industries must transition to renewable energy sources more rapidly.
    \nMeanwhile, scientists have observed significant changes in ecosystems. Coral reefs are bleaching at unprecedented rates due to rising ocean temperatures, and Arctic ice is melting at alarming levels. These changes are not only endangering wildlife but also threatening human livelihoods. Coastal communities are particularly at risk as sea levels rise, forcing some to abandon their homes altogether.
    \nReports from the United Nations suggest that every fraction of a degree matters. Limiting warming to 1.5 degrees Celsius above pre-industrial levels could prevent the worst impacts of climate change. But to achieve this, global cooperation and individual actions are vital. Simple measures, such as reducing waste, conserving energy, and planting trees, can collectively make a significant difference. The question remains: will humanity act in time to reverse the damage, or will future generations bear the brunt of our inaction?`,
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
    title: "The Mystery of the Lost City",
    topics: ["Past Simple", "Past Continuous", "Vocabulary"],
    prosa: `In the heart of the Amazon rainforest, a team of archaeologists made a discovery that would change history forever. Deep within the dense jungle, hidden beneath layers of vegetation, they found the remains of an ancient city. The city, believed to be over 1,000 years old, was once a thriving center of culture and trade. The team spent months excavating the site, uncovering temples, houses, and even a complex system of roads. 

The most fascinating discovery was a series of inscriptions on the walls of the main temple. These inscriptions told the story of the city's rise and fall. According to the texts, the city was once ruled by a powerful king who brought prosperity to his people. However, a series of natural disasters, including earthquakes and floods, led to the city's decline. The final blow came when a mysterious disease swept through the population, forcing the survivors to abandon their home.

The archaeologists also found evidence of advanced technology, such as intricate irrigation systems and tools made from rare metals. These findings suggest that the city's inhabitants were highly skilled engineers and craftsmen. Despite their achievements, the city was eventually forgotten, swallowed by the jungle and lost to time.

The discovery of this lost city has sparked a debate among historians. Some believe it could rewrite the history of the Amazon, proving that the region was home to advanced civilizations long before the arrival of Europeans. Others argue that more research is needed to fully understand the significance of the findings. One thing is certain: the mystery of the lost city will continue to captivate the world for years to come.`,
    questions: [
      {
        id: 1,
        text: "What did the archaeologists discover in the Amazon rainforest?",
        type: "textInput",
        status: "Not Answered",
        answer: "The remains of an ancient city",
      },
      {
        id: 2,
        text: "How old is the city believed to be?",
        type: "multipleChoice",
        options: ["500 years", "1,000 years", "2,000 years", "5,000 years"],
        status: "Not Answered",
        answer: "1,000 years",
      },
      {
        id: 3,
        text: "What was the most fascinating discovery in the city?",
        type: "textInput",
        status: "Not Answered",
        answer: "A series of inscriptions on the walls of the main temple",
      },
      {
        id: 4,
        text: "What caused the decline of the city?",
        type: "multipleChoice",
        options: [
          "War with neighboring tribes",
          "Natural disasters and a mysterious disease",
          "Invasion by Europeans",
          "Economic collapse",
        ],
        status: "Not Answered",
        answer: "Natural disasters and a mysterious disease",
      },
      {
        id: 5,
        text: "What evidence of advanced technology was found in the city?",
        type: "textInput",
        status: "Not Answered",
        answer: "Intricate irrigation systems and tools made from rare metals",
      },
      {
        id: 6,
        text: "What does the discovery of the city suggest about the Amazon's history?",
        type: "multipleChoice",
        options: [
          "It was always a sparsely populated region",
          "It was home to advanced civilizations before Europeans arrived",
          "It was uninhabited until the 19th century",
          "It was primarily used for agriculture",
        ],
        status: "Not Answered",
        answer:
          "It was home to advanced civilizations before Europeans arrived",
      },
      {
        id: 7,
        text: "What is the meaning of the word 'intricate' as used in the text?",
        type: "multipleChoice",
        options: ["Simple", "Complex", "Broken", "Ancient"],
        status: "Not Answered",
        answer: "Complex",
      },
      {
        id: 8,
        text: "What is the main purpose of the text?",
        type: "multipleChoice",
        options: [
          "To describe a recent archaeological discovery",
          "To argue against the importance of the Amazon",
          "To promote tourism in the Amazon",
          "To explain the history of European colonization",
        ],
        status: "Not Answered",
        answer: "To describe a recent archaeological discovery",
      },
      {
        id: 9,
        text: "What is the tone of the text?",
        type: "multipleChoice",
        options: ["Humorous", "Critical", "Informative", "Sarcastic"],
        status: "Not Answered",
        answer: "Informative",
      },
      {
        id: 10,
        text: "What can be inferred about the city's inhabitants?",
        type: "textInput",
        status: "Not Answered",
        answer: "They were highly skilled engineers and craftsmen",
      },
    ],
  },
  {
    id: 11,
    level: "B2",
    title: "The Future of Space Exploration",
    topics: ["Future Tenses", "Conditionals", "Vocabulary"],
    prosa: `Space exploration has always been a fascinating subject for scientists and dreamers alike. In recent years, advancements in technology have brought us closer than ever to the possibility of colonizing other planets. NASA, along with private companies like SpaceX, is working tirelessly to develop the necessary tools and infrastructure for long-term space travel.

One of the most ambitious projects is the plan to send humans to Mars. This mission, expected to take place within the next decade, involves building a sustainable habitat on the Red Planet. Scientists are currently testing various technologies, such as 3D-printed buildings and advanced life-support systems, to ensure the survival of astronauts in the harsh Martian environment.

However, the challenges are immense. Mars has a thin atmosphere, extreme temperatures, and high levels of radiation. To overcome these obstacles, researchers are developing innovative solutions, such as radiation shields and genetically modified crops that can grow in Martian soil. Despite the difficulties, the potential benefits of colonizing Mars are enormous. It could provide a backup plan for humanity in case of a global catastrophe and open up new opportunities for scientific discovery.

The future of space exploration also includes missions to other celestial bodies, such as Europa, one of Jupiter's moons. Europa is believed to have a vast ocean beneath its icy surface, making it a prime candidate for the search for extraterrestrial life. As we continue to explore the cosmos, one thing is certain: the next few decades will be an exciting time for space enthusiasts.`,
    questions: [
      {
        id: 1,
        text: "What is one of the most ambitious projects in space exploration?",
        type: "textInput",
        hint: "Think about the planet often called the 'Red Planet'.",
        status: "Not Answered",
        answer: "Sending humans to Mars",
      },
      {
        id: 2,
        text: "What technologies are being tested for the Mars mission?",
        type: "multipleChoice",
        options: [
          "Solar-powered cars",
          "3D-printed buildings and advanced life-support systems",
          "Flying drones",
          "Underwater habitats",
        ],
        status: "Not Answered",
        answer: "3D-printed buildings and advanced life-support systems",
      },
      {
        id: 3,
        text: "What are some challenges of living on Mars?",
        type: "textInput",
        hint: "Consider the environment of Mars.",
        status: "Not Answered",
        answer:
          "Thin atmosphere, extreme temperatures, and high radiation levels",
      },
      {
        id: 4,
        text: "What is one potential benefit of colonizing Mars?",
        type: "multipleChoice",
        options: [
          "Creating a new tourist destination",
          "Providing a backup plan for humanity",
          "Discovering new species of plants",
          "Building a new economy",
        ],
        status: "Not Answered",
        answer: "Providing a backup plan for humanity",
      },
      {
        id: 5,
        text: "What is Europa, and why is it significant?",
        type: "textInput",
        hint: "It's one of Jupiter's moons and has something beneath its surface.",
        status: "Not Answered",
        answer:
          "A moon of Jupiter with a vast ocean beneath its icy surface, potentially harboring extraterrestrial life",
      },
      {
        id: 6,
        text: "What does the word 'ambitious' mean in the context of the text?",
        type: "multipleChoice",
        options: [
          "Simple",
          "Challenging and requiring great effort",
          "Unimportant",
          "Expensive",
        ],
        status: "Not Answered",
        answer: "Challenging and requiring great effort",
      },
      {
        id: 7,
        text: "What is the main purpose of the text?",
        type: "multipleChoice",
        options: [
          "To criticize space exploration",
          "To describe current and future space exploration projects",
          "To promote tourism in space",
          "To explain the history of NASA",
        ],
        status: "Not Answered",
        answer: "To describe current and future space exploration projects",
      },
      {
        id: 8,
        text: "What is the tone of the text?",
        type: "multipleChoice",
        options: ["Pessimistic", "Humorous", "Informative", "Sarcastic"],
        status: "Not Answered",
        answer: "Informative",
      },
      {
        id: 9,
        text: "What can be inferred about the future of space exploration?",
        type: "textInput",
        hint: "Think about the possibilities mentioned in the text.",
        status: "Not Answered",
        answer:
          "It will be an exciting time with many new discoveries and advancements",
      },
      {
        id: 10,
        text: "What role do private companies play in space exploration?",
        type: "multipleChoice",
        options: [
          "They are not involved",
          "They are competing with NASA",
          "They are working alongside NASA to develop technologies",
          "They are focusing only on tourism",
        ],
        status: "Not Answered",
        answer: "They are working alongside NASA to develop technologies",
      },
    ],
  },
  {
    id: 12,
    level: "B2",
    title: "The Impact of Climate Change",
    topics: ["Present Perfect", "Passive Voice", "Vocabulary"],
    prosa: `Climate change is one of the most pressing issues facing humanity today. Over the past century, the Earth's average temperature has risen significantly due to the increase in greenhouse gases, such as carbon dioxide and methane. These gases trap heat in the atmosphere, leading to a phenomenon known as global warming.

The effects of climate change are already being felt around the world. Rising sea levels are threatening coastal cities, while extreme weather events, such as hurricanes and droughts, are becoming more frequent and severe. In addition, many species are struggling to adapt to the changing environment, leading to a loss of biodiversity.

One of the most concerning aspects of climate change is its impact on food production. Changes in temperature and rainfall patterns are affecting crop yields, particularly in developing countries. This has led to food shortages and increased prices, exacerbating poverty and inequality. Scientists warn that if urgent action is not taken, the situation will only worsen in the coming decades.

Efforts to combat climate change include reducing emissions, transitioning to renewable energy sources, and protecting natural ecosystems. However, these measures require global cooperation and significant investment. While progress has been made, much more needs to be done to ensure a sustainable future for generations to come.`,
    questions: [
      {
        id: 1,
        text: "What is the main cause of global warming?",
        type: "textInput",
        hint: "Think about gases that trap heat in the atmosphere.",
        status: "Not Answered",
        answer:
          "The increase in greenhouse gases, such as carbon dioxide and methane",
      },
      {
        id: 2,
        text: "What are some effects of climate change mentioned in the text?",
        type: "multipleChoice",
        options: [
          "Decreased sea levels",
          "More frequent and severe extreme weather events",
          "Increased biodiversity",
          "Lower food prices",
        ],
        status: "Not Answered",
        answer: "More frequent and severe extreme weather events",
      },
      {
        id: 3,
        text: "How is climate change affecting food production?",
        type: "textInput",
        hint: "Consider changes in temperature and rainfall patterns.",
        status: "Not Answered",
        answer:
          "Changes in temperature and rainfall patterns are affecting crop yields",
      },
      {
        id: 4,
        text: "What is one way to combat climate change?",
        type: "multipleChoice",
        options: [
          "Increasing the use of fossil fuels",
          "Reducing emissions and transitioning to renewable energy",
          "Ignoring the problem",
          "Cutting down forests",
        ],
        status: "Not Answered",
        answer: "Reducing emissions and transitioning to renewable energy",
      },
      {
        id: 5,
        text: "What does the word 'exacerbating' mean in the context of the text?",
        type: "multipleChoice",
        options: ["Improving", "Worsening", "Ignoring", "Solving"],
        status: "Not Answered",
        answer: "Worsening",
      },
      {
        id: 6,
        text: "What is the main purpose of the text?",
        type: "multipleChoice",
        options: [
          "To deny the existence of climate change",
          "To describe the effects and solutions of climate change",
          "To promote fossil fuels",
          "To criticize renewable energy",
        ],
        status: "Not Answered",
        answer: "To describe the effects and solutions of climate change",
      },
      {
        id: 7,
        text: "What is the tone of the text?",
        type: "multipleChoice",
        options: ["Optimistic", "Humorous", "Informative", "Sarcastic"],
        status: "Not Answered",
        answer: "Informative",
      },
      {
        id: 8,
        text: "What can be inferred about the future if no action is taken?",
        type: "textInput",
        hint: "Think about the consequences mentioned in the text.",
        status: "Not Answered",
        answer: "The situation will worsen, leading to more severe impacts",
      },
      {
        id: 9,
        text: "What is one challenge in combating climate change?",
        type: "multipleChoice",
        options: [
          "Lack of scientific knowledge",
          "Global cooperation and significant investment",
          "Too many renewable energy sources",
          "Decreasing emissions too quickly",
        ],
        status: "Not Answered",
        answer: "Global cooperation and significant investment",
      },
      {
        id: 10,
        text: "What is the role of natural ecosystems in combating climate change?",
        type: "textInput",
        hint: "Think about how ecosystems can help reduce the impact of climate change.",
        status: "Not Answered",
        answer:
          "Protecting natural ecosystems helps combat climate change by absorbing carbon dioxide and maintaining biodiversity",
      },
    ],
  },
  {
    id: 13,
    level: "C1",
    title: "The Mysterious Island",
    topics: ["Vocabulary", "Inference", "Comprehension"],
    prosa:
      "The storm had raged for three nights, and the survivors clung to the remnants of their shattered vessel. The island, obscured by mist, emerged as the sun timidly rose. It was no paradise—its jagged cliffs loomed ominously, and the dense jungle whispered secrets in the wind. Hunger gnawed at their resolve, but the most pressing question remained: were they alone? A distant rustle, a shadow in the trees, and the undeniable sensation of being watched confirmed their fears.",
    questions: [
      {
        id: 1,
        text: "What does the word 'ominously' suggest about the cliffs?",
        type: "multipleChoice",
        options: [
          "They are welcoming and safe.",
          "They appear dangerous and threatening.",
          "They are covered in lush vegetation.",
          "They provide shelter from the storm.",
        ],
        status: "Not Answered",
        answer: "They appear dangerous and threatening.",
      },
      {
        id: 2,
        text: "What is the primary concern of the survivors?",
        type: "multipleChoice",
        options: [
          "Finding food.",
          "Escaping the island.",
          "Discovering if they are alone.",
          "Building a shelter.",
        ],
        status: "Not Answered",
        answer: "Discovering if they are alone.",
      },
      {
        id: 3,
        text: "Which literary technique is used in 'the dense jungle whispered secrets in the wind'?",
        type: "multipleChoice",
        options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
        status: "Not Answered",
        answer: "Personification",
      },
      {
        id: 4,
        text: "What does the phrase 'hunger gnawed at their resolve' imply?",
        type: "textInput",
        status: "Not Answered",
        answer: "Hunger was weakening their determination.",
      },
    ],
  },
  {
    id: 14,
    level: "C1",
    title: "A Distant Echo",
    topics: ["Inference", "Character Analysis", "Comprehension"],
    prosa:
      "She stood at the threshold of the abandoned house, the air thick with the scent of decay and forgotten memories. Dust motes danced in the dim light filtering through the broken window. Every step she took echoed in the silence, as if the walls themselves whispered tales of the past. She reached the grand piano, its keys yellowed with time, and traced a hesitant finger over them. A single note lingered in the air, a distant echo of something long lost. But was it the music, or the past itself, calling her back?",
    questions: [
      {
        id: 1,
        text: "What is the mood of the passage?",
        type: "multipleChoice",
        options: [
          "Cheerful and nostalgic",
          "Mysterious and melancholic",
          "Hopeful and uplifting",
          "Exciting and adventurous",
        ],
        status: "Not Answered",
        answer: "Mysterious and melancholic",
      },
      {
        id: 2,
        text: "What does the 'distant echo' symbolize?",
        type: "textInput",
        status: "Not Answered",
        answer: "It symbolizes the lingering presence of the past.",
      },
      {
        id: 3,
        text: "Which of the following best describes the protagonist's emotions?",
        type: "multipleChoice",
        options: [
          "Excitement and anticipation",
          "Fear and anxiety",
          "Curiosity and nostalgia",
          "Indifference and detachment",
        ],
        status: "Not Answered",
        answer: "Curiosity and nostalgia",
      },
      {
        id: 4,
        text: "What does the phrase 'whispered tales of the past' suggest?",
        type: "textInput",
        status: "Not Answered",
        answer:
          "It suggests that the house holds memories or secrets from the past.",
      },
    ],
  },
];
