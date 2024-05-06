//zoom events for layer navigation
window.addEventListener("wheel", (e) => {
    console.log("wheel");
    e.preventDefault();

    // Zooming out, leads to layer 2
    if (e.deltaX < 0 || e.deltaY < 0) {
        window.location.href = 'layer2.html';
    }
}, { passive: false });

/*Define content for each box upon clicking, CHANGE EXPLANATION TEXTS HERE*/
var boxContents = {
    selection: {
        title: "Selection", 
        explanation: 
            "Astronaut selection was originally carried out by NASA and the Soviet Space Program, and now Japan, China, Russia, Brazil, and countries in Europe have selected their own astronauts <span style='color:gray'>[NASA 2024]</span>. Due to historical and sociopolitical factors, only male candidates were originally allowed to become astronauts, with one exception in the early 1960s (Valentina Tereshkova, USSR). Female candidates were accepted regularly in the 1980s, although still comprise a minority of the program [Steimle and Norberg 2013]. <br><br> Selection criteria include educational/professional qualifications and candidates must be able to pass the astronaut physical, medical, and psychological exams. More restrictively, astronaut candidates from most programs must exhibit mental and personal capabilities which are selected for and evaluated by a panel of experts <span style='color:gray'>[Steimle and Norberg 2013]</span>. <br><br><br> <span style='color:gray'>NASA. (2024) 'Becoming an astronaut: Frequently asked questions,' NASA.gov. Last updated March 5, 2024. Accessed March 7, 2024. https://www.nasa.gov/humans-in-space/becoming-an-astronaut-frequently-asked-questions/<br>Steimle, H., Norberg, C. (2013). Astronaut selection and training. In: Norberg, C. (eds) Human Spaceflight and Exploration. Springer Praxis Books. Springer, Berlin, Heidelberg. https://doi.org/10.1007/978-3-642-23725-6_7</span>"
    },
    distance_from_earth:{
        title: "Distance From Earth",
        explanation: "In general applications, distance from home is dependent on the changing definition of home, which has been hypothesized to generally fall into categories of physical structures, territories, self and self-identity, and social-cultural units <span style='color:gray'>[Hayward 1975][Case 1996]</span>. Therefore, “home” may be multiple, constructed, and changing as one leaves and creates new homes. Distance from home can be considered as difficulties due to physical constraints (distance, time), economic (unemployment, cost), social-cultural (values), or political (visas, policies, asylum, deportation) <span style='color:gray'>[Angulo 2010]</span>. Space-specific considerations include orbit alignment, mission impacts, and resource limitations (food, water, fuel). <br><br><br> <span style='color:gray'>Hayward, G. (1975). Home as an environmental and psychological concept. Landscape, 20, 2–9. <br>Case, D. (1996). CONTRIBUTIONS OF JOURNEYS AWAY TO THE DEFINITION OF HOME: AN EMPIRICAL STUDY OF A DIALECTICAL PROCESS. Journal of Environmental Psychology, 16(1), 1–15. https://doi.org/10.1006/jevp.1996.0001. <br> Angulo, M. I. (2010). WHEN HOME IS NO LONGER THERE: RETURN MIGRATION IN A TIME OF CRISIS. Migration, 48. </span>"
    },
    mission_duration:{
        title: "Mission Duration",
        explanation: "Space mission durations vary, with the longest space mission being on the order of 1 year (Valeri Polyakov on Mir - 437 days; Frank Rubio on ISS - 371 days; Mark Vande Hei on ISS - 355 days) <span style='color:gray'>[Archie 2023]</span>. Analog missions aim to replicate space-like conditions, such as isolation for 45 days in the Human Research Exploration Analog [NASA 2024]. Mission durations in the Antarctic region vary between the summer cohorts (about 3 months) and the winter-over cohorts (ranging from 6-9 months) <span style='color:gray'>[Harrison 1991]</span>. <br> The duration of voluntary migrations can be up to multigenerational. The duration of involuntary migrations can vary, from weeks (Kosovars in 1999) to decades (Palestinians, 70 years) <span style='color:gray'>[Devictor 2017]</span> <br><br><br>  <span style='color:gray'>Ayana Archie (2023). “A NASA Astronaut is back on Earth after a year in space, the longest for an American.” Updated September 28, 2023. Accessed March 12, 2024. https://www.npr.org/2023/09/20/1200374445/nasa-frank-rubio-record-yearlong-flight. <br> NASA. (2024) “HERA” Accessed March 12, 2024. https://www.nasa.gov/mission/hera/. <br> Harrison, A. A., Clearwater, Y. A., & McKay, C. P. (Eds.). (1991). From Antarctica to Outer Space: Life in Isolation and Confinement. Springer New York. </span>"
    },
    communication_delay:{
        title: "Communication Delay",
        explanation: "Missions rely on being able to communicate quickly with crew members in space. Communication delays for missions beyond Low Earth Orbit directly increase mission risks via increased time for resupply and emergency evacuations  <span style='color:gray'>[Parisi 2023]</span>. Seconds to minutes communication delay impacts real-time guidance from the ground. Lunar (5-14 seconds  <span style='color:gray'>[Parisi 2023]</span>) and Martian (6.5-44 min  <span style='color:gray'>[Schuster 2007]</span>) communication delays would require crew members to make independent decisions without relying on ground support  <span style='color:gray'>[Parisi 2023]</span>. <br><br><br>  <span style='color:gray'> Parisi, M., Panontin, T., Wu, S.-C., Mctigue, K., & Vera, A. (2023). Effects of Communication Delay on Human Spaceflight Missions. 14th International Conference on Applied Human Factors and Ergonomics (AHFE 2023). <br> Schuster, Alfons (2007): Intelligent Computing Everywhere. Springer, Berlin. P. 235-236.</span>"
    },
    isolated:{
        title: "Isolated",
        explanation: "In isolated environments, physical/social interaction and telecommunication with usual sources of support (family, friends) are seriously disrupted <span style='color:gray'>[Nicolas 2016]</span>. In times of crisis, evacuation from an isolated environment may be difficult, if not impossible <span style='color:gray'>[Sandal 2006]</span>. <br><br><br> <span style='color:gray'> Nicolas, M., Suedfeld, P., Weiss, K., & Gaudino, M. (2016). Affective, Social, and Cognitive Outcomes During a 1-Year Wintering in Concordia. Environment and Behavior, 48(8), 1073–1091. <br> Sandal, G. M., Leon, G. R., & Palinkas, L. (2006). Human challenges in polar and space environments. Reviews in Environmental Science and Bio/Technology, 5(2–3), 281–296.</span>"
    },
    confined:{
        title: "Confined",
        explanation: "Confined environments, such as submarines, space stations, Antarctic stations, even our homes during COVID lockdowns, are joined by the commonality that there are physical and social constraints to leaving a certain space. Beyond limited mobility outside of the environment due to extreme environmental conditions, the indoor environment might also offer limited mobility <span style='color:gray'>[Nicolas 2016]</span>. <br> Confinement may also incorporate the access to resources within a walkable or accessible neighborhood. For example, the inequitable distribution of healthcare, grocery stores, libraries, and other social services; or the impossibility of gaining access to certain services in refugee camps, can contribute to the definition of confinement <span style='color:gray'>[Mouratidis 2020][Razum 2022]</span>.     <br><br><br> <span style='color:gray'> Nicolas, M., Suedfeld, P., Weiss, K., & Gaudino, M. (2016). Affective, Social, and Cognitive Outcomes During a 1-Year Wintering in Concordia. Environment and Behavior, 48(8), 1073–1091. <br> Mouratidis, K. (2020). Neighborhood characteristics, neighborhood satisfaction, and well-being: The links with neighborhood deprivation. Land Use Policy, 99, 104886. <br> Razum, O., Dawson, A., Eckenwiler, L., Wild, V. (2022). Refugee Camps: Paradise or Purgatory?. In: Razum, O., Dawson, A., Eckenwiler, L., Wild, V. (eds) Refugee Camps in Europe and Australia. Palgrave Macmillan, Cham. </span> "
    },
    extreme:{
        title: "Extreme",
        explanation: "Hostile environments exist on Earth and in space. The Antarctic region, characterized by extreme cold (often dipping below -100F/-73C), extremely variable daylight hours with 5-6 months of complete darkness, low humidity, high altitude, and hazards (blizzards, crevices, ice), is often used as an environmental analog for outer space <span style='color:gray'>[Sandal 2018][Harrison 1991][Palinkas and Suedfeld 2008][Salam 2012]</span>. The space environment, further characterized by vacuum, microgravity, temperature swings (due to fluctuations between receiving solar heat and emptying heat to the coldness of space), micrometeoroids, space debris, altered light/dark cycles, and radiation <span style='color:gray'>[Thirsk 2009]</span>.      <br><br><br> <span style='color:gray'> Sandal, G. M., van deVijver, F. J. R., & Smith, N. (2018). Psychological Hibernation in Antarctica. Frontiers in Psychology, 9, 2235. <br> Thirsk, R., Kuipers, A., Mukai, C., & Williams, D. (2009). The space-flight environment: The International Space Station and beyond. Canadian Medical Association Journal, 180(12), 1216–1220. <br> Harrison, A. A., Clearwater, Y. A., & McKay, C. P. (Eds.). (1991). From Antarctica to Outer Space: Life in Isolation and Confinement. Springer New York. <br> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163. <br> Salam, A. P. (2012). Exploration class missions on earth: Lessons learnt from life in extreme Antarctic isolation and confinement. In A. Chouker (Ed.), Stress challenges and immunity in space (pp. 425-439). Berlin, Germany: Springer. </span>        "
    },
    resource_constrained:{
        title: "Resource Constrained",
        explanation: "Resource constrained areas result from inequitable and inadequate distribution of resources (e.g., food, water, healthcare, education, mobility) <span style='color:gray'> [Mouratidis 2020][Bauer and Gallagher 2020]</span>. In harsh and remote environments such as Antarctica, resources are inherently limited as they have to be transported inland, which can be logistically challenging <span style='color:gray'> [Kennicutt 2016]</span>. In certain situations, medical evaluation might even be impossible [Nicholas 2016].       <br><br><br> <span style='color:gray'> Mouratidis, K. (2020). Neighborhood characteristics, neighborhood satisfaction, and well-being: The links with neighborhood deprivation. Land Use Policy, 99. <br> Bauer, C., & Gallagher, M. J. (2020). Education for Humanity: higher education for refugees in resource-constrained environments through innovative technology. Journal of Refugee Studies, 33(2), 416-436. <br> Nicolas, M., Suedfeld, P., Weiss, K., & Gaudino, M. (2016). Affective, Social, and Cognitive Outcomes During a 1-Year Wintering in Concordia. Environment and Behavior, 48(8), 1073–1091. </span>        "
    },
    mission_demands:{
        title: "Mission Demands",
        explanation: "Mission demands vary based on the specific mission profile and goals. This includes cognitive and physical demands encountered due to launch, flight profile, re-entry (if any), and landing/splashdown."
    },
    mission_events:{
        title: "Mission Events",
        explanation: "Either planned (nominal) or unplanned (contingency/emergency) acute events, including Extravehicular Activity, crew docking and transfer, injury, conflicts, and emergency egress.        "
    },
    individual_traits_invisible:{
        title: "Individual Traits",
        explanation: "Individual traits accounting for variation, including genetics and personality. Personality traits are based on Costa and McCrea’s five-factor model of personality. Although no consensus for personality models exists, Costa and McCrea’s model is heavily based on empirical research and widely used and adapted as a measurement scale (NEO-PI-R, IPIP-NEO, IPIP-NEO-120 [used by NASA]). "
    },
    social_composition_invisible:{
        title: "Social Composition",
        explanation: "Social variables for living and working with others"
    },
    team_processes_invisible:{
        title: "Team Processes",
        explanation: "People working together to achieve a goal beyond the capabilities of each individual alone. Proposed by Marks et al. (2001), a team moving toward a task has process “phases” when one set of actions dominates at any given time."
    },
    crew_size:{
        title: "Crew Size",
        explanation: "In US space missions, programs have differed in the crew size but consistently remain a small group of crewmembers. From Mercury (1) to Gemini (2), Apollo (3), Skylab (3), Space Shuttle (6-8), and ISS (7), it’s most likely that in the foreseeable future the crew size will remain in this range <span style='color:gray'>[Vakoch 2013][NASA 2024]</span>. These figures do not typically include those who are supporting the mission, including ground support, family, and friends. <br> When considering an Earth analogy to space missions, we can consider immigrants and refugees, who are similarly displaced from home (either voluntarily or involuntarily). In Earth-based contexts, the United Nations currently (2020) estimate there are 281 million immigrants world-wide, which is about 3.6% of the global population <span style='color:gray'>[Mcauliffe and Triandafyllidou 2022]</span>. The global refugee population exceeds 30 million individuals, and more than 100 million are forcibly displaced (including refugees) due to persecution, conflict, violence, and human rights violations <span style='color:gray'>[Masterson 2023][UNHCR 2024]</span>. Sizes of immigrant groups may vary from individual, to family, to 1000 refugees arriving in a single city <span style='color:gray'>[Pottie-Sherman and Wilkes 2017]</span>.          <br><br><br> <span style='color:gray'> Vakoch, D. A. (Ed.). (2013). On Orbit and Beyond: Psychological Perspectives on Human Spaceflight. Springer Berlin Heidelberg. <br> NASA. (2024) “Station Overview” https://www.nasa.gov/international-space-station/space-station-overview/. Accessed March 12, 2024. <br> Mcauliffe, Marie and Anna Triandafyllidou. (2021). World migration report 2022. International Organization for Migration (IOM). <br> Masterson, D. (2023). Refugee Networks, Cooperation, and Resource Access. American Political Science Review, 1–17. <br> UNHCR. (2024) “About UNHCR” https://www.unhcr.org/about-unhcr Accessed March 12, 2024. <br>  Pottie-Sherman, Y. and Wilkes, R. (2017), Does Size Really Matter? On the Relationship between Immigrant Group Size and Anti-Immigrant Prejudice†. Int Migr Rev, 51: 218-250. </span>        "
    },
    social_support:{
        title: "Social Support",
        explanation: "Social support is the perception or experience that one is cared for by others, esteemed and valued, and part of a mutually supportive social network <span style='color:gray'>[Wills 2000][Taylor 2011]</span>. Social support can be measured via structural social support, or understanding how many interpersonal connections an individual is involved in <span style='color:gray'>[Wills 2000]</span>.        <br><br><br> <span style='color:gray'> Wills, T. A., & Shinar, O. (2000). Measuring perceived and received social support. In S. Cohen, L. G. Underwood, & B. H. Gottlieb (Eds.), Social support measurement and intervention: A guide for health and social scientists (pp. 86–135). Oxford University Press. <br> Taylor, S. E. (2011). Social support: A review. The Oxford handbook of health psychology, 1, 189-214. </span>"
    },
    social_monotony:{
        title: "Social Monotony",
        explanation: "Monotony is described by an unchanging environment, repetition of events or situations, and chronic absence of novelty <span style='color:gray'>[Das 2015]</span>. Here, social monotony describes the chronic exposure to the same set of people.     <br><br><br> <span style='color:gray'> Das, S.K., Barhwal, K., Hota, S.K. (2015). Disrupting monotony during social isolation stress prevents early development of anxiety and depression like traits in male rats. BMC Neurosci 16, 2. </span> "
    },
    density:{
        title: "Social Density",
        explanation: "Physical density can be increased by adding more people into a given space (increasing social density) or decreasing the size of the space (increasing spatial density) <span style='color:gray'>[Fleming 1987]</span>.       <br><br><br> <span style='color:gray'> Fleming, I., Baum, A., & Weiss, L. (1987). Social density and perceived control as mediators of crowding stress in high-density residential neighborhoods. Journal of Personality and Social Psychology, 52(5), 899–906. </span>     "
    },
    group_living:{
        title: "Group living",
        explanation: "In the context of spaceflight and other extreme environments, group living skills or competency refer to a unique subset of skills that apply to colleagues who work and live together <span style='color:gray'>[Landon 2024]</span>. They become more salient as duration, isolation, and confinement increase <span style='color:gray'>[Landon 2024]</span>. <br> Group living skills for astronauts are essentially teaming skills that extend beyond work, into life situations. For example, ability to engage in interpersonal conversations constructively and not defensively; ability to identify and manage differences in personality, knowledge, cultural expectations; and ability to cooperate, take accountability, and assign responsibility <span style='color:gray'>[Landon and Paoletti 2020]</span>.        <br><br><br> <span style='color:gray'> Landon, L. B., Miller, J. C., Bell, S. T., & Roma, P. G. (2024). When people start getting real: The Group Living Skills Survey for extreme work environments. Frontiers in Psychology, 15, 1348119. <br> Landon, L. B., & Paoletti, J. (2020). Extreme roommates: Exploring group-living skills as a unique team skill area. In Psychology and human performance in space programs (pp. 217-235). CRC Press. </span> "
    },
    extraversion:{
        title: "Extraversion",
        explanation: "Tendency toward warmth, gregariousness, assertiveness, activity, excitement seeking, positive emotions <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>  "
    },
    openness:{
        title: "Openness",
        explanation: "Tendency toward fantasy, aesthetics, feelings, actions, ideas, values <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>"
    },
    agreeableness:{
        title: "Agreeableness",
        explanation: "Tendency toward trust, straightforwardness, altruism, compliance, modesty, tender-mindedness <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>"
    },
    neuroticism:{
        title: "Neuroticism",
        explanation: "Tendency toward anxiety, angry hostility, depression, self-consciousness, impulsiveness, vulnerability <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>"
    },
    conscientiousness:{
        title: "Conscientiousness",
        explanation: "Tendency toward competence, order, dutifulness, achievement striving, self-discipline, deliberation <span style='color:gray'>[Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>"
    },
    genetics:{
        title: "Genetics",
        explanation: "Genetics is a branch of biology dealing with heredity and variation. Here, we focus on the chromosomal theory of genetics, which is that genetic differences and similarities are inherited through DNA replication and therefore inherits genetic continuity through generations <span style='color:gray'>[Krug 2006]</span>. Phenotypic (i.e., observable) differences may account for traits such as eye color or handedness <span style='color:gray'>[Krug 2006]</span>. However, while more complex traits such as predisposition to illness could be partially explained by phenotypic differences, they may also differ by environmental influences, age, and interaction effects between genetics and these variables <span style='color:gray'>[Kujala 2011]</span>.<br> Genetic differences and their predictability and effects on personality are still active areas of research, and multiple theories exist on genetic, environmental, and interactive (genetic and environmental) explanations for personality <span style='color:gray'>[Matthews 2003]</span> – which has implications for behaviors, habits, and health.       <br><br><br> <span style='color:gray'> Krug, W. S. Cummings, M. R. & Spencer, C. R.. (2006). Concepts of Genetics, Eighth Edition. Pearson Education. <br> Kujala, U. M. (2011). Physical activity, genes, and lifetime predisposition to chronic disease. European Review of Aging and Physical Activity, 8(1), 31–36. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>        "
    },
    resilience:{
        title: "Resilience",
        explanation: "Resilience has been defined as the ability to effectively negotiate, adapt to, or manage stress and trauma <span style='color:gray'>[Windle 2011]</span>. The definition is two-parted: either the ability to remain psychologically health when faced with significant stress; or the ability to recover from a traumatic event <span style='color:gray'>[de Terte 2014]</span>. <br> A similar concept, hardiness, was introduced by Kobasa in 1982 and composed of the “belief in personal control over events, commitment to full involvement in life, enjoyment of challenge and opportunity” </span>[Matthews 2003]</span>.      <br><br><br> <span style='color:gray'> Windle, G. (2011). What is resilience? A review and concept analysis. Reviews in Clinical Gerontology, 21(2), 152–169. <br> de Terte I, Stephens C, Huddleston L. (2014) The development of a three part model of psychological resilience. Stress Health (5):416-24. <br>Kobasa, S. C. (1982) Commitment and coping in stress resistance among lawyers. Journal of Personality and Social Psychology, 42, 168–77. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>         "
    },
    psychological_resources:{
        title: "psychological_resources",
        explanation: "NASA provides operational psychology services for the International Space Station crew and their families. This includes private medical conferences with mental health specialists every two weeks, arranging care packages, regular cognitive function tests, and private family conferences <span style='color:gray'>[Sipes and Ark 2005]</span>.       <br><br><br> <span style='color:gray'> Sipes, W. E., & Ark, S. T. V. (2005). Operational Behavioral Health and Performance Resources for International Space Station Crews and Families. Aviation, Space, and Environmental Medicine, 76(6). </span>        "
    },
    training_and_preparation:{
        title: "Training and Preparation",
        explanation: "The goal of training is to provide knowledge and skills to execute mission tasks, including living in the mission environment. Knowledge areas for spaceflight include introductory topics (e.g., agency involvement, global space sector), spaceflight systems, scientific fundamentals (e.g., aerospace engineering, life sciences, Earth sciences), operations (e.g., space health, systems and infrastructure), and special skills (e.g., robotic arm operations, extravehicular activity, fitness training, media skills, team dynamics) <span style='color:gray'>[Steimle and Norberg 2013]</span>. <br> For professional career astronauts, training can take anywhere from 3.5 to 5 years, comprising basic, advanced, and increment specific training <span style='color:gray'>[Steimle and Norberg 2013]</span>.        <br><br><br> <span style='color:gray'> Steimle, H., Norberg, C. (2013). Astronaut selection and training. In: Norberg, C. (eds) Human Spaceflight and Exploration. Springer Praxis Books. Springer, Berlin, Heidelberg. </span> "
    },
    ground_support:{
        title: "Ground Support",
        explanation: "Spaceflight is an incredibly demanding effort and supported by an enormous amount of facilities, technology, and people on the ground. Each of the major space agencies with astronauts on the International Space Station has mission control and research/technology centers, comprising highly trained experts that support the challenges each agency may face (including spaceflight) <span style='color:gray'>[NASA 2023]</span>.      <br><br><br> <span style='color:gray'> NASA. “Ground Facilities”. Updated Dec 28, 2023. Accessed April 30, 2024. https://www.nasa.gov/international-space-station/ground-facilities/ </span>        "
    },
    medical_capability:{
        title: "Medical Resources",
        explanation: "Medical capability is the “complete set of resources that enables the crew to perform medical monitoring, diagnosis, and treatment of medical conditions” <span style='color:gray'>[Antonsen 2022]</span>. These may include tools, medicine, equipment, (crew and ground support) knowledge, training, references, and other resources. <br> Medical capabilities should adequately match medical needs. However, prediction of medical capability requirements for untested mission profiles (e.g., Lunar or Martian mission) are difficult; medical needs are attributed by a complex web of factors, may be acute or chronic, and could develop/escalate as comorbidities <span style='color:gray'>[Antonsen 2022]</span>.       <br><br><br> <span style='color:gray'> Antonsen, E. L., Myers, J. G., Boley, L., Arellano, J., Kerstman, E., Kadwa, B., Buckland, D. M., & Van Baalen, M. (2022). Estimating medical risk in human spaceflight. Npj Microgravity, 8(1), 8. </span> "
    },
    family_and_friends:{
        title: "Family and Friends",
        explanation: "Explanations."
    },
    supplies:{
        title: "Supplies",
        explanation: "Explanations."
    },
    food:{
        title: "Food",
        explanation: "Explanations."
    },
    exercise_equipment:{
        title: "Exercise Equipment",
        explanation: "Explanations."
    },
    physical_ergonomics:{
        title: "Physical Ergonomics",
        explanation: "Explanations."
    },
    circulation_paths:{
        title: "Circulation Paths",
        explanation: "Explanations."
    },
    privacy:{
        title: "Privacy",
        explanation: "Explanations."
    },
    lighting:{
        title: "lighting",
        explanation: "Explanations."
    },
    environmental_monotony:{
        title: "Environmental Monotony",
        explanation: "Explanations."
    },
    layout:{
        title: "Layout",
        explanation: "Explanations."
    },
    reconfigurability:{
        title: "reconfigurability",
        explanation: "Explanations."
    },
    fixtures:{
        title: "Fixtures",
        explanation: "Explanations."
    },
    light_dark_cycles:{
        title: "Light/Dark Cycles",
        explanation: "Explanations."
    },
    altered_gravity:{
        title: "Altered Gravity",
        explanation: "Explanations."
    },
    atmosphere:{
        title: "Atmosphere",
        explanation: "Explanations."
    },
    radiation:{
        title: "Radiation",
        explanation: "Explanations."
    },
    environmental_control:{
        title: "Environmental Control",
        explanation: "Explanations."
    },
    habitable_volume:{
        title: "Habitable Volume",
        explanation: "Explanations."
    },
    acoustics:{
        title: "Temperature/Humidity",
        explanation: "Explanations."
    },
    nutrition:{
        title: "Nutrition",
        explanation: "Explanations."
    },
    physical_workload:{
        title: "Physical Workload",
        explanation: "Explanations."
    },
    cognitive_workload:{
        title: "Cognitive Workload",
        explanation: "Explanations."
    },
    media_attention:{
        title: "Media Attention",
        explanation: "Explanations."
    },
    conflicts:{
        title: "Conflicts",
        explanation: "Explanations."
    },
    injuries:{
        title: "Injuries",
        explanation: "Explanations."
    },
    transition_processes:{
        title: "Transition Processes",
        explanation: "Explanations."
    },
    action_processes:{
        title: "Action Processes",
        explanation: "Explanations."
    },
    interpersonal_processes:{
        title: "interpersonal Processes",
        explanation: "Explanations."
    },
    stress_regulation:{
        title: "Stress Regulation",
        explanation: "Explanations."
    },
    placemaking:{
        title: "Placemaking",
        explanation: "Explanations."
    },
    sleep:{
        title: "Sleep",
        explanation: "Explanations."
    },
    cognitive_function:{
        title: "Physical Health",
        explanation: "Explanations."
    },
    sleep_quality:{
        title: "Sleep Quality",
        explanation: "Explanations."
    },
    anxiety:{
        title: "Anxiety",
        explanation: "Explanations."
    },
    agency:{
        title: "Agency",
        explanation: "Explanations."
    },
    stress:{
        title: "Stress",
        explanation: "Explanations."
    },
    crew_performance:{
        title: "Crew Performance",
        explanation: "Explanations."
    },
    attachment:{
        title: "Attachment",
        explanation: "Explanations."
    },
    trust:{
        title: "Trust",
        explanation: "Explanations."
    },
    curiosity:{
        title: "Curiosity",
        explanation: "Explanations."
    },
    kinship:{
        title: "Kinship",
        explanation: "Explanations."
    },
    boredom:{
        title: "Boredom",
        explanation: "Explanations."
    },
    tranquility:{
        title: "Tranquility",
        explanation: "Explanations."
    },
    discontentment:{
        title: "Discontentment",
        explanation: "Explanations."
    },
    nostalgia_homesickness:{
        title: "Nostalgia/Homesickness",
        explanation: "Explanations."
    },
    fear:{
        title: "Fear",
        explanation: "Explanations."
    },
    awe:{
        title: "Awe",
        explanation: "Explanations."
    },
    depression:{
        title: "Depression",
        explanation: "Explanations."
    },
};

/*Define content for each box upon clicking/hovering, CHANGE EXPLANATION TEXTS HERE*/
var relatedBoxContents = {
    selection_individual_traits_invisible: {
        title: "Selection &#8594; Individual Traits",
        explanation: "Historically, NASA has grouped select-in criteria as “the right stuff” (“virtuous, no-nonsense, able and professional astronauts”), or traits that may be more desirable to select for in astronaut candidates <span style='color:gray'>[Vakoch 2013][Steimle and Norberg 2013]</span>. In a study of ESA astronaut applicants (n=902), higher levels of neuroticism (specifically anxiety, anger hostility, and depression) were found for candidates who were not selected <span style='color:gray'>[Mittelstädt 2016]</span>. However, “the right stuff” is a compilation of ideals that humans cannot attain; more focus has been put on behavioral health research for long-duration missions <span style='color:gray'>[Vakoch 2013]</span>. <br><br><br> <span style='color:gray'> Steimle, H., Norberg, C. (2013). Astronaut selection and training. In: Norberg, C. (eds) Human Spaceflight and Exploration. Springer Praxis Books. Springer, Berlin, Heidelberg. https://doi.org/10.1007/978-3-642-23725-6_7 <br> Vakoch, D. A. (Ed.). (2013). On Orbit and Beyond: Psychological Perspectives on Human Spaceflight. Springer Berlin Heidelberg. https://doi.org/10.1007/978-3-642-30583. <br>Mittelstädt, J. M., Pecena, Y., Oubaid, V., & Maschke, P. (2016). Psychometric Personality Differences Between Candidates in Astronaut Selection. Aerospace Medicine and Human Performance, 87(11), 933–939. https://doi.org/10.3357/AMHP.4548.2016.</span>"
    },
    selection_social_composition_invisible: {
        title: "Selection &#8594; Social Composition",
        explanation: "Crew compatibility is a major consideration as astronauts perform their missions with a team. Indirect assessments of compatibility (such as personality inventories) are effective when used in the selection process to create specific team configurations (e.g., homogenous). However, applicants can “game” the system via social desirability (tendency to provide responses that are socially desired) <span style='color:gray'>[Ganster 1983][Bell 2015]</span>. While in-depth interviews and direct/operational methods of assessment may help mitigate these issues, they can be expensive and time-intensive. Furthermore, crews may change in mission <span style='color:gray'>[Bell 2015]</span>. <br><br><br> <span style='color:gray'>Ganster, D. C., Hennessey, H. W., & Luthans, F. (1983). Social desirability response effects: Three alternative models. Academy of Management Journal, 26(2), 321–331. https://doi.org/10.2307/255979. <br>Bell, S. T., Brown, S. G., Outland, N. B., & Abben, D. R. (2015). Critical Team Composition Issues for Long-Distance and Long-Duration Space Exploration.</span>"
    },
    distance_from_earth_communication_delay:{
        title: "Distance from Earth &#8594; Communication delay",
        explanation: "During a lunar mission, a communication delay of 5-14 second is expected <span style='color:gray'>[Parisi 2023]</span>. During a Mars surface mission, depending on the relative positions of the Earth and Mars, a roundtrip communication delay is approximately 6.5 to 44 minutes <span style='color:gray'>[Schuster 2007]</span>. <br><br><br> <span style='color:gray'> Parisi, M., Panontin, T., Wu, S., Mctigue, K., Vera, A.  (2023). Effects of Communication Delay on Human Spaceflight Missions. In: Pedro Arezes and Susana Costa (eds) Human-Centered Aerospace Systems and Sustainability Applications. AHFE (2023) International Conference. AHFE Open Access, vol 98. AHFE International, USA. http://doi.org/10.54941/ahfe1003920. <br> Schuster, Alfons (2007): Intelligent Computing Everywhere. Springer, Berlin. P. 235-236. </span>"
    },
    distance_from_earth_isolated:{
        title: "Distance from Earth &#8594; Isolation",
        explanation: "As the distance from Earth increases, Earth will disappear into the background of space, termed the ‘Earth-out-of-view phenomenon’. Along with the awareness of the impossibility of rapid return and confinement as the only option during the whole mission, these psychological factors will increase the sense of isolation <span style='color:gray'>[Musso 2018]</span>.<br><br><br> <span style='color:gray'>Musso, G., Ferraris, S., Fenoglio, F., Zafarana, A., Salatino, A., Ricci, R. (2018). Habitability Issues in Long Duration Space Missions Far from Earth. In: Stanton, N. (eds) Advances in Human Aspects of Transportation. AHFE 2017. Advances in Intelligent Systems and Computing, vol 597. Springer, Cham. </span>>"
    },
    distance_from_earth_resource_constrained:{
        title: "Distance from Earth &#8594; Resource constrained",
        explanation: "When moving from home (migration, relocation, immigration), refugees and immigrants face challenges such as language difficulties, rejection of qualifications, limitation of personal resources, and barriers to social support <span style='color:gray'>[Stewart 2008][Faret 2021]</span>.<br>The current space mission paradigm is to bring all resources (consumable and non-consumable) from Earth. Increased distance, such as the one from Mars to Earth, creates logistical and cost difficulties <span style='color:gray'>[Sullivan and McKay 1991]</span>. Solutions such as regenerative systems and in-situ resource utilization have been proposed <span style='color:gray'>[Pickett 2020][Starr 2020]</span>. <br><br><br> <span style='color:gray'> Stewart, M., Anderson, J., Beiser, M., Mwakarimba, E., Neufeld, A., Simich, L., & Spitzer, D. (2008). Multicultural Meanings of Social Support among Immigrants and Refugees. International Migration, 46(3), 123–159.<br>Faret, L., Cornejo, A. P. G., Aguirre, J. N. N., & González, I. A. T. (2021). The city under constraint: International migrants’ challenges and strategies to access urban resources in Mexico City. Canadian Geographies / Géographies Canadiennes, 65(4), 423–434.<br>Sullivan, T. A., & McKay, D. S. (1991). Using space resources. NASA Johnson Space Center.<br>Pickett, M. T., Roberson, L. B., Calabria, J. L., Bullard, T. J., Turner, G., & Yeh, D. H. (2020). Regenerative water purification for space applications: Needs, challenges, and technologies towards “closing the loop.” Life Sciences in Space Research, 24, 64–82.<br>Starr, S. O., & Muscatello, A. C. (2020). Mars in situ resource utilization: A review. Planetary and Space Science, 182. </span>"
    },
    distance_from_earth_medical_capability:{
        title: "Distance from Earth &#8594; Medical resources",
        explanation: "Distance from Earth limits the availability of medical care, including unavailability of resources, limited alternatives for ineffectiveness/side effects of medicine, and degradation of medications <span style='color:gray'>[Wotring 2015]</span>. <br><br><br> <span style='color:gray'> Wotring, V. E. (2015). Medication use by U.S. crewmembers on the International Space Station. FASEB Journal: Offcial Publication of the Federation of American Societies for Experimental Biology, 29(11), 4417–4423. </span>"
    },
    distance_from_earth_food:{
        title: "Distance from Earth &#8594; Food",
        explanation: "Distance from Earth highly constrains the food system to be shelf stable, nutritional, and palatable for long durations <span style='color:gray'>[Schorn and Roma 2020]</span>. <br><br><br> <span style='color:gray'> Schorn, J. M., & Roma, P. G. (2020). Physical hazards of space exploration and the biological bases of behavioral health and performance in extreme environments. In Psychology and human performance in space programs (pp. 1-22). CRC Press.</span>"
    },
    mission_duration_isolated:{
        title: "Mission duration &#8594; Isolation",
        explanation: "Not only does increased mission duration limit the amount of contact with usual sources of support, prolonged isolation can decrease the perceived quality and satisfaction of support, even when readily available <span style='color:gray'> [Palinkas 2004]</span>. <br><br><br> <span style='color:gray'> Palinkas, L. A., Johnson, J. C., & Boster, J. S. (2004). Social support and depressed mood in isolated and confined environments. Acta Astronautica, 54(9), 639–647. </span>"
    },
    mission_duration_boredom:{
        title: "Mission duration &#8594; Boredom",
        explanation: "During a study of a crew of 6 in isolation for 520 days, crew sedentariness increased over the mission as captured by actigraphy (motion data) <span style='color:gray'> [Basner 2013]</span>. <br><br><br> <span style='color:gray'>Basner M, Dinges DF, Mollicone DJ, Ecker A, Jones CW, et al. (2013) Mars 520-d mission simulation reveals protracted crew hypokinesis and alterations of sleep duration and timing. Proc Natl Acad Sci USA 110: 2635–2640. </span>"
    },
    communication_delay_ground_support:{
        title: "Communication delay &#8594; Ground support",
        explanation: "All human space exploration thus far has been within the Earth-Moon range, where minimal communication delay has allowed the majority of the operations to be ground-based <span style='color:gray'>[Frank 2013]</span>. In an analog habitat study of communication delay (N = 16), it was found that with the current ISS operational mode, a one-way communication delay of over 300 seconds (5 minutes) resulted in a level of workload requiring mitigation <span style='color:gray'>[Frank 2013]</span>. <br><br><br> <span style='color:gray'> Frank, J., Spirkovska, L., McCann, R., Lui Wang, Pohlkamp, K., & Morin, L. (2013). Autonomous mission operations. 2013 IEEE Aerospace Conference, 1–20.</span>"
    },
    communication_delay_transition_processes:{
        title: "Communication delay &#8594; Ground support",
        explanation: "During an isolation analog of 520 days (N = 6, Mars 500 experiment), crew reported that the presence, not the duration, of communication delay mattered. During decision making processes, both crew and ground support developed dissatisfaction and inefficiencies in subsequent decisions due to the lack of shared understanding <span style='color:gray'>[Ushakov 2014]</span>. <br><br><br> <span style='color:gray'> Ushakov, I. B., Vladimirovich, M. B., Bubeev, Y. A., Gushin, V. I., Vasil’eva, G. Y., Vinokhodova, A. G., & Shved, D. M. (2014). Main findings of psychophysiological studies in the Mars 500 experiment. Herald of the Russian Academy of Sciences, 84(2), 106–114. </span>"
    },
    communication_delay_social_monotony:{
        title: "Communication delay &#8594; Social monotony",
        explanation: "Prolonged autonomy and communication delays contribute to long term isolation, resulting in greater need for psychological support from family and friends <span style='color:gray'>[Ushakov 2014]</span>. During an isolation analog of 520 days (N = 6, Mars 500) and previous international isolation studies (HUBES 94; SFINCSS 99), the number and size of outgoing emails to family and friends increased with mission duration <span style='color:gray'>[Ushakov 2014]</span>. <br><br><br> <span style='color:gray'> Ushakov, I. B., Vladimirovich, M. B., Bubeev, Y. A., Gushin, V. I., Vasil’eva, G. Y., Vinokhodova, A. G., & Shved, D. M. (2014). Main findings of psychophysiological studies in the Mars 500 experiment. Herald of the Russian Academy of Sciences, 84(2), 106–114. </span>"
    },
    communication_delay_stress:{
        title: "Communication delay &#8594; Stress",
        explanation: "Prolonged isolation and limited interfaces with existing sources of support with communication delay compounds the stress associated with long-duration space exploration missions <span style='color:gray'>[Schorn and Roma 2020]</span>. <br><br><br> <span style='color:gray'> Schorn, J. M., & Roma, P. G. (2020). Physical hazards of space exploration and the biological bases of behavioral health and performance in extreme environments. In Psychology and human performance in space programs (pp. 1-22). CRC Press. </span>"
    },
    isolated_ground_support:{
        title: "Isolated &#8594; Ground support",
        explanation: "In one study of 200+ winter-over personnel in Antarctica, it was found that although the availability of support didn’t change during prolonged isolation, the perceived quality of support decreased <span style='color:gray'>[Palinkas 2004]</span>.  <br><br><br> <span style='color:gray'> Palinkas, L. A., Johnson, J. C., & Boster, J. S. (2004). Social support and depressed mood in isolated and confined environments. Acta Astronautica, 54(9), 639–647.</span> "
    },
    isolated_physical_health:{
        title: "Isolated &#8594; Physical health",
        explanation: "Social isolation is a major risk for mortality. The positive impact of social ties on health is significant, with its effect size on the same scale as smoking, obesity, and physical activity <span style='color:gray'>[House 1988][Taylor 2011]</span>. Pathways for social support linking to physical health are varied, including stress regulation <span style='color:gray'>[Taylor 2011]</span>, and promotion of and adherence to healthy habits <span style='color:gray'>[Carlson 2011][Wilson and Ampey-Thornhill 2011]</span>.        <br><br><br> <span style='color:gray'> House, J. S., Landis, K. R., & Umberson, D. (1988). Social relationships and health. Science (New York, N.Y.), 241(4865), 540–545. <br> Taylor, S. E. (2011). Social support: A review. The Oxford handbook of health psychology, 1, 189-214. <br> Carlson, L. E., Goodey, E., Bennett, M. H., Taenzer, P., & Koopmans, J. (2002). The addition of social support to a community-based large-group behavioral smoking cessation intervention: Improved cessation rates and gender differences. Addictive Behaviors, 27, 547-559. <br> Wilson DK, Ampey-Thornhill G. The role of gender and family support on dietary compliance in an African American adolescent hypertension prevention study. Ann Behav Med. 2001;23(1):59-67. </span> "
    },
    isolated_stress:{
        title: "Isolated &#8594; Stress",
        explanation: "Prolonged isolation is a well-established negative stressor; particularly, limited communication with psychological support, family, and friends may negatively impact behavioral health and performance [Schorn and Roma 2020][Kanas 2007].        <br><br><br> <span style='color:gray'> Schorn, J. M., & Roma, P. G. (2020). Physical hazards of space exploration and the biological bases of behavioral health and performance in extreme environments. In Psychology and human performance in space programs (pp. 1-22). CRC Press. <br> Kanas, N. A., Salnitskiy, V. P., Ritsher, J. B., Gushin, V. I., Weiss, D. S., … Marmar, C. R. (2007). Psychosocial interactions during ISS missions. Acta Astronautica, 60, 329–335. </span> "
    },
    confined_social_monotony:{
        title: "Confined  &#8594; Social monotony",
        explanation: "Groups that undergo confinement lose immediate access to friends, family, and nominal networks of support <span style='color:gray'>[Palinkas 1992]</span>. Social isolation, monotony, and intensified social conflicts can also occur in confinement with the same group of people without a possibility of leaving <span style='color:gray'>[Palinkas 2004]</span>.         <br><br><br> <span style='color:gray'> Palinkas, L. A. (1992). Going to extremes: The cultural context of stress, illness and coping in Antarctica. Social Science & Medicine, 35(5), 651–664. <br> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163. </span>        "
    },
    confined_privacy:{
        title: "Confined  &#8594; Privacy",
        explanation: "The interior of the Antarctic stations emphasize efficiency, not comfort. The lack of privacy (physical and acoustic) is a primary stressor in confined environments <span style='color:gray'>[Palinkas 2008][Nicolas 2016]</span>.        <br><br><br> <span style='color:gray'> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163. <br> Nicolas, M., Suedfeld, P., Weiss, K., & Gaudino, M. (2016). Affective, Social, and Cognitive Outcomes During a 1-Year Wintering in Concordia. Environment and Behavior, 48(8), 1073–1091. </span>        "
    },
    extreme_genetics:{
        title: "Extreme &#8594; Genetics",
        explanation: "During a spaceflight study of one year or shorter missions (N = 11), it was found that telomere lengths shortened significantly for all crewmembers upon return to Earth, regardless of in-space telomere dynamics. An increased frequency of chromosomal inversions were also observed in- and post-flight. One hypothesis is that this telomerase activity is a response to the extreme environment-induced chronic oxidative stress, which all crewmembers were found to experience during spaceflight <span style='color:gray'>[Luxton 2020]</span>.       <br><br><br> <span style='color:gray'> Luxton, J. J., McKenna, M. J., Lewis, A., Taylor, L. E., George, K. A., Dixit, S. M., Moniz, M., Benegas, W., Mackay, M. J., Mozsary, C., Butler, D., Bezdan, D., Meydan, C., Crucian, B. E., Zwart, S. R., Smith, S. M., Mason, C. E., & Bailey, S. M. (2020). Telomere Length Dynamics and DNA Damage Responses Associated with Long-Duration Spaceflight. Cell Reports, 33(10), 108457. </span>  "
    },
    extreme_resource_constrained:{
        title: "Extreme &#8594; Resource constrained",
        explanation: "In extreme environments such as Antarctica, little life can exist without artificial support <span style='color:gray'>[Natani and Shurley 1974]</span>. Therefore, support, logistics, and resources must be carefully planned to maintain life and operations in extreme environments. However, the geographic isolation, cost, policies, and extreme conditions make transport and logistics complicated <span style='color:gray'>[Kennicutt 2016]</span>. <br> While costs to launch into space have declined appreciatively from $1 million/kg in the 1950s to $1400/kg in 2020s (SpaceX’s Falcon Heavy), the price tag still constrains resource availability for Low-Earth Orbit, and particularly for Moon and Mars missions <span style='color:gray'>[Jones 2018]</span>. <br> Impacts of climate change are projected to lead to resource depletion in already deprived areas <span style='color:gray'>[Beveniste 2022]</span>.         <br><br><br> <span style='color:gray'> Natani, K., & Shurley, J. T. (1974). Sociopsychological aspects of a winter vigil at South Pole station. In E. K. E. Gunderson (Ed.), Antarctic Research Series (Vol. 22, pp. 89–114). American Geophysical Union. <br> Kennicutt, M. C., Kim, Y., & Rogan-Finnemore, M. (2016). Antarctic roadmap challenges. Council of Managers of National Antarctic Programs. <br> Jones, H. W. (2018). The Future Impact of Much Lower Launch Cost. 48th International Conference on Environmental Systems.<br> Benveniste, H., Oppenheimer, M. & Fleurbaey, M. (2022). Climate change increases resource-constrained international immobility. Nat. Clim. Chang. 12, 634–641. </span>        "
    },
    extreme_altered_gravity:{
        title: "Extreme &#8594; Altered gravity",
        explanation: "Reduced gravity has physiological and operational implications <span style='color:gray'>[Lackner 1992][Stirling 2009][Massion 1998][Tanaka 2017]</span>. Various analogs for altered gravity exist to replicate conditions for operational, technological, or physiological testing. These include head-down tilt [Watenpaugh 2016], water immersion <span style='color:gray'>[Watenpaugh 2016]</span>, neutral buoyancy <span style='color:gray'>[Bury 2023]</span>, and parabolic flights <span style='color:gray'>[Johnson 2018]</span>.        <br><br><br> <span style='color:gray'> Lackner, J. R. (1992). Spatial orientation in weightless environments. In Perception (Vol. 21, pp. 803–812). <br> Stirling, L., Willcox, K., Ferguson, P., & Newman, D. (2009). Kinetics and kinematics for translational motions in microgravity during parabolic flight. Aviation Space and Environmental Medicine, 80(6), 522–531. <br> Massion, J., Amblard, B., Assaiante, C., Mouchnino, L., & Vernazza, S. (1998). Body orientation and control of coordinated movements in microgravity. Brain Research Reviews, 28(1–2), 83–91. <br> Tanaka, K., Nishimura, N., & Kawai, Y. (2017). Adaptation to microgravity, deconditioning, and countermeasures. The Journal of Physiological Sciences, 67(2), 271–281. <br> Watenpaugh, D. E. (2016). Analogs of microgravity: Head-down tilt and water immersion. Journal of Applied Physiology, 120(8), 904–914. <br> Bury, N.-A., Jenkin, M., Allison, R. S., Herpers, R., & Harris, L. R. (2023). Vection underwater illustrates the limitations of neutral buoyancy as a microgravity analog. Npj Microgravity, 9(1), 42. <br> Johnson, K. T., Taylor, S., Fedor, S., Jaques, N., Chen, W., & Picard, R. W. (2018). Vomit Comet Physiology: Autonomic Changes in Novice Flyers. </span>     "
    },
    extreme_radiation:{
        title: "Extreme &#8594; Radiation",
        explanation: "In extreme environments (such as deep space), radiation levels are elevated due to a combination of background Galactic Cosmic Radiation, Solar Particle Events, and localized trapped particle belts <span style='color:gray'>[Allen 2018]</span>. <br> Extreme events on Earth, such a nuclear facility accidents (e.g., Fukushiima Dachii, 2011) can have impacts on the safety of nearby water and food, and increased mortalities and morbidities <span style='color:gray'>[Jones 2013]</span>. On a much larger scale, the use of atomic bombs (only time in history – Hiroshima and Nagasaki, 1945) resulted in over 200,000 deaths before year’s end <span style='color:gray'>[Ten Hoeve and Jacobson 2012]</span>.        <br><br><br> <span style='color:gray'> Allen, C. S., Giraudo, M., Moratto, C., & Yamaguchi, N. (2018). Spaceflight environment. In Space Safety and Human Performance (pp. 87–138). Elsevier. <br> Jones, C. F., Loh, S. L., & Satō, K. (2013). Narrating Fukushima: Scales of a nuclear meltdown. East Asian Science, Technology and Society: An International Journal, 7(4), 601-623. <br> Ten Hoeve, J. E., & Jacobson, M. Z. (2012). Worldwide health effects of the Fukushima Daiichi nuclear accident. Energy & Environmental Science, 5(9), 8743-8757. </span>     "
    },
    extreme_light_dark_cycles:{
        title: "Extreme &#8594; Light/Dark cycles",
        explanation: "Extreme environments, like polar regions, can experience perpetual night or day <span style='color:gray'>[Palinkas and Suedfeld 2008]</span>. In Low-Earth Orbit, the International Space Station experiences a sunrise every 45 minutes <span style='color:gray'>[Thirsk 2009]</span>. Altered (non-24 hour) light/dark cycles can cause disturbances in circadian rhythms due to regular, daily light cycles being the primary factor for entrainment <span style='color:gray'>[Broadway and Arendt 1988]</span>.        <br><br><br> <span style='color:gray'> Palinkas, L. A., & Suedfeld, P. (2008). Psychological effects of polar expeditions. The Lancet, 371(9607), 153–163. <br> Thirsk, R., Kuipers, A., Mukai, C., & Williams, D. (2009). The space-flight environment: The International Space Station and beyond. Canadian Medical Association Journal, 180(12), 1216–1220. <br> Broadway JW and Arendt J. (1988). Seasonal and bright light changes of the phase position of the human melatonin rhythms in Antarctica. Arctic Med Res; 47 (suppl 1): 201–03. </span>     "
    },
    resource_constrained_supplies:{
        title: "Resource Constrained &#8594; Supplies",
        explanation: "In resource constrained environments, supplies (e.g., fresh food, water, clothing) are limited <span style='color:gray'>[Taylor 1969][Natani and Shurley 1974]</span>. With limited or impossible resupply capabilities, regenerative or closed-loops systems are one solution to maximize the use of existing resources <span style='color:gray'>[Pickett 2020]</span>.         <br><br><br> <span style='color:gray'> Taylor, A. J. W. (1969). Ability, stability, and social adjustment among Scott base personnel, Antarctica, Occup. Psychol., 43, 81-93. <br> Natani, K., & Shurley, J. T. (1974). Sociopsychological aspects of a winter vigil at South Pole station. In E. K. E. Gunderson (Ed.), Antarctic Research Series (Vol. 22, pp. 89–114). American Geophysical Union. <br> Pickett, M. T., Roberson, L. B., Calabria, J. L., Bullard, T. J., Turner, G., & Yeh, D. H. (2020). Regenerative water purification for space applications: Needs, challenges, and technologies towards “closing the loop.” Life Sciences in Space Research, 24, 64–82. </span> "
    },
    resource_constrained_food:{
        title: "Resource Constrained &#8594; Food",
        explanation: "Even in Low Earth Orbit, resupply logistics limit the influx of fresh food on the International Space Station. As mission distance increases, the difficulty of resupply will challenge how food and nutrition are provided <span style='color:gray'> [Douglas 2020]</span>.         <br><br><br> <span style='color:gray'> Taylor, A. J. W. (1969). Ability, stability, and social adjustment among Scott base personnel, Antarctica, Occup. Psychol., 43, 81-93. <br> Natani, K., & Shurley, J. T. (1974). Sociopsychological aspects of a winter vigil at South Pole station. In E. K. E. Gunderson (Ed.), Antarctic Research Series (Vol. 22, pp. 89–114). American Geophysical Union. <br> Pickett, M. T., Roberson, L. B., Calabria, J. L., Bullard, T. J., Turner, G., & Yeh, D. H. (2020). Regenerative water purification for space applications: Needs, challenges, and technologies towards “closing the loop.” Life Sciences in Space Research, 24, 64–82. </span> "
    },
    mission_demands_physical_workload:{
        title: "Mission Demands &#8594; Physical workload",
        explanation: "During launch, peak acceleration is at ~3.8g (1g = 9.81 m/s^2), and up to 15 g can be reached by the launch escape system in emergency scenarios <span style='color:gray'>[Allen 2018]</span>. Accelerations in the lunar landing profile can briefly reach up to 20g <span style='color:gray'>[Allen 2018]</span>. <br> Crewmembers onboard the International Space Station spend around 10 hours a week exercising, which was still insufficient to counteract physiological deconditioning <span style='color:gray'>[Scott 2023]</span>.        <br><br><br> <span style='color:gray'> Allen, C. S., Giraudo, M., Moratto, C., & Yamaguchi, N. (2018). Spaceflight environment. In Space Safety and Human Performance (pp. 87–138). Elsevier. <br> Scott, J. M., Feiveson, A. H., English, K. L., Spector, E. R., Sibonga, J. D., Dillon, E. L., Ploutz-Snyder, L., & Everett, M. E. (2023). Effects of exercise countermeasures on multisystem function in long duration spaceflight astronauts. Npj Microgravity, 9(1), 11. </span> "
    },
    mission_demands_cognitive_workload:{
        title: "Mission Demands &#8594; Cognitive workload",
        explanation: "In general, space missions are challenging and require crew (crewmembers and mission control) to maintain high cognitive function while operating complex and sensitive instruments <span style='color:gray'>[Barger 2014]</span>. The “cognitive-overload” hypothesis describes the disproportionate sensorimotor performance deficit that occurs when cognitively challenging tasks are performed, as compared to simple ones. Spaceflight-specific disturbances, including restructuring of the sensorimotor system and cognitive stressors (confinement, altered sleep architecture, high workload) reduce available cognitive resources <span style='color:gray'>[Bock 2010]</span>.       <br><br><br> <span style='color:gray'> Barger, L. K., Wright, K. P., Burke, T. M., Chinoy, E. D., Ronda, J. M., Lockley, S. W., & Czeisler, C. A. (2014). Sleep and cognitive function of crewmembers and mission controllers working 24-h shifts during a simulated 105-day spaceflight mission. Acta Astronautica, 93, 230–242. <br> Bock, O., Weigelt, C., & Bloomberg, J. J. (2010). Cognitive Demand of Human Sensorimotor Performance During an Extended Space Mission: A Dual-Task Study. Aviation, Space, and Environmental Medicine, 81(9), 819–824. </span>"
    },
    mission_demands_fatigue:{
        title: "Mission Demands &#8594; Fatigue",
        explanation: "Mission demands and how those demands are enacted (e.g., with adequate preparation, operational requirements, work hours, work-rest cycles) can mediate fatigue <span style='color:gray'>[Parasuraman and Hancock 2008]</span>. Within the aerospace industry, air traffic controllers are a typical analog for studying fatigue due the similarity between their high cognitive demands, working hours, and the need for accuracy and precision. Fatigue is a well-known issue for air traffic controllers, leading the Federal Aviation Administration to implement staffing measures to counteract ATC napping during midnight shifts <span style='color:gray'>[FAA 2011]</span>.        <br><br><br> <span style='color:gray'> Parasuraman, R., & Hancock, P. A. (2008). Mitigating the adverse effects of workload, stress, and fatigue with adaptive automation. Performance under stress, 45-57.<br> Federal Aviation Administration Press Office. (2011, April 13). The FAA announces additional staffing at 27 control towers [Press release]. </span>"
    },
    mission_events_stress:{
        title: "Mission Events &#8594; Stress",
        explanation: "One of more major life events within 6-12 months well-predict subsequent physical morbidity, mortality, psychological stress, and psychiatric disorder <span style='color:gray'>[Cohen and Williamson 1991][Coyne and Downey 1991][Creed 1985][Kessler, Price, and Wortman 1985][Tausig 1986][Thoits 1983][Thoits 1995] </span>.       <br><br><br> <span style='color:gray'> Cohen, Sheldon and Gail M. Williamson. (1991) 'Stress and Infectious Disease in Humansx' Psychological Bulletin 109(l):5-24. <br> Coyne, James C. and Geraldine Downey. (1991) 'Social Factors and Psychopathology: Stress, Social Support, and Coping Processes.' Annual Review of Psychology. <br> Creed, Francis. (1985) 'Life Events and Physical Illness.' Journal of Psychosomatic Research 29(2): 113-23. <br> Kessler, Ronald C., Richard H. Price, and Camille B. Wortman. (1985) 'Social Factors in Psychopathology: Stress, Social Support, and Coping Processes.' Annual Review of Psychology 36:531-72. <br> Tausig, Mark. 1986. 'Measuring Life Events.' in Social Support, Life Events, and Depression, edited by N. Lin, A. Dean, and W.M. Ensel. Orlando, FL: Academic. p 71-93. <br> Thoits, Peggy A. (1983) 'Dimensions of Life Events that Influence Psychological Distress: An Evaluation and Synthesis of the Literature.' Psychosocial Stress: Trends in Theory and Research, edited by H.B. Kaplan. New York: Academic. p 33-103. <br>  Thoits, P. A. (1995). Stress, Coping, and Social Support Processes: Where Are We? What Next? Journal of Health and Social Behavior, 35, 53. </span>        "
    },
    mission_events_physical_workload:{
        title: "Mission Events &#8594; Physical workload",
        explanation: "Extravehicular activities are extremely demanding on the body. Spacesuits (in particular the Extravehicular Mobility Unit used by NASA) can cause injuries and discomfort, primarily due to the lack of mobility provided by the gas pressure layer <span style='color:gray'>[Diaz and Newman 2014]</span>. Additionally, the weight of the suit and the required walking past (e.g., during an emergency return scenario) increase metabolic workload, which in turn contributes to fatigue <span style='color:gray'>[Belobrajdic 2021]</span>.         <br><br><br> <span style='color:gray'> A. Diaz and D. Newman, (2014). 'Musculoskeletal human-spacesuit interaction model,'' 2014 IEEE Aerospace Conference, Big Sky, MT, USA, pp. 1-13. <br>  Belobrajdic, B., Melone, K., & Diaz-Artiles, A. (2021). Planetary extravehicular activity (EVA) risk mitigation strategies for long-duration space missions. Npj Microgravity, 7(1), 16. </span>        "
    },
    crew_size_density:{
        title: "Crew Size &#8594; Density",
        explanation: "In a given volume, increasing crew size can contribute to higher density <span style='color:gray'> [Fleming 1987]</span>. Complex tasks may also require more space <span style='color:gray'> [Stokols 1973]</span>, and one may feel like the volume is inadequate or the density is too high if there are several people working on a complex task together.        <br><br><br> <span style='color:gray'> Fleming, I., Baum, A., & Weiss, L. (1987). Social density and perceived control as mediators of crowding stress in high-density residential neighborhoods. Journal of Personality and Social Psychology, 52(5), 899–906. <br> Stokols, D. (1973). Physical, Social, and Personal Determinants of thePerception of Crowding. Environment and Behavior, 5(1). </span>"
    },
    social_support_stress_regulation:{
        title: "Social Support &#8594; Stress regulation",
        explanation: "The buffering model of social support hypothesizes that social support acts as a buffer to stress and allows an individual to more effectively manage and regulate stress  <span style='color:gray'> [Cohen and Willis 1985]</span>. Social support has been shown to reduce physiological distress, including anxiety and depression  <span style='color:gray'> [Fleming 1982][Lin 1999][Sarason 1997][Taylor 2011]</span>.        <br><br><br> <span style='color:gray'> Cohen, S., & Wills, T. A. (1985). Stress, Social Support, and the Buffering Hypothesis. Psychological Bulletin, 98(2), 310–357. <br> Fleming, R., Baum, A., Gisriel, M. M., & Gatchel, R. J. (1982). Mediating influences of social support on stress at Three Mile Island. Journal of human stress, 8(3), 14–22. <br> Lin, N., Ye, X., & Ensel, W. M. (1999). Social support and depressed mood: a structural analysis. Journal of health and social behavior, 40(4), 344–359. <br> Sarason, B. R., Sarason, I. G., & Gurung, R. A. R. (1997). Close personal relationships and health outcomes: A key to the role of social support. In S. Duck (Ed.), Handbook of personal relationships: Theory, research and interventions (2nd ed., pp. 547–573). John Wiley & Sons, Inc. <br> Taylor, S. E. (2011). Social support: A review. The Oxford handbook of health psychology, 1, 189-214. </span>        "
    },
    social_support_physical_health:{
        title: "Social Support &#8594; Physical health",
        explanation: "During a longitudinal study of nearly 7000 participants and a 9 year period, epidemiologists found that having social contacts predicts increased lifespan after controlling for socioeconomic status  <span style='color:gray'> [Berkman and Syme 1979]</span>.       <br><br><br> <span style='color:gray'> Berkman, L. F., & Syme, S. L. (1979). Social networks, host resistance, and mortality: a nine-year follow-up study of Alameda County residents. American journal of epidemiology, 109(2), 186–204.    </span>        "
    },
    social_support_kinship:{
        title: "Social Support &#8594; Kinship",
        explanation: "Providing support to others cements personal relationships and signifies mutual importance in an interpersonal relationship <span style='color:gray'>[Taylor 2011]</span>.        <br><br><br> <span style='color:gray'> Taylor, S. E. (2011). Social support: A review. The Oxford handbook of health psychology, 1, 189-214. </span>        "
    },
    social_monotony_boredom:{
        title: "Social Monotony &#8594; Boredom",
        explanation: "Those who experience social deprivation or isolation report boredom <span style='color:gray'>[Myers 1972][Thackray 1981]</span>.       <br><br><br> <span style='color:gray'> Myers T.I. (1972). Psychobiological factors associated with monotony tolerance. Report No AIR-26400-7/72-FR, Washington, DC, Am Inst for Research. <br> Thackray, Richard I. (1981). The Stress of Boredom and Monotony: A Consideration of the Evidence. Psychosomatic Medicine 43(2):p 165-176. </span> "
    },
    density_privacy:{
        title: "Density &#8594; Privacy",
        explanation: "High density also leads to crowding, which has been conceptualized as excessive social contact or insufficient personal space <span style='color:gray'>[Altman 1975]</span>. Density in social settings limits the ability to be alone and decreases the ability to be visually and auditorily separate from others <span style='color:gray'>[Marshall 1972]</span>. Under circumstances of crowding, people seek methods to regulate excessive social contact, such as seeking private spaces or increasing physical separation from others <span style='color:gray'>[Baum 1977]</span>.           <br><br><br> <span style='color:gray'> Altman I. (1975). The environment and social behavior: privacy, personal space, territory, crowding. Brooks/Cole, Monterey. <br> Marshall, N. J. (1972). Privacy and environment. Human Ecology, 1(2), 93–110. <br> Baum A, Valins S (1977) Architecture and social behavior: psychological studies of social density. Erlbaum, Hillsdale/New York. </span> "
    },
    density_stress_regulation:{
        title: "Density &#8594; Stress regulation",
        explanation: "In one study of urban residents (n = 57), high social density was significantly correlated with high reports of stress [Fleming 1987]. One theory is that high density situations lead to perceived loss of control, and low levels of control are associated with stress [Cohen 1980][Fleming 1987].         <br><br><br> <span style='color:gray'> Fleming, I., Baum, A., & Weiss, L. (1987). Social density and perceived control as mediators of crowding stress in high-density residential neighborhoods. Journal of Personality and Social Psychology, 52(5), 899–906. <br> Cohen, Sheldon. (1980). Aftereffects of stress on human performance and social behavior: A review of research and theory. Psychological bulletin. 88. 82-108.  </span> "
    },
    group_living_stress_regulation:{
        title: "Group living &#8594; Stress regulation",
        explanation: "A crew with good group living skills can act as a buffer to the negative effects of a stressful environment <span style='color:gray'> [Landon 2024]</span>.      <br><br><br> <span style='color:gray'> Landon, L. B., Miller, J. C., Bell, S. T., & Roma, P. G. (2024). When people start getting real: The Group Living Skills Survey for extreme work environments. Frontiers in Psychology, 15, 1348119. </span>  "
    },
    group_living_stress:{
        title: "Group living &#8594; Stress",
        explanation: "Group living can be a source of stress, for example during roommate conflicts [Dusselier 2005] and through increased conflicts over a mission <span style='color:gray'>[Stuster 2010]</span>.          <br><br><br> <span style='color:gray'> Stuster, J. W. (2010). Behavioral issues associated with long-duration space expeditions: Review and analysis of astronaut journals—Final report (No. NASA TM-2010-216130). </span>  "
    },
    extraversion_interpersonal_processes:{
        title: "Extraversion &#8594; Interpersonal processes",
        explanation: "Extraversion has high predictive validity on social behavior. In social situations with strangers, extroverts ask more questions, joke more, and initiate more conversations  <span style='color:gray'> [Matthews 2003]</span>. Based on a study of 50+ college students, distinctive patterns arose for matched dyads – introverts tend to focus on problem talk (expressing dissatisfaction with their own activities) and extroverts tend to cover a wider range of topics  <span style='color:gray'> [Thorne 1987]</span>. Based on a study of nearly 1700 individuals across 4 years, it was found that extraversion significantly predicts how people choose friends (with similar levels of extraversion) and the magnitude and likelihood of how individual levels of extraversion are influenced throughout the friendships (if A’s friend group is more extraverted that that of B’s, then A’s level of extraversion is more likely to increase than B’s)  <span style='color:gray'> [van Zalk 2020]</span>.         <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. <br> Thorne, A. (1987). The press of personality: A study of conversations between introverts and extraverts. Journal of Personality and Social Psychology, 53(4), 718–726. <br> van Zalk, M. H. W., Nestler, S., Geukes, K., Hutteman, R., & Back, M. D. (2020). The codevelopment of extraversion and friendships: Bonding and behavioral interaction mechanisms in friendship networks. Journal of Personality and Social Psychology, 118(6), 1269–1290. </span>        "
    },
    extraversion_social_support:{
        title: "Extraversion &#8594; Social support",
        explanation: "In a study of 100+ dyad (two-people) friendships, it was found that an individual's extraversion scores predicted the extent to which they felt close to their friend <span style='color:gray'> [Berry 2000]</span>.        <br><br><br> <span style='color:gray'> Berry, D. S., Willingham, J. K., & Thayer, C. A. (2000). Affect and Personality as Predictors of Conflict and Closeness in Young Adults’ Friendships. Journal of Research in Personality, 34(1), 84–107.   </span>        "
    },
    extraversion_nostalgia_homesickness:{
        title: "Extraversion &#8594; Nostalgia/Homesickness",
        explanation: "From a study of 200+ post-graduate students, students high in neuroticism and low in extraversion were more likely to be homesick. While these personality traits together explain 20% of the variance in homesickness, it drops to 4% after controlling for coping strategies; high neuroticism and low extraversion may be associated with dysfunctional stress coping strategies <span style='color:gray'> [Mohamed 1996][Matthews 2003]</span>.        <br><br><br> <span style='color:gray'> Mohamed, A. A. R. (1996) Stress processes in British and overseas students. Unpublished doctoral dissertation, University of Dundee. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press.  </span>        "
    },
    extraversion_group_living:{
        title: "Extraversion &#8594; Group living",
        explanation: "Extraversion is a key factor in adjustment (inner, subjective well being <span style='color:gray'>[Costa and McCrae 1980][Costa 1981]</span> and outer, perceived well being) to group living situations <span style='color:gray'> [Carp 1985]</span>.        <br><br><br> <span style='color:gray'> Costa, P. T., & McCrae, R. R. (1980). The influence of extraversion and neuroticism on subjective well-being. Journal of Gerontology, 38, 668-678. <br> Costa, P. T., McCrae, R. R., & Norris, A. H. (1981). Personal adjustment to aging: Longitudinal prediction from neuroticism and extraversion. Journal of Gerontology, 36, 78-85. <br> Carp, F. M. (1985). Relevance of Personality Traits to Adjustment in Group Living Situations. Journal of Gerontology, 40(5), 544–551.    </span>        "
    },
    openness_curiosity:{
        title: "Openness &#8594; Curiosity",
        explanation: "Openness is the trait that is most strongly associated with intelligence <span style='color:gray'>[Ackerman 1997]</span>, with a correlation of around 0.3 in studies with N=4-500 <span style='color:gray'>[Austin 2002][Ackerman and Heggestad 1997]</span>. Other studies around this size  Openness is associated with motivation to pursue ideas and intellectual activities, and mastery of intellectual skills may in turn prompt more openness <span style='color:gray'>[Rolfus 1996][Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Rolfhus, E. L. and Ackerman, P. L. (1996) Self-report knowledge: at the crossroads of ability, interest, and personality. Journal ofEducational Psychology, 88, 174–88. <br> Austin, E. J., Deary, I. J., Whiteman, M. C., Fowkes, F. G. R., Pedersen, N. L., Rabbitt, P., Bent, N. and McInnes, L. (2002) Relationships between ability and personality: does intelligence contribute positively to personal and social adjustment? Personality and Individual Differences, 32, 1391–411. <br> Ackerman, P. L. and Heggestad, E. D. (1997) Intelligence, personality and interests: evidence for overlapping traits. Psychological Bulletin, 121, 219–45. <br> Ackerman, P. L., & Heggestad, E. D. (1997). Intelligence, personality, and interests: Evidence for overlapping traits. Psychological Bulletin, 121(2), 219–245. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>"
    },
    agreeableness_group_living:{
        title: "Agreeableness &#8594; Group living",
        explanation: "Agreeableness may allow individuals to overcome the frustrations involved with group living <span style='color:gray'>[Graziano 1996]</span>. Furthermore, Wiggins (1991) suggested that agreeable individuals also more likely strive for intimacy, union, and solidarity with others.        <br><br><br> <span style='color:gray'> Graziano, W. G., Jensen-Campbell, L. A., & Hair, E. C. (1996). Perceiving interpersonal conflict and reacting to it: The case for agreeableness. Journal of Personality and Social Psychology, 70(4), 820–835. <br> Wiggins, J. S. (1991). Agency and communion as conceptual coordi* nates for the understanding and measurement ofinterpersonal behavior. In W. Grove & D. Cicchetti (Eds.), Thinking clearly about psychology: Essays in honor of PaulE. Meehl(pp. 89-113). Minneapolis: University of Minnesota Press. </span>        "
    },
    agreeableness_interpersonal_processes:{
        title: "Agreeableness &#8594; Interpersonal processes",
        explanation: "Agreeableness is a key component in social interactions. Highly agreeable individuals have less conflict, respond to conflicts more positively, and generally like their social interactions more <span style='color:gray'>[Graziano 1996]</span>. However, it’s been shown that highly agreeable individuals experience more distress and greater decreases in self-esteem following conflict <span style='color:gray'>[Suls 1998][Barrett and Pietromonaco 1997]</span>.        <br><br><br> <span style='color:gray'> Graziano, W. G., Jensen-Campbell, L. A., & Hair, E. C. (1996). Perceiving interpersonal conflict and reacting to it: The case for agreeableness. Journal of Personality and Social Psychology, 70(4), 820–835. <br> Suls, J., Martin, R. and David, J. P. (1998) Person–environment fit and its limits: agreeableness, neuroticism, and emotional reactivity to interpersonal conflict. Personality and Social Psychology Bulletin, 24, 88–98. <br> Barrett, L. F. and Pietromonaco, P. R. (1997) Accuracy of the five-factor model in predicting perceptions of daily social interactions. Personality and Social Psychology Bulletin, 23, 1173–87.  </span>        "
    },
    neuroticism_anxiety:{
        title: "Neuroticism  &#8594; Anxiety",
        explanation: "Patients diagnosed with generalized anxiety disorder tend to have higher neuroticism scores, and often anxiety and depression are comorbid (co-occurring) <span style='color:gray'> [Eysenck 1985][Matthews 2003]</span>.       <br><br><br> <span style='color:gray'> Eysenck, H. J. and Eysenck, M. W. (1985) Personality and individual differences: a natural science approach. New York: Plenum. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>        "
    },
    neuroticism_depression:{
        title: "Neuroticism  &#8594; Depression",
        explanation: "Numerous studies suggest depression risk is higher in individuals with higher neuroticism scores <span style='color:gray'>[Bagby 1995][Surtees and Wainwright 1996][Ormel 2001][Enns 2001][Tyssen and Vaglum 2002][Matthews 2003]</span>.        <br><br><br> <span style='color:gray'> Bagby, R. M., Joffe, R. T., Parker, J. D. A., Kalemba, V. and Harkness, K. L. (1995) Major depression and the five factor model of personality. Journal ofPersonality Disorders, 9, 224–34. <br> Surtees, P. G. and Wainwright, N. W. J. (1996) Fragile states of mind: neuroticism, vulnerability and the long-term outcome of depression. British Journal ofPsychiatry, 169, 338–47. <br> Ormel, J., Oldehinkel, A. J. and Brilman, E. I. (2001) The interplay and etiological continuity of neuroticism, difficulties, and life events in the etiology of major and subsyndromal, first and recurrent depressive episodes in later life. American Journal ofPsychiatry, 158, 885–91. <br> Enns, M. W., Cox, B. J., Sareen, J. and Freeman, P. (2001) Adaptive and maladaptive perfectionism in medical students: a longitudinal investigation. Medical Education, 35, 1034–42. <br> Tyssen, R., & Vaglum, P. (2002). Mental health problems among young doctors: an updated review of prospective studies. Harvard review of psychiatry, 10(3), 154-165. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span>  "
    },
    neuroticism_interpersonal_processes:{
        title: "Neuroticism  &#8594; Interpersonal processes",
        explanation: "In a study of 100+ dyad (two-people) friendships, it was found that an individual’s neuroticism scores predicted the number of conflicts they had with their friend <span style='color:gray'>[Berry 2000]</span>.      <br><br><br> <span style='color:gray'> Berry, D. S., Willingham, J. K., & Thayer, C. A. (2000). Affect and Personality as Predictors of Conflict and Closeness in Young Adults’ Friendships. Journal of Research in Personality, 34(1), 84–107. </span>  "
    },
    neuroticism_nostalgia_homesickness:{
        title: "Neuroticism  &#8594; Nostalgia/Homesickness",
        explanation: "From a study of 200+ post-graduate students, students high in neuroticism and low in extraversion were more likely to be homesick. While these personality traits together explain 20% of the variance in homesickness, it drops to 4% after controlling for coping strategies; high neuroticism and low extraversion may be associated with dysfunctional stress coping strategies <span style='color:gray'>[Mohamed 1996][Matthews 2003]</span>.         <br><br><br> <span style='color:gray'> Berry, D. S., Willingham, J. K., & Thayer, C. A. (2000). Affect and Personality as Predictors of Conflict and Closeness in Young Adults’ Friendships. Journal of Research in Personality, 34(1), 84–107. </span>  "
    },
    neuroticism_nostalgia_stress:{
        title: "Neuroticism  &#8594; Stress",
        explanation: "Neuroticism is the trait that has been found to be most salient for stress, lower life satisfaction, and lower subjective well-being <span style='color:gray'>[DeNeve and Cooper 1998][Matthews 2003]</span>.     <br><br><br> <span style='color:gray'> DeNeve, K. M. and Cooper, H. (1998) The happy personality: a meta-analysis of 137 personality traits and subjective well-being. Psychological Bulletin, 124, 197–229. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press.    </span>  "
    },
    neuroticism_group_living:{
        title: "Neuroticism  &#8594; Group living",
        explanation: "Neuroticism is a key factor in adjustment (inner, subjective well being <span style='color:gray'>[Costa and McCrae 1980][Costa 1981]</span> and outer, perceived well being) to group living situations, with higher neuroticism associated with lower levels of adjustment <span style='color:gray'>[Carp 1985]</span>.    <br><br><br> <span style='color:gray'> Costa, P. T., & McCrae, R. R. (1980). The influence of extraversion and neuroticism on subjective well-being. Journal of Gerontology, 38, 668-678. <br> Costa, P. T., McCrae, R. R., & Norris, A. H. (1981). Personal adjustment to aging: Longitudinal prediction from neuroticism and extraversion. Journal of Gerontology, 36, 78-85. <br> Carp, F. M. (1985). Relevance of Personality Traits to Adjustment in Group Living Situations. Journal of Gerontology, 40(5), 544–551.  </span>  "
    },
    conscientiousness_crew_performance:{
        title: "Conscientiousness &#8594; Crew performance",
        explanation: "Meta-analyses reveal that conscientiousness is the most consistent factor predicting work performance and desirable work behaviors (e.g., integrity) <span style='color:gray'>[Matthews 2003]</span>.     <br><br><br> <span style='color:gray'>Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press.    </span> "
    },
    conscientiousness_physical_health:{
        title: "Conscientiousness &#8594; Physical health",
        explanation: "Conscientiousness may be a predictor for following medical advice and regimens <span style='color:gray'>[Christensen and Smith 1995]</span>.     <br><br><br> <span style='color:gray'>Christensen, A. J. and Smith, T. W. (1995) Personality and patient adherence: Correlates of the five-factor model in renal analysis. Journal ofBehavioral Medicine, 18, 305–13.        </span> "
    },
    conscientiousness_action_processes:{
        title: "Conscientiousness &#8594; Action processes",
        explanation: "When faced with stress, highly conscientious people tend to use active, problem-focused strategies  <span style='color:gray'>[Watson and Hubbard 1996][Matthews 2003]</span>.         <br><br><br> <span style='color:gray'> Watson, D. and Hubbard, B. (1996) Adaptational style and dispositional structure: coping in the context of the five-factor model. Journal ofPersonality, 64, 737–74.<br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press.  </span> "
    },
    genetics_physical_health:{
        title: "Genetics &#8594; Physical health",
        explanation: "Genes contribute to predisposition to chronic illnesses and diseases, physical activity, and aging <span style='color:gray'>[Kujala 2011]</span>. Telomere (DNA-protein complexes capping chromosome ends) shortening may be correlated to physical inactivity and chronic diseases <span style='color:gray'>[Puterman 2010]</span>.        <br><br><br> <span style='color:gray'> Kujala, U. M. (2011). Physical activity, genes, and lifetime predisposition to chronic disease. European Review of Aging and Physical Activity, 8(1), 31–36. <br> Puterman E, Lin J, Blackburn E, O'Donovan A, Adler N, Epel E (2010) The power of exercise: buffering the effect of chronic stress on telomere length. PLoS ONE 5:e10837. </span> "
    },
    genetics_extraversion:{
        title: "Genetics &#8594; Extraversion",
        explanation: "While the conclusion remains tentative, genetic variance explains for 35 to 39% of the variance in extraversion based on 12 twin studies over different familial structures and environmental conditions <span style='color:gray'>[Matthews 2003]</span>.      <br><br><br> <span style='color:gray'> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span> "
    },
    genetics_agreeableness:{
        title: "Genetics &#8594; Agreeableness",
        explanation: "From the Minnesota Study of Twins, one of the most comprehensive studies of twins reared apart conducted in history, more than 100 sets of twins were studied. It was found that genetic variation accounted for about 30% of the variance in agreeability <span style='color:gray'>[Bouchard 1994][Matthews 2003]</span>.        <br><br><br> <span style='color:gray'> Bouchard, T. J. (1994). Genes, Environment, and Personality. Science, 264(5166), 1700–1701. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span> "
    },
    genetics_neuroticism:{
        title: "Genetics &#8594; Neuroticism",
        explanation: "From the Minnesota Study of Twins, one of the most comprehensive studies of twins reared apart conducted in history, more than 100 sets of twins were studied. It was found that genetic variation accounted for about 50% of the variance in agreeability <span style='color:gray'>[Bouchard 1994][Matthews 2003]</span>.        <br><br><br> <span style='color:gray'> Bouchard, T. J. (1994). Genes, Environment, and Personality. Science, 264(5166), 1700–1701. <br> Matthews, G., Deary, I. J., & Whiteman, M. C. (2003). Personality Traits, SECOND EDITION. Cambridge University Press. </span> "
    },
    resilience_stress_regulation:{
        title: "Resilience &#8594; Stress regulation",
        explanation: "From a survey of 2000+ individuals, it was found that higher resilience has a protective effect against stress, but the effect diminishes in high-strain, difficult work environments. The relationship between hardiness and stress are mixed. Hardiness has been found to regulate stress <span style='color:gray'> [Pengilly and Dowd 2000]</span>, but other investigators have not found that hardiness precludes negative reactions to adverse events <span style='color:gray'> [Cohen and Edwards 1989]</span> – which may be a similar phenomenon to the limited protective effect resilience has on challenging work environments.         <br><br><br> <span style='color:gray'> Pengilly, J. W. and Dowd, E. T. (2000) Hardiness and social support as moderators of stress. Journal ofClinical Psychology, 56, 813–20. <br> Cohen, S. and Edwards, J. (1989) Personality characteristics as moderators of the relationship between stress and health. In R. W. Neufeld (ed.), Advances in investigations of psychological stress. New York: Wiley. </span>"
    },
    psychological_resources_stress_regulation:{
        title: "psychological_resources &#8594; Stress regulation",
        explanation: "Based on a comprehensive literature review in the stress management field of over 150 papers describing over 1000 non-unique techniques employed, cognitive-behavioral techniques was the most commonly used for stress regulation, followed by imagery/meditation techniques <span style='color:gray'>[Ong 2004]</span>. In studies with psychological support provided, participants showed decreased vulnerability to stress and hardiness <span style='color:gray'>[Santos-Ruiz 2017][Sahranavard 2019]</span>.        <br><br><br> <span style='color:gray'> Ong, L., Linden, W., & Young, S. (2004). Stress management: what is it?. Journal of psychosomatic research, 56(1), 133-137. <br> Santos-Ruiz, A., Robles-Ortega, H., Pérez-García, M., & Peralta-Ramírez, M. I. (2017). Effects of the cognitive-behavioral therapy for stress management on executive function components. The Spanish journal of psychology, 20, E11. <br> Sahranavard, S., Esmaeili, A., Salehiniya, H., & Behdani, S. (2019). The effectiveness of group training of cognitive behavioral therapy-based stress management on anxiety, hardiness and self-efficacy in female medical students. Journal of education and health promotion, 8(1), 49. </span>   "
    },
    psychological_resources_anxiety:{
        title: "psychological_resources &#8594; Anxiety",
        explanation: "In studies with psychological support provided, participants showed decreased anxiety, even with long-term improvements  <span style='color:gray'>[Sahranavard 2019][Dimauro 2013]</span>.       <br><br><br> <span style='color:gray'> Sahranavard, S., Esmaeili, A., Salehiniya, H., & Behdani, S. (2019). The effectiveness of group training of cognitive behavioral therapy-based stress management on anxiety, hardiness and self-efficacy in female medical students. Journal of education and health promotion, 8(1), 49. <br> DiMauro, J., Domingues, J., Fernandez, G., & Tolin, D. F. (2013). Long-term effectiveness of CBT for anxiety disorders in an adult outpatient clinic sample: A follow-up study. Behaviour research and therapy, 51(2), 82-86. </span>   "
    },
    training_and_preparation_team_processes_invisible:{
        title: "Training and Preparation &#8594; Team processes",
        explanation: "Team-based training was not found to have an explicit effect on performance, but rather on transition (e.g., shared mental models), action (e.g., coordination), and interpersonal (e.g., trust) processes <span style='color:gray'>[Landon and Paoletti 2020]</span>.      <br><br><br> <span style='color:gray'> Landon, L. B., & Paoletti, J. (2020). Extreme roommates: Exploring group-living skills as a unique team skill area. In Psychology and human performance in space programs (pp. 217-235). CRC Press. </span>        "
    },
    training_and_preparation_physical_health:{
        title: "Training and Preparation &#8594; Physical health",
        explanation: "Training comprise fitness regimes and preparation of skills to maintain physical and physiological health in space <span style='color:gray'>[Steimle and Norberg 2013]</span>.       <br><br><br> <span style='color:gray'> Steimle, H., Norberg, C. (2013). Astronaut selection and training. In: Norberg, C. (eds) Human Spaceflight and Exploration. Springer Praxis Books. Springer, Berlin, Heidelberg.</span>"
    },
    training_and_preparation_group_living:{
        title: "Training and Preparation &#8594; Group living",
        explanation: "During astronaut training, teams will spend part of their two-year training period learning and practicing expeditionary skills during operational field events, unlike other military groups who do not specifically practice team skills in non-work environments <span style='color:gray'>[Landon and Paoletti 2020]</span>.      <br><br><br> <span style='color:gray'> Landon, L. B., & Paoletti, J. (2020). Extreme roommates: Exploring group-living skills as a unique team skill area. In Psychology and human performance in space programs (pp. 217-235). CRC Press. </span> "
    },
    ground_support_psychological_resources:{
        title: "Ground Support &#8594; Psychological resources",
        explanation: "The current spaceflight (ISS) model of behavioral health care and intervention relies on private medical conferences. The reliance on access to ground support renders the current model of psychotherapy impossible with increased mission distance <span style='color:gray'>[Ad Hoc Committee 2008]</span>. Alternatives, including email and text communication, makes psychological assessment and potential treatment far more difficult <span style='color:gray'>[Ad Hoc Committee 2008]</span>.       <br><br><br> <span style='color:gray'> Ad Hoc Committee of Members of the Space Medicine Association and the Society of NASA Flight Surgeons. Human health and performance for long-duration spaceflight. Aviat Space Environ Med 2008; 79:629–35. </span>        "
    },
    ground_support_medical_capability:{
        title: "Ground Support &#8594; Medical resources",
        explanation: "Current medical operations in Low Earth Orbit rely on real-time communication from flight surgeons and medical experts to provide evaluations and recommendations <span style='color:gray'>[Antonsen 2022]</span>. The relatively short distance can also allow the ground team to resupply medical resources and offer evacuation as a possibility <span style='color:gray'>[Antonsen 2022]</span>.     <br><br><br> <span style='color:gray'> Antonsen, E. L., Myers, J. G., Boley, L., Arellano, J., Kerstman, E., Kadwa, B., Buckland, D. M., & Van Baalen, M. (2022). Estimating medical risk in human spaceflight. Npj Microgravity, 8(1), 8.  </span>        "
    },
    medical_capability_physical_health:{
        title: "Medical Resources &#8594; Physical health",
        explanation: "Physical health is maintained when the capability matches or exceeds the medical needs. Medical needs may be dependent on initial conditions and remain high even with access to medical care. Based on a study of nearly 300 Iraqi refugees in southeastern Michigan, 100% and 99% of respondents indicated they needed medical and dental care, respectively – this remained consistent in the first two years of arrival [Wright 2016].         <br><br><br> <span style='color:gray'> Wright, A.M., Aldhalimi, A., Lumley, M.A. et al. (2016). Determinants of resource needs and utilization among refugees over time. Soc Psychiatry Psychiatr Epidemiol 51, 539–549.</span>"
    },
    family_and_friends:{
        title: "Family and Friends &#8594; ",
        explanation: "Explanations."
    },
    supplies:{
        title: "Supplies &#8594; ",
        explanation: "Explanations."
    },
    food:{
        title: "Food &#8594; ",
        explanation: "Explanations."
    },
    exercise_equipment:{
        title: "Exercise Equipment &#8594; ",
        explanation: "Explanations."
    },
    physical_ergonomics:{
        title: "Physical Ergonomics &#8594; ",
        explanation: "Explanations."
    },
    circulation_paths:{
        title: "Circulation Paths &#8594; ",
        explanation: "Explanations."
    },
    privacy:{
        title: "Privacy &#8594; ",
        explanation: "Explanations."
    },
    lighting:{
        title: "lighting &#8594; ",
        explanation: "Explanations."
    },
    environmental_monotony:{
        title: "Environmental Monotony &#8594; ",
        explanation: "Explanations."
    },
    layout:{
        title: "Layout &#8594; ",
        explanation: "Explanations."
    },
    reconfigurability:{
        title: "reconfigurability &#8594; ",
        explanation: "Explanations."
    },
    fixtures:{
        title: "Fixtures &#8594; ",
        explanation: "Explanations."
    },
    light_dark_cycles:{
        title: "Light/Dark Cycles &#8594; ",
        explanation: "Explanations."
    },
    altered_gravity:{
        title: "Altered Gravity &#8594; ",
        explanation: "Explanations."
    },
    atmosphere:{
        title: "Atmosphere &#8594; ",
        explanation: "Explanations."
    },
    radiation:{
        title: "Radiation &#8594; ",
        explanation: "Explanations."
    },
    environmental_control:{
        title: "Environmental Control &#8594; ",
        explanation: "Explanations."
    },
    habitable_volume:{
        title: "Habitable Volume &#8594; ",
        explanation: "Explanations."
    },
    acoustics:{
        title: "Temperature/Humidity &#8594; ",
        explanation: "Explanations."
    },
    nutrition:{
        title: "Nutrition &#8594; ",
        explanation: "Explanations."
    },
    physical_workload:{
        title: "Physical Workload &#8594; ",
        explanation: "Explanations."
    },
    cognitive_workload:{
        title: "Cognitive Workload &#8594; ",
        explanation: "Explanations."
    },
    media_attention:{
        title: "Media Attention &#8594; ",
        explanation: "Explanations."
    },
    conflicts:{
        title: "Conflicts &#8594; ",
        explanation: "Explanations."
    },
    injuries:{
        title: "Injuries &#8594; ",
        explanation: "Explanations."
    },
    transition_processes:{
        title: "Transition Processes &#8594; ",
        explanation: "Explanations."
    },
    action_processes:{
        title: "Action Processes &#8594; ",
        explanation: "Explanations."
    },
    interpersonal_processes:{
        title: "interpersonal Processes &#8594; ",
        explanation: "Explanations."
    },
    stress_regulation:{
        title: "Stress Regulation &#8594; ",
        explanation: "Explanations."
    },
    placemaking:{
        title: "Placemaking &#8594; ",
        explanation: "Explanations."
    },
    sleep:{
        title: "Sleep &#8594; ",
        explanation: "Explanations."
    },
    physical_health:{
        title: "Physical Health &#8594; ",
        explanation: "Explanations."
    },
    sleep_quality:{
        title: "Sleep Quality &#8594; ",
        explanation: "Explanations."
    },
    anxiety:{
        title: "Anxiety &#8594; ",
        explanation: "Explanations."
    },
    agency:{
        title: "Agency &#8594; ",
        explanation: "Explanations."
    },
    stress:{
        title: "Stress &#8594; ",
        explanation: "Explanations."
    },
    crew_performance:{
        title: "Crew Performance &#8594; ",
        explanation: "Explanations."
    },
    attachment:{
        title: "Attachment &#8594; ",
        explanation: "Explanations."
    },
    trust:{
        title: "Trust &#8594; ",
        explanation: "Explanations."
    },
    curiosity:{
        title: "Curiosity &#8594; ",
        explanation: "Explanations."
    },
    kinship:{
        title: "Kinship &#8594; ",
        explanation: "Explanations."
    },
    boredom:{
        title: "Boredom &#8594; ",
        explanation: "Explanations."
    },
    tranquility:{
        title: "Tranquility &#8594; ",
        explanation: "Explanations."
    },
    discontentment:{
        title: "Discontentment &#8594; ",
        explanation: "Explanations."
    },
    nostalgia_homesickness:{
        title: "Nostalgia/Homesickness &#8594; ",
        explanation: "Explanations."
    },
    fear:{
        title: "Fear &#8594; ",
        explanation: "Explanations."
    },
    awe:{
        title: "Awe &#8594; ",
        explanation: "Explanations."
    },
    depression:{
        title: "Depression &#8594; ",
        explanation: "Explanations."
    },
};

clickedBox = null;
document.addEventListener('DOMContentLoaded', function () {
    //Get all inner box elements
    var innerBoxes = document.querySelectorAll('.box div');

    //Format text to the desired format
    function formatToSmallBoxName(text) {
        tmp = text.trim().toLowerCase().replace(/\s+/g, '_');
        tmp2 = tmp.replace(/\//g, "_");
        if (tmp2 === 'individual_traits') return 'individual_traits_invisible'
        if (tmp2 === 'social_composition') return 'social_composition_invisible'
        if (tmp2 === 'team_processes') return 'team_processes_invisible'
        return tmp2;
    }

    function getRightBoxes(smallBoxName){
        switch(smallBoxName){
            case "selection":
                return ['selection', 'individual_traits_invisible', 'social_composition_invisible', 'extraversion', 'openness', 'agreeableness', 'genetics', 'conscientiousness', 'neuroticism', 'resilience', 'emotional_bandwidth', 'crew_size', 'social_support', 'social_monotony', 'density', 'group_living']
            case 'individual_traits_invisible':
                return ['individual_traits_invisible', 'extraversion', 'openness', 'agreeableness', 'genetics', 'conscientiousness', 'neuroticism', 'resilience', 'emotional_bandwidth'];    
            case 'social_composition_invisible':
                return ['social_composition_invisible', 'crew_size', 'social_support', 'social_monotony', 'density', 'group_living']
            case 'team_processes_invisible':
                return ['team_processes_invisible', 'transition_processes', 'action_processes', 'interpersonal_processes']
            case "distance_from_earth":
                return ['distance_from_earth', 'communication_delay', 'resource_constrained', 'isolated','medical_capability','food']
            case "mission_duration":
                return ['mission_duration', 'isolated', 'boredom']
            case "communication_delay":
                return ['communication_delay', 'ground_support', 'social_monotony','transition_processes','stress']
            case "isolated":
                return ['isolated', 'social_monotony', 'ground_support', 'physical_health','stress']
            case "confined":
                return ['confined', 'social_monotony', 'privacy']
            case "extreme":
                return ['extreme', 'genetics', 'resource_constrained', 'altered_gravity', 'radiation','light_dark_cycles']
            case "resource_constrained":
                return ['resource_constrained', 'supplies','food']
            case "mission_demands":
                return ['mission_demands', 'cognitive_workload', 'physical_workload','fatigue']
            case "mission_events":
                return ['mission_events', 'stress', 'physical_workload']
            case "crew_size":
                return ['crew_size', 'density']
             case "social_support":
                return ['social_support', 'stress_regulation', 'physical_health', 'kinship']
            case "social_monotony":
                return ['social_monotony', 'boredom']
            case "density":
                return ['density', 'privacy', 'stress_regulation']
            case "group_living":
                return ['group_living', 'stress_regulation', 'stress']
            case "extraversion":
                return ['extraversion', 'interpersonal_processes', 'social_support', 'nostalgia_homesickness','group_living']
            case "openness":
                return ['openness', 'curiosity']
            case "agreeableness":
                return ['agreeableness', 'interpersonal_processes', 'group_living']
            case "neuroticism":
                return ['neuroticism', 'anxiety', 'depression', 'interpersonal_processes', 'stress','nostalgia_homesickness','group_living']
            case "conscientiousness":
                return ['conscientiousness', 'crew_performance', 'physical_health', 'action_processes']
            case "genetics":
                return ['genetics', 'physical_health', 'extraversion', 'agreeableness', 'neuroticism']
            case "resilience":
                return ['resilience', 'stress_regulation']
            case "emotional_bandwidth":
                return ['emotional_bandwidth', 'stress_regulation', 'social_support', 'depression', 'anxiety', 'discontentment', 'stress', 'interpersonal_processes', 'kinship']
            case "psychological_resources":
                return ['psychological_resources', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "training_and_preparation":
                return ['training_and_preparation', 'physical_health', 'group_living', 'team_processes_invisible', 'transition_processes', 'action_processes', 'interpersonal_processes']
            case "ground_support":
                return ['ground_support', 'family_and_friends', 'psychological_resources', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "medical_capability":
                return ['medical_capability', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "family_and_friends":
                return ['family_and_friends', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "supplies":
                return ['supplies', 'medical_capability', 'exercise_equipment', 'fixtures', 'food', 'cognitive_function', 'environmental_monotony', 'physical_workload', 'social_monotony', 'nutrition', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'boredom', 'stress_regulation', 'interpersonal_processes', 'discontentment', 'kinship']
            case "food":
                return ['food', 'nutrition', 'environmental_monotony', 'sleep', 'cognitive_function', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress', 'discontentment']
            case "exercise_equipment":
                return ['exercise_equipment', 'physical_workload', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "light_dark_cycles":
                return ['light_dark_cycles', 'sleep']
            case "altered_gravity":
                return ['altered_gravity', 'physical_health']
            case "radiation":
                return ['radiation', 'physical_health']
            case "atmosphere":
                return ['atmosphere', 'sleep', 'crew_performance']
            case "acoustics":
                return ['acoustics', 'sleep', 'crew_performance']
            case "nutrition":
                return ['nutrition', 'physical_health']
            case "habitable_volume":
                return ['habitable_volume', 'privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "environmental_control":
                return ['environmental_control', 'physical_ergonomics', 'sleep', 'cognitive_function', 'acoustics', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress', 'environmental_monotony', 'boredom', 'stress_regulation', 'discontentment']
            case "circulation_paths":
                return ['circulation_paths', 'reconfigurability', 'group_living', 'placemaking', 'interpersonal_processes', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'kinship']
            case "layout":
                return ['layout', 'reconfigurability', 'circulation_paths', 'placemaking', 'group_living', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'interpersonal_processes', 'kinship']
            case "lighting":
                return ['lighting', 'privacy', 'habitable_volume', 'physical_ergonomics', 'layout', 'placemaking', 'sleep', 'stress_regulation', 'cognitive_function', 'acoustics', 'reconfigurability', 'circulation_paths', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress', 'tranquility', 'environmental_monotony', 'group_living', 'boredom', 'interpersonal_processes', 'kinship']
            case "privacy":
                return ['privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "physical_ergonomics":
                return ['physical_ergonomics', 'cognitive_function', 'acoustics', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'environmental_monotony', 'boredom', 'stress_regulation', 'discontentment']
            case "fixtures":
                return ['fixtures', 'social_monotony', 'interpersonal_processes', 'kinship']
            case "reconfigurability":
                return ['reconfigurability', 'placemaking', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment']
            case "environmental_monotony":
                return ['environmental_monotony', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "physical_workload":
                return ['physical_workload', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "cognitive_workload":
                return ['cognitive_workload', 'stress_regulation', 'sleep', 'depression', 'anxiety', 'discontentment', 'stress', 'sleep_quality']
            case "media_attention":
                return ['media_attention', 'privacy', 'cognitive_workload', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "conflicts":
                return ['conflicts', 'interpersonal_processes', 'action_processes', 'kinship', 'crew_performance']
            case "injuries":
                return ['injuries', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "transition_processes":
                return ['transition_processes', 'crew_performance']
            case "action_processes":
                return ['action_processes', 'crew_performance']
            case "interpersonal_processes":
                return ['interpersonal_processes', 'crew_performance', 'kinship']
            case "stress_regulation":
                return ['stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "placemaking":
                return ['placemaking', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment']
            case "sleep":
                return ['sleep', 'depression', 'anxiety', 'sleep_quality']
            case "cognitive_function":
                return ['cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "sleep_quality":
                return ['sleep_quality']
            case "anxiety":
                return ['anxiety']
            case "agency":
                return ['agency']
            case "stress":
                return ['stress']
            case "crew_performance":
                return ['crew_performance']
            case "attachment":
                return ['attachment']
            case "trust":
                return ['trust']
            case "curiosity":
                return ['curiosity']
            case "kinship":
                return ['kinship']
            case "boredom":
                return ['boredom']
            case "tranquility":
                return ['tranquility']
            case "discontentment":
                return ['discontentment']
            case "nostalgia_homesickness":
                return ['nostalgia_homesickness']
            case "fear":
                return ['fear']
            case "awe":
                return ['awe']
            case "depression":
                return ['depression']
            default:
                return []
        }
    }

    //All boxes the current one is related to, left and right
    function getRelatedBoxes(smallBoxName) {
        switch (smallBoxName) {
            case 'selection':
                return ['selection', 'individual_traits_invisible', 'social_composition_invisible', 'extraversion', 'openness', 'agreeableness', 'genetics', 'conscientiousness', 'neuroticism', 'resilience', 'emotional_bandwidth', 'crew_size', 'social_support', 'social_monotony', 'density', 'group_living']
            case 'individual_traits_invisible':
                return ['individual_traits_invisible', 'selection', 'extraversion', 'openness', 'agreeableness', 'genetics', 'conscientiousness', 'neuroticism', 'resilience', 'emotional_bandwidth'];
            case 'social_composition_invisible':
                return ['social_composition_invisible', 'selection', 'crew_size', 'social_support', 'social_monotony', 'density', 'group_living']
            case 'team_processes_invisible':
                return ['team_processes_invisible', 'training_and_preparation', 'transition_processes', 'action_processes', 'interpersonal_processes']
            case 'distance_from_earth':
                return ['distance_from_earth', 'communication_delay', 'resource_constrained', 'isolated', 'medical_capability','food']
            case 'mission_duration':
                return ['mission_duration', 'isolated', 'boredom']
            case 'communication_delay':
                return ['communication_delay', 'ground_support', 'social_monotony','transition_processes','stress', 'distance_from_earth']
            case "isolated":
                return ['isolated', 'social_monotony', 'ground_support', 'physical_health', 'stress', 'distance_from_earth', 'mission_duration','extreme']
            case "confined":
                return ['confined', 'social_monotony', 'privacy']
            case "extreme":
                return ['extreme', 'genetics', 'resource_constrained', 'altered_gravity', 'radiation', 'light_dark_cycles']
            case "resource_constrained":
                return ['resource_constrained', 'supplies', 'food', 'distance_from_earth', 'extreme']
            case "mission_demands":
                return ['mission_demands', 'cognitive_workload', 'physical_workload','fatigue']
            case 'mission_events':
                return ['mission_events', 'stress', 'physical_workload']
            case "crew_size":
                return ['crew_size', 'density']
            case "social_support":
                return ['social_support', 'stress_regulation', 'physical_health', 'kinship','interpersonal_process','extraversion']
            case "social_monotony":
                return ['social_monotony', 'boredom','communication_delay','confined','isolated']
            case "density":
                return ['density', 'privacy', 'stress_regulation','crew_size','habitable_volume']
            case "group_living":
                return ['group_living', 'stress_regulation', 'stress']
            case "extraversion":
                return ['extraversion', 'interpersonal_processes', 'social_support', 'nostalgia_homesickness','group_living','genetics']
            case "openness":
                return ['openness', 'curiosity']
            case "agreeableness":
                return ['agreeableness', 'interpersonal_processes', 'group_living','genetics']
            case "neuroticism":
                return ['neuroticism', 'anxiety', 'depression', 'interpersonal_processes', 'stress','nostalgia_homesickness','group_living','genetics']
            case "conscientiousness":
                return ['conscientiousness', 'crew_performance', 'physical_health', 'action_processes']
            case "genetics":
                return ['genetics', 'cognitive_function', 'extraversion', 'agreeableness', 'neuroticism','extreme']
            case "resilience":
                return ['resilience', 'stress_regulation']
            case 'emotional_bandwidth':
                return ['emotional_bandwidth', 'stress_regulation', 'social_support', 'depression', 'anxiety', 'discontentment', 'stress', 'interpersonal_processes', 'kinship']
            case 'genetics':
                return ['genetics', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case 'resilience':
                return ['resilience', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "psychological_resources":
                return ['psychological_resources', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "training_and_preparation":
                return ['training_and_preparation', 'physical_health', 'group_living', 'team_processes_invisible', 'transition_processes', 'action_processes', 'interpersonal_processes']
            case "ground_support":
                return ['ground_support', 'family_and_friends', 'psychological_resources', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "medical_capability":
                return ['medical_capability', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "family_and_friends":
                return ['family_and_friends', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "supplies":
                return ['supplies', 'medical_capability', 'exercise_equipment', 'fixtures', 'food', 'cognitive_function', 'environmental_monotony', 'physical_workload', 'social_monotony', 'nutrition', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'boredom', 'stress_regulation', 'interpersonal_processes', 'discontentment', 'kinship']
            case "food":
                return ['food', 'nutrition', 'environmental_monotony', 'sleep', 'cognitive_function', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress', 'discontentment']
            case "exercise_equipment":
                return ['exercise_equipment', 'physical_workload', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "light_dark_cycles":
                return ['light_dark_cycles', 'sleep','extreme']
            case "altered_gravity":
                return ['altered_gravity', 'physical_health','extreme']
            case "radiation":
                return ['radiation', 'physical_health','extreme']
            case "atmosphere":
                return ['atmosphere', 'sleep', 'crew_performance','environmental_control']
            case "acoustics":
                return ['acoustics', 'sleep', 'crew_performance']
            case "nutrition":
                return ['nutrition', 'physical_health','food']
            case "habitable_volume":
                return ['habitable_volume', 'privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "environmental_control":
                return ['environmental_control', 'physical_ergonomics', 'sleep', 'cognitive_function', 'acoustics', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress', 'environmental_monotony', 'boredom', 'stress_regulation', 'discontentment']
            case "circulation_paths":
                return ['circulation_paths', 'reconfigurability', 'group_living', 'placemaking', 'interpersonal_processes', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'kinship']
            case "layout":
                return ['layout', 'reconfigurability', 'circulation_paths', 'placemaking', 'group_living', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'interpersonal_processes', 'kinship']
            case "lighting":
                return ['lighting', 'privacy', 'habitable_volume', 'physical_ergonomics', 'layout', 'placemaking', 'sleep', 'stress_regulation', 'cognitive_function', 'acoustics', 'reconfigurability', 'circulation_paths', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress', 'tranquility', 'environmental_monotony', 'group_living', 'boredom', 'interpersonal_processes', 'kinship']
            case "privacy":
                return ['privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "physical_ergonomics":
                return ['physical_ergonomics', 'cognitive_function', 'acoustics', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'environmental_monotony', 'boredom', 'stress_regulation', 'discontentment']
            case "fixtures":
                return ['fixtures', 'social_monotony', 'interpersonal_processes', 'kinship']
            case "reconfigurability":
                return ['reconfigurability', 'placemaking', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment']
            case "environmental_monotony":
                return ['environmental_monotony', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "physical_workload":
                return ['physical_workload', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "cognitive_workload":
                return ['cognitive_workload', 'stress_regulation', 'sleep', 'depression', 'anxiety', 'discontentment', 'stress', 'sleep_quality']
            case "media_attention":
                return ['media_attention', 'privacy', 'cognitive_workload', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "conflicts":
                return ['conflicts', 'interpersonal_processes', 'action_processes', 'kinship', 'crew_performance']
            case "injuries":
                return ['injuries', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "transition_processes":
                return ['transition_processes', 'crew_performance']
            case "action_processes":
                return ['action_processes', 'crew_performance', 'conscientiousness']
            case "interpersonal_processes":
                return ['interpersonal_processes', 'crew_performance', 'kinship','extraversion','agreeableness','neuroticism']
            case "stress_regulation":
                return ['stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "placemaking":
                return ['placemaking', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment']
            case "sleep":
                return ['sleep', 'depression', 'anxiety', 'sleep_quality']
            case "cognitive_function":
                return ['cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "sleep_quality":
                return ['sleep_quality']
            case "anxiety":
                return ['anxiety']
            case "agency":
                return ['agency']
            case "stress":
                return ['stress']
            case "crew_performance":
                return ['crew_performance']
            case "attachment":
                return ['attachment']
            case "trust":
                return ['trust']
            case "curiosity":
                return ['curiosity']
            case "kinship":
                return ['kinship']
            case "boredom":
                return ['boredom']
            case "tranquility":
                return ['tranquility']
            case "discontentment":
                return ['discontentment']
            case "nostalgia_homesickness":
                return ['nostalgia_homesickness']
            case "fear":
                return ['fear']
            case "awe":
                return ['awe']
            case "depression":
                return ['depression']
            default:
                return [];
        }
    }
    
    var clickedarrows = [];
    var hoveredarrows = [];

    innerBoxes.forEach(function (innerBox) {
        innerBox.addEventListener('mouseenter', function () {
            if (clickedBox) { //hovering over a box related to the clicked box
                var relatedBoxes = getRelatedBoxes(clickedBox);
                var smallBoxName = formatToSmallBoxName(innerBox.textContent);
                if (relatedBoxes.includes(smallBoxName)) {
                    var explanationBox = document.querySelector('.explanation');
                    var clickedAndCurName = clickedBox + "_" + smallBoxName;
                    var content = relatedBoxContents[clickedAndCurName];
                    explanationBox.innerHTML = `<div class="box-content"><div class="box-title"><strong>${content.title}</strong></div><div class="box-explanation">${content.explanation}</div></div>`;
                }
            }else{ //when nothing is clicked, hover works on any box
                var smallBoxName = formatToSmallBoxName(innerBox.textContent);
                var explanationBox = document.querySelector('.explanation');
                var content = boxContents[smallBoxName];
                explanationBox.innerHTML = `<div class="box-content"><div class="box-title"><strong>${content.title}</strong></div><div class="box-explanation">${content.explanation}</div></div>`;
                var relatedBoxes = getRelatedBoxes(smallBoxName);                
                var rightBoxes = getRightBoxes(smallBoxName);
                innerBoxes.forEach(function (box) {
                        var relatedBox = formatToSmallBoxName(box.textContent);
                        var isRelated = relatedBoxes.includes(relatedBox);
                    
                        if (!isRelated) { //if not in related, then we need to grey it out
                            box.classList.add('greyed-out-hover');
                        }else{
                            if (relatedBox != smallBoxName){
                                if (smallBoxName === 'team_processes_invisible' && relatedBox != 'training_and_preparation'){
                                    //do nothing, only arrow drawn when hovering over team processes is from training and preparation
                                }else if (smallBoxName === 'training_and_preparation' && relatedBox != 'team_processes_invisible' && relatedBox !== 'physical_health' && relatedBox !== 'group_living'){
                                    //do nothing, only arrow drawn when hovering over training and preparation is to team processes, physical health, and group living
                                }else if (smallBoxName === 'individual_traits_invisible' && relatedBox !== 'selection'){
                                    //do nothing, only arrow drawn when hovering over individual traits is from selection
                                }else if (smallBoxName === 'social_composition_invisible' && relatedBox !== 'selection'){
                                    //do nothing, only arrow drawn when hovering over social composition is from selection
                                }else if (smallBoxName === 'selection' && relatedBox !== 'individual_traits_invisible' && relatedBox !== 'social_composition_invisible'){
                                    //do nothing, only arrow drawn when hovering over selection is to individual traits and social composition
                                }else{
                                    if (rightBoxes.includes(relatedBox)){
                                        const arrow = arrowLine('.' + smallBoxName, '.' + relatedBox, { color: 'white' });
                                        hoveredarrows.push(arrow);
                                    }else{
                                        const arrow = arrowLine('.' + relatedBox, '.' + smallBoxName, { color: 'white' });
                                        hoveredarrows.push(arrow);
                                    } 
                                }
                            }
                        }
                });
            }
        });
        //remove arrows when boxes are unhovered (no clicking happened)
        innerBox.addEventListener('mouseleave', function(){ 
            innerBoxes.forEach(function (box) {
                box.classList.remove('greyed-out-hover');
            });
            hoveredarrows.forEach(arrow => arrow.remove()); // Remove existing arrows
            hoveredarrows = [];
        });
        //when a box is clicked, we draw arrows to all boxes it is connected to and grey out everything else
        innerBox.addEventListener('click', function () {       
            if (!innerBox.classList.contains('clicked')){
                innerBox.classList.add('clicked');
                var explanationBox = document.querySelector('.explanation');
                //Store the original content
                if (!explanationBox.dataset.originalContent) {
                    explanationBox.dataset.originalContent = explanationBox.innerHTML;
                }
    
                var boxElement = innerBox.closest('.box');
    
                if (boxElement) {
                    //Use the text content of the hovered element as the identifier
                    var smallBoxName = formatToSmallBoxName(innerBox.textContent);
                    var content = boxContents[smallBoxName];
                    clickedBox = formatToSmallBoxName(content.title);
                    explanationBox.innerHTML = `<div class="box-content"><div class="box-title"><strong>${content.title}</strong></div><div class="box-explanation">${content.explanation}</div></div>`;
                    
                    var relatedBoxes = getRelatedBoxes(smallBoxName);                
                    var rightBoxes = getRightBoxes(smallBoxName);
    
                    innerBoxes.forEach(function (box) {
                            //check if the small box is in relatedBoxes
                            var relatedBox = formatToSmallBoxName(box.textContent);
                            var isRelated = relatedBoxes.includes(relatedBox);
                            if (!isRelated) { //if not in related, then we need to grey it out
                                box.classList.add('greyed-out');
                            }else{
                                //drawing arrows connecting components using the arrowLine function
                                //https://github.com/stanko-arbutina/arrow-line?tab=readme-ov-file
                                if (relatedBox != smallBoxName){
                                    if (smallBoxName === 'team_processes_invisible' && relatedBox != 'training_and_preparation'){
                                        //do nothing, only arrow drawn when clicking team processes is from training and preparation
                                    }else if (smallBoxName === 'training_and_preparation' && relatedBox != 'team_processes_invisible' && relatedBox !== 'physical_health' && relatedBox !== 'group_living'){
                                        //do nothing, only arrow drawn when clicking training and preparation is to team processes, physical health, and group living
                                    }else if (smallBoxName === 'individual_traits_invisible' && relatedBox !== 'selection'){
                                        //do nothing, only arrow drawn when clicking individual traits is from selection
                                    }else if (smallBoxName === 'social_composition_invisible' && relatedBox !== 'selection'){
                                        //do nothing, only arrow drawn when clicking social composition is from selection
                                    }else if (smallBoxName === 'selection' && relatedBox !== 'individual_traits_invisible' && relatedBox !== 'social_composition_invisible'){
                                        //do nothing, only arrow drawn when clicking selection is to individual traits and social composition
                                    }else{
                                        if (rightBoxes.includes(relatedBox)){
                                            const arrow = arrowLine('.' + smallBoxName, '.' + relatedBox, { color: 'white' });
                                            clickedarrows.push(arrow);
                                        }else{
                                            const arrow = arrowLine('.' + relatedBox, '.' + smallBoxName, { color: 'white' });
                                            clickedarrows.push(arrow);
                                        } 
                                    }
                                }
                            }
                    });
    
                }
            }else{ //when the box is unclicked, we restore everything
                innerBox.classList.remove('clicked');
                clickedBox = null;
                var explanationBox = document.querySelector('.explanation');
                explanationBox.innerHTML = explanationBox.dataset.originalContent;
    
                innerBoxes.forEach(function (box) {
                    box.classList.remove('greyed-out');
                });
    
                clickedarrows.forEach(arrow => arrow.remove()); //remove existing arrows
                clickedarrows = [];
            }
        });

        
    });

});
